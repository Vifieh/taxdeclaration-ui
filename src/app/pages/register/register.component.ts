import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/auth-service/authentication.service";
import {NotificationService} from "../../services/notification/notification.service";
import {Router} from "@angular/router";
import {NotificationType} from "../../model/notification-message";
import {Role} from "../../enum/role";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  roles = Role;
  showCompany: boolean = false;
  submitted: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private router: Router,
  ) {
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
      companyName: [''],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]]
    }
  );

  get formValues(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    if (!this.registerForm.valid) {
      const message = "please fill all fields in the form";
      this.notificationService.sendMessage({message: message, type: NotificationType.info});
    } else {
      const registerSub = this.authenticationService.register(this.registerForm.value)
        .subscribe(response => {
          const message = "Please check your email to verify your account before logging in";
          this.notificationService.sendMessage({message: message, type: NotificationType.info});
          this.router.navigate(['/']);
        });
      this.subscriptions.push(registerSub);
    }
  }

  showCompanyField(event: any) {
    this.showCompany = event.target.value === 'ROLE_COMPANY';
  }

}


