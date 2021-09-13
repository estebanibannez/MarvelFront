import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  public offset = '0';
  public limit = '100';
  p: number = 1;
  allComics!: Observable<any>;
  constructor(private _comicService: ComicsService) { }

  ngOnInit(): void {
    this.getComics()
  }

  getComics(){
    this.allComics = this._comicService.getAllComics(this.offset, this.limit);
  }
}
