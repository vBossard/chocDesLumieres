import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  quiz:Quiz;
  listQuestions:Array<any> = [];
  listReponse =[];
  questionNumber:number;
  bonneReponse;
  question = {};
  ansmwerSubmitted:boolean = false;
  showAnswerColor = false;
  disableAnswer = false;
  constructor(private route:ActivatedRoute, private quizService:QuizService, private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(idCharacter => {
      console.log(idCharacter.params)
      this.quiz = this.quizService.getQuiz(Number(idCharacter.params))
      this.listQuestions = this.quiz.quizz['debutant'];
      this.questionNumber =  0;
      this.getCurrentQuestion();
    })
  }
  /**
   * Choisir la question 
   */
  getCurrentQuestion(){
    console.log(this.listQuestions)
    let questionToDisplay = this.listQuestions[this.questionNumber];
    console.log(questionToDisplay);
    this.bonneReponse = questionToDisplay.reponse;
    // Prendre la bonne réponse
    questionToDisplay.propositions.forEach(reponse => {
      if(reponse !== this.bonneReponse){
        this.listReponse.push({text: reponse, color :"danger"})
      }else{
        this.listReponse.push({text: reponse, color :"success"})
      }       
    });
    console.log(this.listReponse)
    this.question = questionToDisplay;
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

  submitAnswer(reponseUser){
    this.ansmwerSubmitted = true;
    this.showAnswerColor = true;
    this.disableAnswer = true;
    /*
    if(reponseUser === this.bonneReponse){
      this.user.score += 1;
    }else{
      this.user.score -= 1;
    }
    */
  }

  nextQuestion(){
    this.listReponse = [];
    this.ansmwerSubmitted = false;
    this.showAnswerColor = false;
    this.disableAnswer = false;
    this.questionNumber++;

    
    if(this.listQuestions.length -1 === this.questionNumber){
      this.router.navigate(['score']);
    }else{
      this.questionNumber++;
      this.getCurrentQuestion();
    }
    
  }






}
