import { Component, OnInit } from "@angular/core";
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
    selector:'anecdote-popover',
    templateUrl:'./anecdote-popover.component.html',
    styleUrls:['./anecdote-popover.component.scss'],
})
export class AnecdotePopover implements OnInit{
    anecdote:string;
    constructor(private popover:PopoverController, private navParams:NavParams){
    }

    ngOnInit(){
        this.anecdote = this.navParams.data.anecdote;
        
    }

    closePopover(){
        this.popover.dismiss();
    }


}