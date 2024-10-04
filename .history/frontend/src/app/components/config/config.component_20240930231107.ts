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
  nuevaConfig: Config = new Config(); // Define la propiedad nuevaConfig

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.getConfigs();
  }

  getConfigs(): void {
    this.configService.getConfigs().subscribe((configs) => {
      this.configs = configs;
    });
  }

  addConfig(): void { // Define el método addConfig
    this.configService.addConfig(this.nuevaConfig).subscribe(() => {
      this.getConfigs();
      this.nuevaConfig = new Config(); // Reinicia la propiedad nuevaConfig
    });
  }
}