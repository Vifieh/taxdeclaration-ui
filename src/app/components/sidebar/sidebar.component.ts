import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/storage/local-storage.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.localStorageService.signOut();
    this.router.navigate(['/']);
  }

}
