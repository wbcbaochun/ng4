import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from 'app/hero';
import { HeroService} from 'app/services/hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [HeroService]
})
export class AppComponent {
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
