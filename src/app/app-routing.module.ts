import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {VatComponent} from "./pages/vat/vat.component";
import {PurchaseOfStampsComponent} from "./pages/purchase-of-stamps/purchase-of-stamps.component";
import {PublicOrderComponent} from "./pages/public-order/public-order.component";
import {FeesAndDisbursementsComponent} from "./pages/fees-and-disbursements/fees-and-disbursements.component";
import {SummaryStatementsComponent} from "./pages/summary-statements/summary-statements.component";
import {LandRoyaltyComponent} from "./pages/land-royalty/land-royalty.component";
import {RealEstateChangesComponent} from "./pages/real-estate-changes/real-estate-changes.component";
import {JudicialActsComponent} from "./pages/judicial-acts/judicial-acts.component";
import {StateTaxesComponent} from "./pages/state-taxes/state-taxes.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'pos',
    component: PurchaseOfStampsComponent
  },
  {
    path: 'po',
    component: PublicOrderComponent
  },
  {
    path: 'fad',
    component: FeesAndDisbursementsComponent
  },
  {
    path: 'sys',
    component: SummaryStatementsComponent
  },
  {
    path: 'vat',
    component: VatComponent
  },
  {
    path: 'lr',
    component: LandRoyaltyComponent
  },
  {
    path: 'rec',
    component: RealEstateChangesComponent
  },
  {
    path: 'ja',
    component: JudicialActsComponent
  },
  {
    path: 'st',
    component: StateTaxesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
