import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss'],
})
export class LinkFormComponent {
  form = this.fb.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$'),
      ],
    ],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    // Call Send email API

    this.router.navigate(['success']);
  }

  get username() {
    return this.form.get('username');
  }

  get mobile() {
    return this.form.get('mobile');
  }
}

