import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-first-project';
  haveMyDoc =false;

  public message: string="";

  receiveMessage($event: string) {
    this.message = $event
  }
}
