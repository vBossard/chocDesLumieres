import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { StorageService } from '../services/storage.service';
import { User } from '../entities/user';
import { UserStockageService } from '../services/user-stockage.service';
import { PopoverController } from '@ionic/angular';
import { AnecdotePopover } from './anecdote-popover.component';
import { ScorePopover } from './score-popover.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  
  user:User;
  quiz:Quiz;
  listQuestions:Array<any> = [];
  listReponse =[];
  questionNumber:number;
  bonneReponse;
  question = {};
  ansmwerSubmitted:boolean = false;
  showAnswerColor = false;
  disableAnswer = false;
  anecdote:string;

  // Score selon le concurrent
  currentDualScore;
  scoreToUpdate:string;

  constructor(private route:ActivatedRoute, 
    private quizService:QuizService,
    private router:Router,
    private storageService:StorageService,
    private userService:UserStockageService,
    public popoverController:PopoverController) { 
      this.user = this.userService.getCurrentUser();
      console.log(this.user);
      // Récupérer le score en fonction du concurrent
      let score = this.getCurrentConcurrent(this.user.concurrent)
      // Récupérer la liste des questions
      this.listQuestions = this.quizService.getQuiz(this.user.concurrent, score);
      this.questionNumber =  0;
      // Récupérer la question courante
      this.getCurrentQuestion();
    }

  ngOnInit() {
  
  }
  /**
   * Choisir la question 
   */
  getCurrentQuestion(){
    
    let questionToDisplay = this.listQuestions[this.questionNumber];
    this.bonneReponse = questionToDisplay.reponse;
    // Prendre la bonne réponse
    questionToDisplay.propositions.forEach(reponse => {
      if(reponse !== this.bonneReponse){
        this.listReponse.push({text: reponse, color :"danger"})
      }else{
        this.listReponse.push({text: reponse, color :"success"})
      }       
    });
    this.questionNumber += 1;
    this.anecdote = questionToDisplay.anecdote;
    this.question = questionToDisplay;
    console.log(this.question)
  }


  /**
   * Mélange la liste des réponses
   * @param array 
   */
  shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
    return array;
  }
  /**
   * Verification de la réponse du joueur
   * @param reponseUser 
   */
  submitAnswer(reponseUser){
    this.ansmwerSubmitted = true;
    this.showAnswerColor = true;
    this.disableAnswer = true;
    if(reponseUser === this.bonneReponse){
      this.user.scoreTotal += 1;
      this.user[this.scoreToUpdate] += 1;
    }
  }

  /**
   * Envoie la question suivante
   * Verifie que le quizz n'est pas terminé
   * Si terminé => envoie vers la page des score
   */
  nextQuestion(){
    this.listReponse = [];
    this.ansmwerSubmitted = false;
    this.showAnswerColor = false;
    this.disableAnswer = false;
    if(this.questionNumber === this.listQuestions.length){
      this.endQuizz();
    }else{
      this.getCurrentQuestion();
    }
    
  }

  getCurrentConcurrent(concurrent){
    const currentConc = Number(concurrent)
    switch(true) { 
      case currentConc  === 1: { 
        this.currentDualScore = this.user.einsteinScore;
        this.scoreToUpdate = "einsteinScore";
        return this.user.einsteinScore;
        break; 
      } 
      case currentConc  === 2: { 
        this.currentDualScore = this.user.jordanScore;
        this.scoreToUpdate = "jordanScore";
        return this.user.jordanScore;
        break; 
      }
      case currentConc  === 3: { 
        this.currentDualScore = this.user.hepburnScore;
        this.scoreToUpdate = "hepburnScore";
        return this.user.hepburnScore;
        break; 
      } 
      case currentConc  === 4: { 
        this.currentDualScore = this.user.fangioScore;
        this.scoreToUpdate = "fangioScore";
        return this.user.fangioScore; 
        break; 
      }
      case currentConc  === 5: { 
        this.currentDualScore = this.user.beyonceScore;
        this.scoreToUpdate = "beyonceScore";
        return this.user.beyonceScore; 
        break; 
      }
      case currentConc  === 6: { 
        this.currentDualScore = this.user.gatesScore;
        this.scoreToUpdate = "gatesScore";
        return this.user.gatesScore; 
        break; 
      }
      case currentConc  === 7: { 
        this.currentDualScore = this.user.bernersScore;
        this.scoreToUpdate = "bernersScore";
        return this.user.bernersScore; 
        break; 
      }
      case currentConc  === 8: { 
        this.currentDualScore = this.user.petersonScore;
        this.scoreToUpdate = "petersonScore";
        return this.user.petersonScore; 
        break; 
      }
      case currentConc  === 9: { 
        this.currentDualScore = this.user.montalciniScore;
        this.scoreToUpdate = "montalciniScore";
        return this.user.montalciniScore; 
        break; 
      }
      case currentConc  === 10: { 
        this.currentDualScore = this.user.cooperScore;
        this.scoreToUpdate = "cooperScore";
        return this.user.cooperScore; 
        break; 
      }
      case currentConc  === 11: { 
        this.currentDualScore = this.user.kahloScore;
        this.scoreToUpdate = "kahloScore";
        return this.user.kahloScore; 
        break; 
      }
      case currentConc  === 12: { 
        this.currentDualScore = this.user.tabarlyScore;
        this.scoreToUpdate = "tabarlyScore";
        return this.user.tabarlyScore; 
        break; 
      } 
      default: { 
          break; 
      } 
    }
  }
  /**
   * Fin du quizz
   * Sauvegarde et envoie vers la page score
   */
  endQuizz(){
    this.userService.updateCurrentUser(this.user);
    this.getScore();
    //this.router.navigate(['score']);
  }

  async getScore(){
    const popover = await this.popoverController.create({
      component: ScorePopover,
      cssClass: 'score-pop-class',
      componentProps:{
        "currentScore" : this.user[this.scoreToUpdate],
        "totalScore" : this.user.scoreTotal
      },
      translucent: true
    });
    return await popover.present();
  }


  /**
   * Declenche la pop-up affichant l'anecdote de la question
   * @param anecdote 
   */
  async getAnecdote(anecdote: any) {
    const popover = await this.popoverController.create({
      component: AnecdotePopover,
      cssClass: 'my-custom-class',
      event: anecdote,
      componentProps:{"anecdote" : anecdote},
      translucent: true
    });
    return await popover.present();
  }






}
