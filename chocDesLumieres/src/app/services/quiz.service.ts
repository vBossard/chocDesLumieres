import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Chimie1 from '../../assets/data/quiz-data/chimie1.json';
import CultureG1 from '../../assets/data/quiz-data/cultureG1.json';
import Sport1 from '../../assets/data/quiz-data/sport1.json';
import Trump1 from '../../assets/data/quiz-data/trump1.json';
import { Quiz } from '../entities/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizz= [];
  chimie1:{} = Chimie1['quizz'];
  culture1:{} =CultureG1['quizz'];
  sport1:{} =Sport1['quizz'];
  trump1:{}= Trump1['quizz'];

  constructor() { }

  // Créer une méthode pour récupérer les questions en fonction du concurrent
  getQuiz(idConcurrent:number, score:any):any{
  const concurrent = Number(idConcurrent)
  const userLevel = this.getQuizzLevel(score);
    switch(true) { 
    case concurrent === 1: { 
      return this.getEinsteinQuizz(userLevel);
      break; 
    } 
    case concurrent === 2: { 
        
      return this.getFourasQuizz(userLevel);
      break; 
    }
    case concurrent === 3: { 
      
      return this.getTrumpQuizz(userLevel);
      break; 
    } 
    case concurrent === 4: { 
      
      return this.getZidaneQuizz(userLevel);
      break; 
    } 
    default: { 
        //statements; 
        break; 
    } 
    
  } 
  }

  // Retourne le niveau de quizz adapté
  getQuizzLevel(score){
    if(score <= 5){
      return "debutant";
    }else if(score > 5 && score <=15 ){
      return "confirme";
    }else if(score > 15 && score <=30){
      return "expert"
    }
  }

  // Retourne les quizzs d'Einstein'
  getEinsteinQuizz(level){
    this.quizz = this.culture1[level];
    return this.quizz;
  }

  // Retourne les quizzs du père Fouras
  getFourasQuizz(level){
    this.quizz = this.culture1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Trump
  getTrumpQuizz(level){
    this.quizz = this.trump1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Zidane
  getZidaneQuizz(level){
    this.quizz = this.sport1[level];
    return this.quizz;
  }
  
}
