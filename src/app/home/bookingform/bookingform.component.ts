import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  bookingForm : FormGroup;
  ChooseDate;
  flag=true;
  message=false;
  constructor() { }

  ngOnInit() {
    this.bookingForm = new FormGroup({
      FirstNameBooking : new FormControl("", [Validators.required, Validators.pattern('[A-z\\sa-z]{1,30}')]),
      AddressNameBooking : new FormControl("", [Validators.required, Validators.pattern('[A-z\\sa-z0-9]{1,40}')]),
      LastNameBooking : new FormControl("", [Validators.required, Validators.pattern('[A-z\\sa-z]{1,30}')]),
      MessageBooking : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(200)]),
      NumberBooking : new FormControl("", [Validators.required,Validators.pattern('^[\+0-9]{4,13}$')]),
      EmailBooking : new FormControl("", [Validators.required,  Validators.email]),
      TimeBooking : new FormControl("", [Validators.required]),
      DateBooking : new FormControl("", [Validators.required]),
      car : new FormControl('Economy'),

    })
  }

  checkdate(event:any){
var ll=this.ChooseDate=event.target.value;

var choosenDate=new Date(this.ChooseDate).getTime();
var today=new Date().getTime();
if(today+86400>choosenDate){
  this.flag=false;
}
else{
  this.flag=true;
}
  }
  onSubmitBookingForm(){
  this.message=true;
 this.bookingForm.reset();

  }
}
