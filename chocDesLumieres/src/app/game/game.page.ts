import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { StorageService } from '../services/storage.service';
import { User } from '../entities/user';
import { UserStockageService } from '../services/user-stockage.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  
  // user:User = {pseudo: "",scoreTotal:0, concurrent:0, einsteinScore:0, fourasScore:0,trumpScore:0,zidaneScore:0}
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

  // Score selon le concurrent
  currentDualScore;
  scoreToUpdate:string;

  constructor(private route:ActivatedRoute, 
    private quizService:QuizService,
    private router:Router,
    private storageService:StorageService,
    private userService:UserStockageService) { 
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
    this.question = questionToDisplay
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
    console.log("Taille de la liste des questions")
    console.log(this.listQuestions.length)
    console.log("Numéro de la question")
    console.log(this.questionNumber)
    if(this.questionNumber === this.listQuestions.length){
      this.endQuizz();
    }else{
      this.getCurrentQuestion();
    }
    
  }

  getCurrentConcurrent(concurrent){
    // console.log(concurrent)
    const currentConc = Number(concurrent)
    switch(true) { 
      case currentConc  === 1: { 
        this.currentDualScore = this.user.einsteinScore;
        this.scoreToUpdate = "einsteinScore";
        return this.user.einsteinScore;
        break; 
      } 
      case currentConc  === 2: { 
        this.currentDualScore = this.user.fourasScore;
        this.scoreToUpdate = "fourasScore";
        return this.user.fourasScore;
        break; 
      }
      case currentConc  === 3: { 
        this.currentDualScore = this.user.trumpScore;
        this.scoreToUpdate = "trumpScore";
        return this.user.trumpScore;
        break; 
      } 
      case currentConc  === 4: { 
        this.currentDualScore = this.user.zidaneScore;
        this.scoreToUpdate = "zidaneScore";
        return this.user.zidaneScore; 
        break; 
      } 
      default: { 
          //statements; 
          break; 
      } 
    }
  }

  endQuizz(){
    this.storageService.setObject(this.user['pseudo'], this.user);
    this.userService.updateCurrentUser(this.user);
    this.router.navigate(['score']);
  }






}
