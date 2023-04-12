import { Component } from '@angular/core';
import { Istd } from './shared/model/student';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inputouttask1';
  stdArry:Array<Istd>=[
    {
      fname:"jhon",
      lname:"doe",
      email:"jd@gmail",
      contact:855755255
    }
  ]

  onStdUpdate(data:Istd){
    console.log(data)
    this.stdArry.push(data)
  }

}
