import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaxDTO} from "../../model/dto/tax-dto";
import {Subscription} from "rxjs";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {DeclareTaxService} from "../../services/declare-tax-service/declare-tax.service";
import {NotificationService} from "../../services/notification/notification.service";
import {Router} from "@angular/router";
import {TaxType} from "../../enum/tax-type";
import {NotificationType} from "../../model/notification-message";
import {PaymentService} from "../../services/payment/payment.service";

@Component({
  selector: 'app-summary-statements',
  templateUrl: './summary-statements.component.html',
  styleUrls: ['./summary-statements.component.css']
})
export class SummaryStatementsComponent implements OnInit, OnDestroy {

  declaredTaxId?: string;
  submitted: boolean = false;
  declaredTax!: TaxDTO;
  declaredTaxList: TaxDTO[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private declareTaxService: DeclareTaxService,
    private paymentService: PaymentService,
    private notificationService: NotificationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getTaxesDeclaredByUser();
  }

  ngOnDestroy(): void {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

  declareTaxForm = this.formBuilder.group({
      description: [''],
      amount: ['', [Validators.required]],
      typeOfTax: [TaxType.SS, [Validators.required]]
    }
  );

  get formValues(): { [key: string]: AbstractControl } {
    return this.declareTaxForm.controls;
  }

  declareTax() {
    this.submitted = true;
    if (!this.declareTaxForm.valid) {
      const message = "please fill all fields in the form";
      this.notificationService.sendMessage({message: message, type: NotificationType.info});
    } else {
      const declareTaxSub = this.declareTaxService.declareTax(this.declareTaxForm.value)
        .subscribe(response =>{
          this.declaredTax = response
          this.getTaxesDeclaredByUser()
        });
      this.subscriptions.push(declareTaxSub);
    }
  }

  getTaxesDeclaredByUser() {
    const declaredTaxListSub = this.declareTaxService.getTaxesDeclaredByUser(TaxType.SS).subscribe(response => {
      this.declaredTaxList = response;
    });
    this.subscriptions.push(declaredTaxListSub);
  }

  getDeclaredTax(declaredTaxId: string) {
    const declaredTaxSub = this.declareTaxService.getDeclaredTax(declaredTaxId).subscribe(response => {
      this.declaredTax = response;
    });
    this.subscriptions.push(declaredTaxSub);
  }

  getDeclaredTaxId(declaredTaxId: string) {
    this.declaredTaxId = declaredTaxId;
    this.getDeclaredTax(declaredTaxId);
  }

  deleteDeclaredTax() {
    const messageSub = this.declareTaxService.deleteDeclaredTax(this.declaredTaxId)
      .subscribe(response => {
        this.notificationService.sendMessage({message: response.message, type: NotificationType.success});
        this.getTaxesDeclaredByUser();
      });
    this.subscriptions.push(messageSub);
  }

  payDeclaredTax() {
    const messageSub = this.paymentService.payDeclareTax(this.declaredTaxId)
      .subscribe(response => {
        this.notificationService.sendMessage({message: response.message, type: NotificationType.success});
        this.getTaxesDeclaredByUser();
      });
    this.subscriptions.push(messageSub);
  }
}
