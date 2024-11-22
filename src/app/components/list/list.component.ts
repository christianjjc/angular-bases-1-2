import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterI } from '../../dbz/interfaces/characters.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: CharacterI[] = [
    {
      name: 'Trunks',
      power: 5000,
    },
  ];

  emitDeletedCharacter(index: number): void {
    if (index < 0) return;
    console.log(index);
    this.onDeleteId.emit(index);
  }
}
