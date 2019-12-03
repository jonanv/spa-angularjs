import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(parametros => {
      this.termino = parametros['termino'];
      // console.log(this.termino);
      this.heroes = this.heroesService.buscarHeroes(this.termino);
    });
  }

}
