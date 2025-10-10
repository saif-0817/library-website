import { Component } from '@angular/core';
import { BannerReusable } from "../../../../shared/components/banner-reusable/banner-reusable";

@Component({
  selector: 'app-banner',
  imports: [BannerReusable],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {

}
