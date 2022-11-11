import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeserviceService {
  constructor(private http: HttpClient) {}
  public getPokemonesByName(name: string) {
    return this.http.get(environment.pokeUrl + `pokemon/${name}`);
  }
}
