import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Green Lantern",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang).",
      img: "assets/img/green-lantern.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    },
    {
      nombre: "Wonder Woman",
      bio: "El personaje es una princesa guerrera de las Amazonas, está dotada de una amplia gama de poderes superhumanos y habilidades de combate de batalla superiores, gracias a sus dones obtenidos de los dioses y su amplio entrenamiento. Ella posee un gran arsenal de armas, incluyendo entre las principales el Lazo de la Verdad, un par de brazaletes mágicos indestructibles, su tiara, que sirve como arma.",
      img: "assets/img/wonder-woman.png",
      aparicion: "1941-12-01",
      casa: "DC"
    },
    {
      nombre: "Captain America",
      bio: "El Capitán América fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra. Viste un traje que lleva un motivo de la bandera de los Estados Unidos, y utiliza un escudo casi indestructible que lanza como proyectil.",
      img: "assets/img/captain-america.png",
      aparicion: "1941-03-01",
      casa: "Marvel"
    },
    {
      nombre: "Cyclops",
      bio: "Cíclope puede emitir potentes rayos de energía de sus ojos. No puede controlar las descargas sin la ayuda de gafas especiales que debe usar en todo momento. Él es generalmente considerado el primero de los X-Men, un equipo de héroes mutantes que luchan por la paz y la igualdad entre mutantes y humanos, y uno de los principales líderes del equipo.",
      img: "assets/img/cyclops.png",
      aparicion: "1963-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Flash",
      bio: "Apodado el \"Corredor Escarlata\", tiene la capacidad de correr, moverse y pensar extremadamente rápido, también puede atravesar la materia sólida, usar reflejos sobrehumanos y aparentemente violar ciertas leyes de la física, como superar la velocidad de la luz.",
      img: "assets/img/flash.png",
      aparicion: "1940-01-01",
      casa: "DC"
    },
    {
      nombre: "Green Arrow",
      bio: "A veces se muestra vestido como el personaje de Robin Hood, Green Arrow es un arquero que usa sus habilidades para combatir el crimen en sus ciudades natales de Star City y Seattle, así como junto a sus compañeros superhéroes como miembro de la Liga de la Justicia.",
      img: "assets/img/green-arrow.png",
      aparicion: "1941-01-01",
      casa: "DC"
    },
    {
      nombre: "Iron Man",
      bio: "Anthony Edward Stark, más conocido como Tony Stark, un millonario magnate empresarial estadounidense, playboy e ingenioso científico, sufre una grave lesión en el pecho durante un secuestro. Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva crea, en cambio, una armadura poderosa para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseñó a través de su compañía, Industrias Stark.",
      img: "assets/img/iron-man.png",
      aparicion: "1963-03-01",
      casa: "Marvel"
    },
    {
      nombre: "Mr. Fantastic",
      bio: "El personaje es miembro fundador de los Cuatro Fantásticos. Richards posee un dominio de la ingeniería mecánica, aeroespacial y eléctrica, la química, todos los niveles de la física y la biología humana y alienígena.",
      img: "assets/img/mr-fantastic.png",
      aparicion: "1961-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Robin",
      bio: "Joven héroe compañero de Batman. El nombre de Robin, el Chico Maravilla y su atuendo fue inspirado en el héroe legendario Robin Hood, el color rojo del traje imita al de un ave americana (el tordo de pecho rojo o Turdus migratorius, también llamado en inglés Robin o American Robin \"petirrojo\", que no debe confundirse con Robin que habita en Europa), siguiendo el patrón de animal volador de Batman.",
      img: "assets/img/robin.png",
      aparicion: "1940-04-01",
      casa: "DC"
    },
    {
      nombre: "Shazam",
      bio: "\"SHAZAM\" (Acrónimo de seis \"ancianos inmortales\": Salomón, Hércules, Atlas, Zeus, Aquiles y Mercurio), puede transformarse en un adulto disfrazado con los poderes de fuerza sobrehumana, velocidad, vuelo y otras habilidades.",
      img: "assets/img/shazam.png",
      aparicion: "1940-02-01",
      casa: "DC"
    },
    {
      nombre: "Superman",
      bio: "Superman relata que nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral. El joven Kent comenzó a mostrar habilidades superhumanas, las mismas que al llegar a su madurez decidiría usar para el beneficio de la humanidad.",
      img: "assets/img/superman.png",
      aparicion: "1938-06-01",
      casa: "DC"
    },
  ];

  constructor() {
    console.log('Servicio listo para usar!!!');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(idx: string) {
    return this.heroes[idx];
  }

  buscarHeroes(termino: string):Heroe[] {
    let heroesArray: Heroe[] = [];
    termino = termino.toLowerCase();

    for(let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      if(nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArray.push(heroe);
      }
    }
    return heroesArray;
  }

}
