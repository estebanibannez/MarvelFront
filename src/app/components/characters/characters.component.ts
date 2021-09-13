import { Component, OnInit } from '@angular/core';
import { CharactersService} from '../../services/characters.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  allCharacters!: Observable<any>;

  constructor(private _characterService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this._characterService.getAllCharacters();
  }

}
