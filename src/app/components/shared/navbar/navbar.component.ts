import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    let heroesArray = this.heroesService.buscarHeroes(termino);
    console.log(heroesArray);
  }
}
