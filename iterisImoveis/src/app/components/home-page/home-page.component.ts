import { Component, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model.';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  listaImagens: Array<string> = []

  imagemAtual: string = ''

  constructor(public imoveisApi: ImoveisApiService) { }

  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.imagemAtual = retornoDaApi[0].image
        this.listaImagens = retornoDaApi.map((item: ImoveisApiModel) => {
          return item.image
        })
      }
    })
  }

  prev(): void {
    const index = this.listaImagens.indexOf(this.imagemAtual)
    if(index == 0) return
    this.imagemAtual = this.listaImagens[index -1]

  }

  next(): void {
    const index = this.listaImagens.indexOf(this.imagemAtual)

    if(index == this.listaImagens.length - 1) return
    this.imagemAtual = this.listaImagens[index - 1]
  }

}
