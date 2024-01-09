import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.page.html',
  styleUrls: ['./cocteles.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CoctelesPage implements OnInit {

  categoria:string = ""

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe(params => {
      this.categoria = params['categoria']
    })
  }

  ngOnInit() {}

}
