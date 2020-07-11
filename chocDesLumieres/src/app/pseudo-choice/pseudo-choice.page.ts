import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { User } from '../entities/user';
import { UserStockageService } from '../services/user-stockage.service';

@Component({
  selector: 'app-pseudo-choice',
  templateUrl: './pseudo-choice.page.html',
  styleUrls: ['./pseudo-choice.page.scss'],
})
export class PseudoChoicePage implements OnInit {
  // Utilisateur
  // user:User = {pseudo: "",scoreTotal:0, concurrent:0, einsteinScore:0, fourasScore:0,trumpScore:0,zidaneScore:0}
  user:User;
  // Formulaire
  formInfo:FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router, 
    public toastController: ToastController,
    private storageService:StorageService,
    private userService:UserStockageService) { }

  ngOnInit() {
    console.log("ngOnit de la page du choix pseudo")
    this.createForm();
  }

  /**
   * Création du formulaire
   */
  createForm(){
    this.formInfo = this.formBuilder.group({
      pseudo:['',[Validators.required, Validators.minLength(3)]]
    })
  }

  /**
   * Vérification du formulaire 
   */
  validateForm(){
    
    if(this.formInfo.valid){
      
      this.user = this.userService.getCurrentUser();
      this.user.pseudo =this.formInfo.value.pseudo;
      console.log(this.user);
      // ================= Version avec Interface =======================
      // Vérifier la présence de l'utilisateur dans le storage
      this.storageService.getObject(this.user.pseudo).then((user)=>{
        if(user !== null){
          console.log("Le joueur existe")
          this.user = user;
        }else if(user === null){
          console.log("Création du joueur.")
          this.storageService.setObject(this.user['pseudo'].toLowerCase(), this.user);
        }
      })
      this.userService.updateCurrentUser(this.user);
      this.router.navigate(['dual-choice']);

      
    }
  }

  /**
   * Verification des erreurs
   */
  get errorControl(){
    return this.formInfo.controls;
  }


}
