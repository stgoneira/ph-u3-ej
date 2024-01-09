import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Coctel, CoctelRepositoryService } from 'src/app/data/coctel-repository.service';
import { heartOutline } from 'ionicons/icons'
import { addIcons } from 'ionicons';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.page.html',
  styleUrls: ['./cocteles.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CoctelesPage implements OnInit {

  categoria:string = ""
  cocteles:Coctel[] = []
  coctelSeleccionado:Coctel|undefined = undefined
  modalCategoriasFavoritosAbierto:boolean = false 
  categoriasFavoritos:string[] = [
    "Para amigos",
    "Situaciones románticas",
    "De fiesta",
    "Para el invierno",
    "Refresco de verano"
  ]  
  toastMensaje: string = ""

  constructor(
    private route: ActivatedRoute,
    private coctelRepository: CoctelRepositoryService,
    private toastController: ToastController
  ) { 
    addIcons({
      heartOutline
    })
  }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.categoria  = params['categoria']
      this.cocteles   = await this.coctelRepository.getCoctelesPorCategoria(this.categoria)
    })
  }

  abrirModalCategoriasFavoritos(coctel:Coctel) {
    this.modalCategoriasFavoritosAbierto = true 
    this.coctelSeleccionado = coctel
  }
  async guardarCoctelEnCategoria(categoriaFavorito:string) {    
    this.toastMensaje = `Guardando ${this.coctelSeleccionado?.nombre} en ${categoriaFavorito}`
    await this.mostrarToast()
    this.cerrarModalCategoriasFavoritos()
  }
  cerrarModalCategoriasFavoritos() {
    this.modalCategoriasFavoritosAbierto = false 
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: this.toastMensaje,
      duration: 3000,
      position: "top"
    })
    await toast.present()
  }
}
