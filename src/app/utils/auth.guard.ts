import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private router : Router ){}
canActivate(
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot): MaybeAsync<GuardResult> {

  const token = localStorage.getItem("token");
  if(token == undefined){
    this.router.navigate(['/login']);
  }
  return true;
}

}

