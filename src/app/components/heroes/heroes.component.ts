import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private router: Router,
    private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
