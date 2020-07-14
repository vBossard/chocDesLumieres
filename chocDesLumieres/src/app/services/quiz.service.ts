import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Chimie1 from '../../assets/data/quiz-data/chimie1.json';
import CultureG1 from '../../assets/data/quiz-data/cultureG1.json';
import Sport1 from '../../assets/data/quiz-data/sport1.json';
import Cine1 from'../../assets/data/quiz-data/cine1.json';
import Auto1 from'../../assets/data/quiz-data/auto1.json';
import Microsoft1 from'../../assets/data/quiz-data/microsoft1.json';
import Web1 from'../../assets/data/quiz-data/web1.json';
import Instru1 from'../../assets/data/quiz-data/instru1.json';
import Corps1 from'../../assets/data/quiz-data/corps1.json';
import Jo1 from'../../assets/data/quiz-data/jo1.json';
import Incollable1 from'../../assets/data/quiz-data/incollable1.json';
import Geo1 from'../../assets/data/quiz-data/geo1.json';
import { Quiz } from '../entities/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizz= [];
  chimie1:{} = Chimie1['quizz'];
  sport1:{} = Sport1['quizz'];
  culture1:{} = CultureG1['quizz'];
  cine1:{} = Cine1['quizz'];
  auto1:{} = Auto1['quizz'];
  microsoft1:{} = Microsoft1['quizz'];
  web1:{} = Web1['quizz'];
  instru1:{} = Instru1['quizz'];
  corps1:{} = Corps1['quizz'];
  jo1:{} = Jo1['quizz'];
  incollable1:{} = Incollable1['quizz'];
  geo1:{} = Geo1['quizz'];
  


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
        
      return this.getJordanQuizz(userLevel);
      break; 
    }
    case concurrent === 3: { 
      
      return this.getHepburnQuizz(userLevel);
      break; 
    } 
    case concurrent === 4: { 
      
      return this.getFangioQuizz(userLevel);
      break; 
    }
    case concurrent === 5: { 
      
      return this.getBeyonceQuizz(userLevel);
      break; 
    }
    case concurrent === 6: { 
      return this.getGatesQuizz(userLevel);
      break; 
    }
    case concurrent === 7: { 
      return this.getBernersLeeQuizz(userLevel);
      break; 
    }
    case concurrent === 8: { 
      return this.getPetersonQuizz(userLevel);
      break; 
    }
    case concurrent === 9: { 
      return this.getMontalciniQuizz(userLevel);
      break; 
    }
    case concurrent === 10: { 
      return this.getCooperQuizz(userLevel);
      break; 
    }
    case concurrent === 11: { 
      return this.getKahloQuizz(userLevel);
      break; 
    }
    case concurrent === 12: { 
      return this.getTabarlyQuizz(userLevel);
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
    this.quizz = this.chimie1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Zidane
  getJordanQuizz(level){
    this.quizz = this.sport1[level];
    return this.quizz;
  }

  // Retourne les quizzs d'Audrey Hepburn
  getHepburnQuizz(level){
    this.quizz = this.cine1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Fangio
  getFangioQuizz(level){
    this.quizz = this.auto1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Beyonce
  getBeyonceQuizz(level){
    this.quizz = this.culture1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Bill Gates
  getGatesQuizz(level){
    this.quizz = this.microsoft1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Tim Berners-Lee
  getBernersLeeQuizz(level){
    this.quizz = this.web1[level];
    return this.quizz;
  }

  // Retourne les quizzs d'Oscar Peterson
  getPetersonQuizz(level){
    this.quizz = this.instru1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Rita Levi-Montalcini
  getMontalciniQuizz(level){
    this.quizz = this.corps1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Charlotte Cooper
  getCooperQuizz(level){
    this.quizz = this.corps1[level];
    return this.quizz;
  }

  // Retourne les quizzs de Frida Kahlo
  getKahloQuizz(level){
    this.quizz = this.incollable1[level];
    return this.quizz;
  }

  // Retourne les quizzs d'Erice Tabarly
  getTabarlyQuizz(level){
    this.quizz = this.geo1[level];
    return this.quizz;
  }

  


  
  
}
