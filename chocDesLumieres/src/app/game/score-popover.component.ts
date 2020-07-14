import { Component, OnInit } from "@angular/core";
import { PopoverController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector:'score-popover',
    templateUrl:'./score-popover.component.html',
    styleUrls:['./score-popover.component.scss'],
})
export class ScorePopover implements OnInit{
    totalScore:string;
    quizzScore:string;
    constructor(private popover:PopoverController, private navParams:NavParams,private router:Router){
    }

    ngOnInit(){
        this.totalScore = this.navParams.data.totalScore;
        this.quizzScore = this.navParams.data.currentScore;
        
    }

    closePopover(){
        this.popover.dismiss();
    }

    playAgain(){
        this.router.navigate(['dual-choice']);
        this.popover.dismiss();
    }

    goToMenu(){
        this.router.navigate(['home']);
        this.popover.dismiss();
    }


}