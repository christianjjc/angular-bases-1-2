import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age.toString()}`;
  }

  changeHero(): void {
    this.name = 'Super CJJC';
  }

  changeAge(): void {
    this.age = 65;
  }

  resetAll(): void {
    this.name = 'ironMan';
    this.age = 45;
  }
}
