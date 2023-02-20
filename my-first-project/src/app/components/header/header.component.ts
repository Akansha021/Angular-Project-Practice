import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
  <h2 class="text-danger"> Welcome {{ name }}</h2>
  <!-- <h2 class="text-danger"> Welcome {{ name | slice:1:3 }}</h2> Piping 
  <h2 class="text-danger"> Welcome {{ name | titlecase}}</h2>  
  <h2 class="text-danger">{{info | json}}</h2>  -->
  <h2 class="text-success"> My Page</h2>
  <h2 [class]="successClass"> My Text</h2>
  <h2 [class.text-danger]="hasError"> My Page </h2>
  <h2 [style.color]="display ? 'red' : 'green' "> Style Binding </h2> 
  <h2 [style.color]="markedColor">Color</h2>
  <input #myInput type="text" (input)="myText($event)"/>

  <div *ngFor="let color of colors; index as i">
    {{val}}
    {{i}} {{color}}
  </div>

  
  <button (click)="myMessage(myInput.value)">Print</button>

  <h2 [ngClass]="messageClasses"> My Text </h2>

`,styles:[`
.text-success {
   color: green;
}
.text-danger {
   color: red;
}
.text-special{
  font-style: italic;
}
`]
  
})
export class HeaderComponent {
 
  public name="ABCDEFG";
  public successClass="text-success"
  public info={
   "first-info":"first",
   "second-info":"second"
  }
  public hasError = true;
  public isSpecial = true;
  public display =true;
  public markedColor ="grey";
  public messageClasses ={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public colors=["yellow","green","violet"];

  val:String="";

  myMessage(value: any){
   console.log(value);
  }
   
  myText(event: any){

    this.val= event.target.value;
  }
}
