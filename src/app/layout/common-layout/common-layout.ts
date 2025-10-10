import { Component } from '@angular/core';
import { Header } from "../components/header/header";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../components/footer/footer";


@Component({
  selector: 'app-common-layout',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './common-layout.html',
  styleUrl: './common-layout.scss'
})
export class CommonLayout {

}
