import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserStockageService {
  user:User = {pseudo: "",scoreTotal:0, concurrent:0, 
  einsteinScore:0,
  jordanScore:0,
  hepburnScore:0,
  fangioScore:0,
  beyonceScore:0,
  gatesScore:0,
  bernersScore:0,
  petersonScore:0,
  montalciniScore:0,
  cooperScore:0,
  kahloScore:0,
  tabarlyScore:0}
  
  
  constructor(private storageService:StorageService) { }


  getCurrentUser(){
    return this.user;
  }

  updateCurrentUser(user:User){
    this.storageService.setObject(this.user.pseudo.toLowerCase(), this.user);
    this.user = user;
  }
}
