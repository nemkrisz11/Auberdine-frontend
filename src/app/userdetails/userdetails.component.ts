import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  username = '';
  email = '';
  errMsg = '';

  userDetailsForm: any;

  constructor(
    public router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((ret: any) => {
      this.username = ret.name;
      this.email = ret.email;
    });
    this.userDetailsForm = this.formBuilder.group({
      name: ['', []],
      regi_jelszo: ['', [Validators.required, Validators.minLength(8)]],
      uj_jelszo: ['', [Validators.required, Validators.minLength(8)]],
      uj_jelszo_meg_egyszer: [
        '',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }

  changeUserData() {
    const val = this.userDetailsForm.value;

    if (this.userDetailsForm.valid) {
      this.userService
        .postUserData(this.userDetailsForm)
        .subscribe((response) => {
          if (
            Object.keys(response).length === 0 &&
            response.constructor === Object
          ) {
            this.userService.userNameSource.next(
              this.userDetailsForm.value.name
            );
            this.router.navigate(['ajanlatok']);
          } else {
            this.errMsg = response[Object.keys(response)[0]][0];
          }
        });
    }
  }
}
