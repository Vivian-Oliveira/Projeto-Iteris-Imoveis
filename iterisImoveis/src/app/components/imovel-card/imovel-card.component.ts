import { Component, Input, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model.';

@Component({
  selector: 'app-imovel-card',
  templateUrl: './imovel-card.component.html',
  styleUrls: ['./imovel-card.component.css']
})
export class ImovelCardComponent implements OnInit {

  @Input() imovel: ImoveisApiModel | undefined; // assim eu posso deixar de inicializar e aceitar um valor indefinido

  constructor() { }

  ngOnInit(): void {
  }

}
