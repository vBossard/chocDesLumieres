import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserStockageService {
  user:User = {pseudo: "",scoreTotal:0, concurrent:0, einsteinScore:0, fourasScore:0,trumpScore:0,zidaneScore:0}
  
  
  constructor() { }


  getCurrentUser(){
    return this.user;
  }

  updateCurrentUser(user:User){
    this.user = user;
  }
}
