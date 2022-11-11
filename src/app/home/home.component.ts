import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../@core/services/pokeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public pokemon = {
    nombre: '',
    tipo: '',
    numero: 0,
  };
  constructor(private pokeService: PokeserviceService) {}

  ngOnInit(): void {
    this.pokeService
      .getPokemonesByName('pikachu')
      .subscribe(async (res: any) => {
        console.log(res);
        this.pokemon.nombre = await res.name;
        // this.pokemon.tipo = await res.name;
        // this.pokemon.numero = await res.name;
      });
  }
}
