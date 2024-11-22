import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterI } from '../../dbz/interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<CharacterI> = new EventEmitter();

  public character: CharacterI = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { id: '', name: '', power: 0 };
  }
}
