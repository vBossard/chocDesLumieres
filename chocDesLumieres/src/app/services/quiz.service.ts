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
  quiz:Quiz;
  chimie1:{} = Chimie1;
  culture1:{} =CultureG1;
  sport1:{} =Sport1;
  trump1:{}= Trump1;

  constructor() { }



  // Créer une méthode pour récupérer les questions en fonction du concurrent
  getQuiz(idConcurrent:number):any{
  console.log(idConcurrent)
  switch(true) { 
   case idConcurrent === 1: { 
      return this.chimie1;
      break; 
   } 
   case idConcurrent === 2: { 
      return this.culture1;
      break; 
   }
   case idConcurrent === 3: { 
    return this.trump1;
    break; 
  } 
  case idConcurrent === 4: { 
    return this.sport1; 
    break; 
  } 
   default: { 
      //statements; 
      break; 
   } 
} 
  }
  
}
