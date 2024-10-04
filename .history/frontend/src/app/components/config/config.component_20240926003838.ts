import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Config } from '../../models/config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configs: Config[] = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.getConfigs();
  }

  getConfigs(): void {
    this.configService.getConfigs().subscribe((configs) => {
      this.configs = configs;
    });
  }
}
