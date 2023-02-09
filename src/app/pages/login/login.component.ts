import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/auth-service/authentication.service";
import {NotificationService} from "../../services/notification/notification.service";
import {LocalStorageService} from "../../services/storage/local-storage.service";
import {Router} from "@angular/router";
import {StorageData} from "../../model/storage-data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  submitted: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions){
      sub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
    }
  );

  get formValues(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login(){
    this.submitted = true;
    if (!this.loginForm.valid) {
      alert("please fill all fields in the form")
    } else {
      const loginSub = this.authenticationService.
      login(this.loginForm.value)
        .subscribe(
          authUser => {
            const storage: StorageData = {
              email: authUser.email,
              id: authUser.id,
              refreshToken: authUser.refreshToken,
              expiredIn: authUser.expiredIn,
              role: authUser.role,
              type: authUser.type,
              accessToken: authUser.accessToken
            };
            this.localStorageService.setStorageData(storage);
            this.router.navigate(['/dashboard']);
          }
        )
      this.subscriptions.push(loginSub);
    }
  }
}

