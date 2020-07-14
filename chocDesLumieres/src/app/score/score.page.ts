import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { UserStockageService } from '../services/user-stockage.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  user:User;
  constructor( private storageService:StorageService, private userService:UserStockageService) {
    this.user = this.userService.getCurrentUser();
    console.log(this.user)
   }

  ngOnInit() {
  }


  deleteAppData(){
    this.storageService.clear();
  }

}
