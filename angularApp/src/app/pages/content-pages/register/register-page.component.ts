import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../../shared/directives/must-match.validator';
import { Router } from '@angular/router';
import { AccountService } from 'app/user/account.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent implements OnInit {
  registerFormSubmitted = false;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get rf() {
    return this.registerForm.controls;
  }


  //  On submit click, reset field value
  onSubmit() {
    this.registerFormSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    debugger
    let postData = new FormData();

    postData.append('username', this.registerForm.value.name);
    postData.append('email', this.registerForm.value.email);
    postData.append('password', this.registerForm.value.password);
    postData.append('confirmPassword', this.registerForm.value.confirmPassword);
    postData.append('acceptTerms', this.registerForm.value.acceptTerms);

    this.accountService.registerUser(postData).subscribe({
      next: (data: any) => {
        debugger
        console.log(data);
      },
      error: error => {
        debugger
          console.log(error); 
      }
    });

    // this.router.navigate(['/pages/login']);
  }
}
