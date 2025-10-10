import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { Story } from "./components/story/story";
import { Facilities } from "./components/facilities/facilities";
import { Teams } from "./components/teams/teams";
import { Resources } from "./components/resources/resources";
import { About as AboutUs } from './components/about/about';

@Component({
  selector: 'app-about-page',
  imports: [Banner, Story, Facilities, Teams, Resources, AboutUs],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
