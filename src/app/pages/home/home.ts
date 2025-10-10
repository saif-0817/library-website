import { Component } from '@angular/core';
import { Banner } from "./components/banner/banner";
import { Genres } from "./components/genres/genres";
import { CtaReusable } from "../../shared/components/cta-reusable/cta-reusable";
import { TrendingBooks } from "./components/trending-books/trending-books";
import { EditorsChoice } from "./components/editors-choice/editors-choice";
import { PopularClassics } from "./components/popular-classics/popular-classics";
import { About } from './components/about/about';
import { ServiceReusable } from "../../shared/components/service-reusable/service-reusable";


@Component({
  selector: 'app-home',
  imports: [Banner, Genres, CtaReusable, TrendingBooks, EditorsChoice, PopularClassics, About, ServiceReusable],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
