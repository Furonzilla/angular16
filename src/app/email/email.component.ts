
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailAdressValidator } from 'src/shared/email.adress.validator';
import { passwordValidator } from 'src/shared/password.validator';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      zipCode: [''],
    }),
    credentials: this.fb.group({
      password: ['', [Validators.required, passwordValidator]],
      email: ['', [Validators.required, emailAdressValidator]],
    }),
  });

  onSubmit() {}

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
