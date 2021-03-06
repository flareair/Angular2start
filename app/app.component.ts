import { Component } from '@angular/core';

import { Hero } from './hero';


const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    template: `
        <h1 class="text-primary">{{title}}</h1>

        <h2>My Heroes</h2>
        <ul class="heroes nav nav-pills nav-stacked">
            <li
                *ngFor="let hero of heroes"
                (click)="onSelect(hero)"
                [class.active]="hero===selectedHero"
            >
                <a href="#">{{hero.name}}</a>
            </li>
        </ul>

        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}

