// cSpell:disable

import { Injectable } from '@angular/core';
import { CharacterI } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root',
})
export class DBzService {
  constructor() {}

  public characters: CharacterI[] = [
    { name: 'Krillin', power: 206 },
    { name: 'Goku', power: 150000000 /* arco de Freezer (Super Saiyan). */ },
    { name: 'Vegeta', power: 140000000 /* Similar a Goku arco de Freezer. */ },
    { name: 'Piccolo', power: 1000000 /* Fusionado con Nail en Namek. */ },
    { name: 'Frieza', power: 120000000 /* En su forma final completa. */ },
    { name: 'Cell', power: 900000000 /* Forma perfecta. */ },
    { name: 'Gohan', power: 1100000000 /* Gohan Super Saiyan 2 contra Cell.*/ },
    { name: 'Trunks', power: 170000000 /*  Super Saiyan del futuro. */ },
    { name: 'Majin Buu', power: 1000000000 /*  Forma original. */ },
    { name: 'Tien Shinhan', power: 1830 /*  Durante la saga Saiyan. */ },
    { name: 'Yamcha', power: 1480 /*  Durante la saga Saiyan. */ },
    { name: 'Android 18', power: 320000000 /* Nivel en la saga de Cell. */ },
    { name: 'Android 17', power: 330000000 /*  Nivel en la saga de Cell. */ },
    { name: 'Master Roshi', power: 139 /*  Torneo de las Artes Marciales.*/ },
    { name: 'Raditz', power: 1500 /* Primer oponente en la saga Saiyan. */ },
    { name: 'Nappa', power: 4000 /* Durante la saga Saiyan. */ },
  ];

  onNewCharacter(character: CharacterI): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    // console.log('main', index);
    this.characters.splice(index, 1);
  }
}
