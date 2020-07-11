import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import CharacterData from '../../assets/data/character/characters.json';
import { Character } from '../entities/character';
import { Quiz } from '../entities/quiz';
import { User } from '../entities/user';
import { UserStockageService } from '../services/user-stockage.service';

@Component({
  selector: 'app-dual-choice',
  templateUrl: './dual-choice.page.html',
  styleUrls: ['./dual-choice.page.scss'],
})
export class DualChoicePage implements OnInit {
  // Utilisateur en cours 
  // user = {pseudo: "",scoreTotal:0, concurrent:0, einsteinScore:0, fourasScore:0,trumpScore:0,zidaneScore:0}
  user:User;
  // Liste des concurrents
  characters:Array<Character> = CharacterData;
  // Quiz choisi par l'utilisateur
  quiz:Quiz;

  constructor(private storageService:StorageService,
    private route: ActivatedRoute,
    private router:Router,
    private userService:UserStockageService) { 
      this.user = this.userService.getCurrentUser();
      console.log(this.user);
      
  }

  ngOnInit() {
    console.log("Passe Ici")
  }


  getQuiz(characterId:number){
    // Gérer le niveau de l'utilisateur
    // Intégrer le niveau de l'utilisateur pour choisir après le niveau du quiz
    this.user.concurrent = characterId;
    this.userService.updateCurrentUser(this.user);
    this.router.navigate(['game']);
    
  }
}
