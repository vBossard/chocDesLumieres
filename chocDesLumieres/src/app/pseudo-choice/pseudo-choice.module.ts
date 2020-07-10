import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PseudoChoicePageRoutingModule } from './pseudo-choice-routing.module';

import { PseudoChoicePage } from './pseudo-choice.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PseudoChoicePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PseudoChoicePage]
})
export class PseudoChoicePageModule {}
