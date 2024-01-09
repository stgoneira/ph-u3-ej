import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoctelRemoteDatasourceService {

  private _baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

  constructor() { }

  async getCategorias():Promise<ResultadoCategoriasRemotas> {
    const path = 'list.php?c=list'
    const url  = `${this._baseUrl}${path}` 
    try {
      const res   = await fetch(url)
      const data  = await res.json() 
      return data  
    } catch(error) {
      console.error(error)
      throw error 
    }
  }
}

export interface ResultadoCategoriasRemotas {  
  drinks: CategoriaRemota[]
}

export interface CategoriaRemota {
  strCategory: string 
}