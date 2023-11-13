import { Component } from '@angular/core';
import { FormGroup,  FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {


  registerForm: FormGroup;

  nameInput: FormControl;
  occupationInput: FormControl
  emailInput: FormControl;
  subjectInput: FormControl;
  contentInput: FormControl;

  constructor( ) {
    
    this.nameInput = new FormControl("", [Validators.required]);
    this.occupationInput=  new FormControl("");
    this.emailInput = new FormControl("", [Validators.required, Validators.email]);
    this.subjectInput = new FormControl("", [Validators.required]);
    this.contentInput = new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(255)]);

    this.registerForm = new FormGroup({
      name: this.nameInput,
      occupation: this.occupationInput,
      email: this.emailInput,
      subject: this.subjectInput,
      content: this.contentInput
    });

  } 

  onSubmit(): void {
    alert("User created...");
    //console.log(this.registerForm.value)
    this.registerForm.reset()
  }


}
