import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() email: string = "";
  @Input() password: string = "";

  public users: any;

  constructor(private _myService: LoginService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._myService.getUsers().subscribe(
      data => {
        this.users = data;

        this.email = this.users.email;
        this.password = this.users.password;
      },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  profileForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    this.router.navigate(['/ticket-statistics']);

  }


}
