import { Injectable, resolveForwardRef } from '@angular/core';
import { F1InfoService } from './f1-info.service';
import { Races } from '../interface/interfacesGames/races';
import { UserService } from './user.service';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class ManagementInfoService {
  public season: Races[] = [];
  public users: User[] = [];
  constructor(private f1Info: F1InfoService, private userService: UserService) { }

  getRacesWins(/*PARAMETRO DEL AÑO ALEATORIO*/): Array<Races> {
    let data = [];
    this.f1Info.getWinnersBySeason("2024").then(response => {
      data = response['MRData']['RaceTable']['Races'];
      console.log(data);
      if (data != null) {
        data.forEach( (dt: any) => {
          let race: Races = {
            raceId: dt['Circuit']['circuitId'],
            season: dt['season'],
            raceName: dt['raceName'],
            location: dt['Circuit']['Location']['country'],
            driverName: dt['Results']['0']['Driver']['givenName'],
            driverLastName: dt['Results']['0']['Driver']['familyName'],
            driverConstructor: dt['Results']['0']['Constructor']['name'],
            driverNationality: dt['Results']['0']['Driver']['nationality'],
            
          }
          this.season.push(race);
        });
      }
    })
    return this.season;
  }
  getUserArray() : Array<User>{
    let data = [];
    this.userService.getUser().then( response => {
      data = response;
      if(data != null){
        data.forEach( (dt: any) => {
          let user: User = {
            email: dt['email'],
            password: dt['password'],
            id: dt['id'],
            firstName: dt['firstName'],
            lastName: dt['lastName'],
            userName: dt['userName']
          }
          this.users.push(user);
        });
      }})
      return this.users;
    }
    
  getById(id: number): Promise<any>{
    return new Promise((resolve,reject) =>{

      const user = this.users.find(user => user.id ==id);
      
      if (user){
        resolve(user);
      }
      else{
        reject(new Error("User not found"));
      }
    });
    }
    
  }
