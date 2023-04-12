import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  fnamevalue!:string;
  lnamevalue!:string;
  emailvalue!:string;
  contactvalue!:string;

 @Output() updateStdinfo: EventEmitter<Istd>= new EventEmitter<Istd>()
  constructor() { }
  
  ngOnInit(): void {
  }
  onStdadd(){
    let obj:Istd={
      fname:this.fnamevalue,
      lname:this.lnamevalue,
      email:this.emailvalue,
      contact:+this.contactvalue
    }
    console.log(obj)
    this.updateStdinfo.emit(obj)
    this.fnamevalue="",
    this.lnamevalue="",
    this.emailvalue='',
    this.contactvalue=''
  }
}
