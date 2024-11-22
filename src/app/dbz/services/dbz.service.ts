// cSpell:disable

import { Injectable } from '@angular/core';
import { CharacterI } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DBzService {
  constructor() {}

  public characters: CharacterI[] = [
    { id: uuid(), name: 'Krillin', power: 206 },
    {
      id: uuid(),
      name: 'Goku',
      power: 150000000 /* arco de Freezer (Super Saiyan). */,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 140000000 /* Similar a Goku arco de Freezer. */,
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 1000000 /* Fusionado con Nail en Namek. */,
    },
    {
      id: uuid(),
      name: 'Frieza',
      power: 120000000 /* En su forma final completa. */,
    },
    { id: uuid(), name: 'Cell', power: 900000000 /* Forma perfecta. */ },
    {
      id: uuid(),
      name: 'Gohan',
      power: 1100000000 /* Gohan Super Saiyan 2 contra Cell.*/,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 170000000 /*  Super Saiyan del futuro. */,
    },
    { id: uuid(), name: 'Majin Buu', power: 1000000000 /*  Forma original. */ },
    {
      id: uuid(),
      name: 'Tien Shinhan',
      power: 1830 /*  Durante la saga Saiyan. */,
    },
    { id: uuid(), name: 'Yamcha', power: 1480 /*  Durante la saga Saiyan. */ },
    {
      id: uuid(),
      name: 'Android 18',
      power: 320000000 /* Nivel en la saga de Cell. */,
    },
    {
      id: uuid(),
      name: 'Android 17',
      power: 330000000 /*  Nivel en la saga de Cell. */,
    },
    {
      id: uuid(),
      name: 'Master Roshi',
      power: 139 /*  Torneo de las Artes Marciales.*/,
    },
    {
      id: uuid(),
      name: 'Raditz',
      power: 1500 /* Primer oponente en la saga Saiyan. */,
    },
    { id: uuid(), name: 'Nappa', power: 4000 /* Durante la saga Saiyan. */ },
  ];

  addCharacter(character: CharacterI): void {
    const newCharacter: CharacterI = {
      ...character,
      id: uuid(),
    };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   // console.log('main', index);
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((ch) => ch.id !== id);
  }
}
