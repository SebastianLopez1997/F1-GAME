import { Injectable, resolveForwardRef } from '@angular/core';
import { F1InfoService } from './f1-info.service';
import { Race } from '../interface/interfacesGames/race';
import { UserService } from './user.service';
import { User } from '../interface/user';
import { Driver } from '../interface/interfacesGames/driver';

@Injectable({
  providedIn: 'root'
})
export class ManagementInfoService {
  public season: Race[] = [];
  public users: User[] = [];
  constructor(private f1Info: F1InfoService, private userService: UserService) { }

  getRacesWins(/*PARAMETRO DEL AÑO ALEATORIO*/): Array<Race> {
    let data = [];
    this.f1Info.getWinnersBySeason("2024").then(response => {
      data = response['MRData']['RaceTable']['Races'];
      console.log(data);
      if (data != null) {
        data.forEach((dt: any) => {
          let race: Race = {
            raceId: dt['Circuit']['circuitId'],
            season: dt['season'],
            raceName: dt['raceName'],
            location: dt['Circuit']['Location']['country'],
            driver :  {
              id: dt['Results'][0]['Driver']['driverId'],
              numberCar: dt['Results'][0]['Driver']['permanentNumber'],
              name: dt['Results'][0]['Driver']['givenName'],
              lastName: dt['Results'][0]['Driver']['familyName'],
              constructor: dt['Results'][0]['Constructor']['name'],
              nationality: dt['Results'][0]['Driver']['nationality']
            }

          }
          this.season.push(race);
        });
      }
    })
    return this.season;
  }

}

