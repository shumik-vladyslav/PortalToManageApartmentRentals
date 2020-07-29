import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
