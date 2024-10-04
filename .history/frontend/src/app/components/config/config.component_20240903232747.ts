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
  nuevaConfig: Config = {
    key: '',
    value: ''
  };

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.obtenerConfigs();
  }

  obtenerConfigs(): void {
    this.configService.getConfigs().subscribe(configs => {
      this.configs = configs;
    });
  }

  agregarConfig(): void {
    this.configService.createConfig(this.nuevaConfig).subscribe(config => {
      this.configs.push(config);
      this.nuevaConfig = {
        key: '',
        value: ''
      };
    });
  }
}

