import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CharacterI } from '../../dbz/interfaces/characters.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: CharacterI[] = [
    {
      name: 'Trunks',
      power: 5000,
    },
  ];
}
