import { Component } from '@angular/core';
import { CharacterI } from '../../dbz/interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: CharacterI = {
    name: '',
    power: 0,
  };
}
