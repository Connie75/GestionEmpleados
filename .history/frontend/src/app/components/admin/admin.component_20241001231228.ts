import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admins: Admin[] = [];
  nuevoAdmin: Admin = new Admin(); // Define la propiedad nuevoAdmin

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAdmins().subscribe((admins) => {
      this.admins = admins;
    });
  }

  addAdmin(): void { // Define el método addAdmin
    this.adminService.addAdmin(this.nuevoAdmin).subscribe(() => {
      this.getAdmins();
      this.nuevoAdmin = new Admin(); // Reinicia la propiedad nuevoAdmin
    });
  }
}