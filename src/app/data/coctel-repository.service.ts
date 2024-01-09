import { Injectable } from '@angular/core';
import { CoctelRemoteDatasourceService } from './coctel-remote-datasource.service';

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
}
