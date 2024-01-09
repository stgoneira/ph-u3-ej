import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoctelRepositoryService } from 'src/app/data/coctel-repository.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [RouterModule, IonicModule, CommonModule, FormsModule]
})
export class CategoriasPage implements OnInit {

  categorias: string[] = []

  constructor(
    private coctelRepository:CoctelRepositoryService
  ) { }

  async ngOnInit() {
    this.categorias = await this.coctelRepository.getCategorias()
  }

}
