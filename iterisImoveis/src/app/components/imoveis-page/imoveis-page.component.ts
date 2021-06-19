import { Component, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model.';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';

@Component({
  selector: 'app-imoveis-page',
  templateUrl: './imoveis-page.component.html',
  styleUrls: ['./imoveis-page.component.css']
})
export class ImoveisPageComponent implements OnInit {

  listaDeImoveis: ImoveisApiModel[] = [];
​
  constructor(public imoveisApi: ImoveisApiService) { }
​
  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDeImoveis = retornoDaApi;
      }
    });

  }
}
