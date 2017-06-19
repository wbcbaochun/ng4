import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './models/hero';
import { HeroService} from './services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    providers: []
})
export class HeroesComponent implements OnInit {
    heros: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {}

    getHeroes(): void {
      this.heroService.getHeroes().then(heros => this.heros = heros);
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
    ngOnInit(): void {
      this.getHeroes();
    }
}
