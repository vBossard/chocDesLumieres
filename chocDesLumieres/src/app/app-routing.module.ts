import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GamePageModule)
  },
  {
    path: 'score',
    loadChildren: () => import('./score/score.module').then( m => m.ScorePageModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then( m => m.CharacterPageModule)
  },
  {
    path: 'infos',
    loadChildren: () => import('./infos/infos.module').then( m => m.InfosPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'pseudo-choice',
    loadChildren: () => import('./pseudo-choice/pseudo-choice.module').then( m => m.PseudoChoicePageModule)
  },
  {
    path: 'dual-choice',
    loadChildren: () => import('./dual-choice/dual-choice.module').then( m => m.DualChoicePageModule)
  },  {
    path: 'resultat',
    loadChildren: () => import('./resultat/resultat.module').then( m => m.ResultatPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
