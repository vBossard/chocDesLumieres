import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pseudo-choice',
  templateUrl: './pseudo-choice.page.html',
  styleUrls: ['./pseudo-choice.page.scss'],
})
export class PseudoChoicePage implements OnInit {
  // Utilisateur
  user:User;
  // Formulaire
  formInfo:FormGroup;

  constructor(private formBuilder: FormBuilder,private router:Router, 
    public toastController: ToastController,
    private storageService:StorageService) { }

  ngOnInit() {
    console.log("ngOnit de la page du choix pseudo")
    this.createForm();
  }

  /**
   * Création du formulaire
   */
  createForm(){
    this.formInfo = this.formBuilder.group({
      pseudo:['',[Validators.required, Validators.minLength(3)]],
      remember:[true,]
    })
  }

  /**
   * Vérification du formulaire 
   */
  validateForm(){
    
    if(this.formInfo.valid){
      console.log(this.formInfo.value)
      this.user =this.formInfo.value;
      console.log(this.user['pseudo']);
      if(this.user['remember']){
        this.storageService.setObject(this.user['pseudo'], this.user);
      }

      
      this.router.navigate(['dual-choice'], {queryParams : this.user});
    }
  }

  /**
   * Verification des erreurs
   */
  get errorControl(){
    return this.formInfo.controls;
  }


}
