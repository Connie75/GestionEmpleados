import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins: Admin[];

  constructor() {
    this.admins = [
      new Admin(1, 'Admin1', 'Role1', 'username1', 'password1'),
      new Admin(2, 'Admin2', 'Role2', 'username2', 'password2')
    ];
  }

  ngOnInit(): void {
    // Lógica adicional si es necesario
  }
}
