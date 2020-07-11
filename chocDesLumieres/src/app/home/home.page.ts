import { Component, OnInit } from '@angular/core';

import HomeContent from '../../assets/text-content/content.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  brainPic = "brain-pic1.png";
  content:{} = HomeContent["home-page"];

  constructor() {
    console.log(this.content)
   }

  ngOnInit() {
  }

}
