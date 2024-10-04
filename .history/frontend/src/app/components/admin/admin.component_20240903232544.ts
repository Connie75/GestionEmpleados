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
  nuevoAdmin: Admin = {
    username: '',
    password: '',
    role: ''
  };

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins(): void {
    this.adminService.getAdmins().subscribe(data => {
      this.admins = data;
    });
  }

  agregarAdmin(): void {
    this.adminService.createAdmin(this.nuevoAdmin).subscribe(admin => {
      this.admins.push(admin);
      this.nuevoAdmin = {
        username: '',
        password: '',
        role: ''
      };
    });
  }

  eliminarAdmin(id: string): void {
    this.adminService.deleteAdmin(id).subscribe(() => {
      this.admins = this.admins.filter(e => e._id !== id);
    });
  }
}
