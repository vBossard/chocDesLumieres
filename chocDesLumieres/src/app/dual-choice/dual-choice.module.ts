import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DualChoicePageRoutingModule } from './dual-choice-routing.module';

import { DualChoicePage } from './dual-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DualChoicePageRoutingModule
  ],
  declarations: [DualChoicePage]
})
export class DualChoicePageModule {}
