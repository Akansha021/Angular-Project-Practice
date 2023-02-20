import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-firsttrial',
  templateUrl: './firsttrial.component.html',
  styleUrls: ['./firsttrial.component.css']
})
export class FirsttrialComponent implements OnInit {

  @Input() public haveDoc: any;
  public users = [] as any;
  public errorMssg: any;

  constructor(private myservice: MyserviceService){
    
  }

  ngOnInit() {
    this.myservice.getAllDoc().subscribe(  
      data=> this.users=data,
      error => this.errorMssg = error);
    };

  message: string = "Hello Asia!"

  @Output() messageEvent = new EventEmitter<string>();

  /*
  users:any[]=[
    {id:1,title:'abc',city:'def',dob:new Date("12/07/1990")},
    {id:2,title:'abc',city:'def',dob:new Date("03/07/1987")},
    {id:3,title:'abc',city:'def',dob:new Date("01/08/1988")}
  ];
  */



  sendMessage() {
    this.messageEvent.emit(this.message)
  }

  onSelect(){
    
  }
}
