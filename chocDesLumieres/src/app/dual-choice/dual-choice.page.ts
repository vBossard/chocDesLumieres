import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ActivatedRoute } from '@angular/router';
import CharacterData from '../../assets/data/character/characters.json';
import { Character } from '../entities/character';

@Component({
  selector: 'app-dual-choice',
  templateUrl: './dual-choice.page.html',
  styleUrls: ['./dual-choice.page.scss'],
})
export class DualChoicePage implements OnInit {
  // Utilisateur en cours 
  user:User = {pseudo: "",score:0, remember:false, concurrent:0}
  // Liste des concurrents
  characters:Array<Character> = CharacterData;
  constructor(private strorageService:StorageService,private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.user.pseudo = params.pseudo
    })
  }

  ngOnInit() {
    console.log(this.characters)
    console.log(this.user['pseudo'])
    this.strorageService.getObject(this.user.pseudo).then((user)=>{
      this.user = user;
    })
    console.log(this.user)


  }
}
