import { Component, Inject, Injectable, Input } from '@angular/core';
import { CharacterI } from '../interfaces/characters.interface';
import { DBzService } from '../services/dbz.service';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private readonly dbzService: DBzService) {}

  get characters(): CharacterI[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: CharacterI) {
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  // fn() {
  //   return this.bdzService.characters;
  // }
}
