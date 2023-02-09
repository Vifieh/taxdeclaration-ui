import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastContainerModule, ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VatComponent } from './pages/vat/vat.component';
import { EnumToArrayPipe } from './pipes/enum-to-array/enum-to-array.pipe';
import {AuthInterceptorService} from "./interceptors/auth-interceptor.service";
import { PublicOrderComponent } from './pages/public-order/public-order.component';
import { FeesAndDisbursementsComponent } from './pages/fees-and-disbursements/fees-and-disbursements.component';
import { SummaryStatementsComponent } from './pages/summary-statements/summary-statements.component';
import {PurchaseOfStampsComponent} from "./pages/purchase-of-stamps/purchase-of-stamps.component";
import { LandRoyaltyComponent } from './pages/land-royalty/land-royalty.component';
import { RealEstateChangesComponent } from './pages/real-estate-changes/real-estate-changes.component';
import { JudicialActsComponent } from './pages/judicial-acts/judicial-acts.component';
import { StateTaxesComponent } from './pages/state-taxes/state-taxes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    VatComponent,
    EnumToArrayPipe,
    PurchaseOfStampsComponent,
    PublicOrderComponent,
    FeesAndDisbursementsComponent,
    SummaryStatementsComponent,
    LandRoyaltyComponent,
    RealEstateChangesComponent,
    JudicialActsComponent,
    StateTaxesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
      ToastrModule.forRoot({
        timeOut: 5000,
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        tapToDismiss: false,
        positionClass: 'toast-top-full-width',
        preventDuplicates: false
      }),
      ToastContainerModule,
      BrowserAnimationsModule,

    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],  bootstrap: [AppComponent]
})
export class AppModule { }
