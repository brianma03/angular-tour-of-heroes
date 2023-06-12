import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // This is how the component is accessed in the css file
  templateUrl: './heroes.component.html', // Location of where the html file is
  styleUrls: ['./heroes.component.css'] // Location of where the css file is
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
