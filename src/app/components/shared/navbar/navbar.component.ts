import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private heroesService: HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string) {
    if(termino.length < 1) {
      return;
    }
    let heroesArray = this.heroesService.buscarHeroes(termino);
    console.log(heroesArray);
    this.router.navigate(['/buscador', termino]);
  }
}
