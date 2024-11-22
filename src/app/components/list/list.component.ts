import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterI } from '../../dbz/interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: CharacterI[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 5000,
    },
  ];

  emitDeletedCharacter(id: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
