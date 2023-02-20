import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  public users: any;
  constructor(private route:ActivatedRoute,private userService:MyserviceService ){

  }

  ngOnInit(){
    let id=this.route.snapshot.params['id'];
    this.userService.getUser(id).subscribe(
      id1=>this.users=id1
      //console.log(user);
    )
  }

}
