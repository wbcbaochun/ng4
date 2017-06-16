import { Injectable } from '@angular/core';

import { Hero } from 'app/hero';
import { HEROES} from 'app/mock-heroes';

@Injectable()
export class HeroService {
    constructor() { }
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
