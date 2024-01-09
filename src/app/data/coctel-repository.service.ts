import { Injectable } from '@angular/core';
import { CoctelRemoteDatasourceService, CoctelRemoto } from './coctel-remote-datasource.service';

@Injectable({
  providedIn: 'root'
})
export class CoctelRepositoryService {

  constructor(
    private coctelRemoteDataSource:CoctelRemoteDatasourceService
  ) { }

  async getCategorias():Promise<string[]> {
    const res = await this.coctelRemoteDataSource.getCategorias()
    return res.drinks.map(c => c.strCategory)
  }

  private _buildCoctel(c:CoctelRemoto):Coctel {
    return {
      id: parseInt(c.idDrink),
      nombre: c.strDrink,
      imagen: c.strDrinkThumb
    }
  }

  async getCoctelesPorCategoria(categoria:string):Promise<Coctel[]> {
    const res = await this.coctelRemoteDataSource.getCoctelesPorCategoria(categoria)
    return res.drinks.map(c => this._buildCoctel(c))
  }
}

export interface Coctel {
  id: number 
  nombre: string 
  imagen: string 
}