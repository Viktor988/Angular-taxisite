import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  message: boolean = false;

  constructor() { }

  ngOnInit(){
    this.contactForm = new FormGroup({
      'firstName' : new FormControl("", [Validators.required, Validators.pattern('[A-z\\sa-z]{1,30}')]),
      'Email' : new FormControl("", [Validators.required, Validators.email]),
      'LastName' : new FormControl("", [Validators.required, Validators.pattern('[A-z\\sa-z]{1,30}')]),
      'Message' : new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(200)])
    })
   
  }

clear(){
  this.contactForm.reset()
  this.message = false;
}
  onSubmit(){
    console.log(this.contactForm)
    this.message = true;

  }

}
