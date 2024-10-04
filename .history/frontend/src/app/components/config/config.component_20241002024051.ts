import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/models/config.model';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configs: Config[];

  constructor() {
    this.configs = [
      new Config('setting1', 'value1', 'key1'),
      new Config('setting2', 'value2', 'key2')
    ];
  }

  ngOnInit(): void {
    // Lógica adicional si es necesario
  }
}
