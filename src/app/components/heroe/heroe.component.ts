import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.heroe = this.heroesService.getHeroe(params['id']);
        console.log(this.heroe);
      });
  }

}
