import { Component, OnInit } from '@angular/core';
import { F1InfoService } from '../../../services/f1-info.service';
import { Driver } from '../../../interface/interfacesGames/driver';
import { ManagementInfoService } from '../../../services/management-info.service';

@Component({
  selector: 'app-data-driver',
  templateUrl: './data-driver.component.html',
  styles: ``,
})
export class DataDriverComponent implements OnInit {
  drivers: Driver[] = [];
  constructor(private _infoService : ManagementInfoService){}
  ngOnInit(): void {
    this.drivers = this._infoService.getDrivers(2024);
    console.log(this.drivers);
    
  }
}
