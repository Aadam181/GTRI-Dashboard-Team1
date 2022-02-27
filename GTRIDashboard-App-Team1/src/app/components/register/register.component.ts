import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
@Input() name: string = "";
  @Input() email: string = "";
  @Input() password: string = "";
  @Input() cpassword: string = "";
 
  public users: any;
  constructor(private _myService: RegisterService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._myService.getUsers().subscribe(
      data => {
        this.users = data;

        this.name = this.users.name;
        this.email = this.users.email;
        this.password = this.users.password;
        this.cpassword = this.users.cpassword;
      },
      err => console.error(err),
      () => console.log('finished loading')
    );
  }

  profileForm = this.fb.group({
    name: ['', Validators.required], 
    email: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required],
  });

  onSubmit() {
    this._myService.addUsers(this.name, this.email ,this.password);
    this.router.navigate(['/login']);
  }
}
