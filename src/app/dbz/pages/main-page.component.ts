import { Component, Inject, Injectable, Input } from '@angular/core';
import { CharacterI } from '../interfaces/characters.interface';
import { DBzService } from '../services/dbz.service';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(public bdzService: DBzService) {}

  // fn() {
  //   return this.bdzService.characters;
  // }
}
