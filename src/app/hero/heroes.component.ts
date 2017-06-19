import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HeroService} from './services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    providers: []
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heros: Hero[];
    constructor(private heroService: HeroService) {}
    getHeros(): void {
      this.heroService.getHeros().then(heros => this.heros = heros);
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    ngOnInit(): void {
      this.getHeros();
    }
}
