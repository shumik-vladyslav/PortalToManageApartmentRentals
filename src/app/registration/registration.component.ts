import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({

            "userName": new FormControl("", Validators.required),
            "userEmail": new FormControl("", [
                                Validators.required,
                                Validators.email
                            ]),
            "userPass": new FormControl("", Validators.required),
            "userRepPass": new FormControl("", Validators.required)
        });
    }

    submit(){
        console.log(this.myForm);
    }

  ngOnInit(): void {
  }

}
