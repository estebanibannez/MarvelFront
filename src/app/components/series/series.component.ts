import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public customOptions: OwlOptions;
  public listaSeries$: Observable<any[]>;

  constructor(private _serviceSeries : SeriesService) {
    this.carrouselInstance();
    this.listaSeries$ = this._serviceSeries.getListSeries('50','100');
   
  }

  ngOnInit(): void {
  }

  carrouselInstance() {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      margin: 4,
      autoHeight: true,
      autoWidth:true,
      navSpeed: 400,
      lazyLoad: false,
      navText: ["<i class='fa fa-chevron-left' aria-hidden='true'></i>", "<i class='fa fa-chevron-right' aria-hidden='true'></i>"],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      // nav: true
    }
  }

  
}
