import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-page',
  templateUrl: './sobre-page.component.html',
  styleUrls: ['./sobre-page.component.css']
})
export class SobrePageComponent implements OnInit {

  public logoUrl = 'https://www.iteris.com.br/Iteris.Site.Cms.Theme/img/logo.svg';
  public titulo = 'Sobre a Iteris';
  public descricao = 'Somos uma empresa de tecnologia. Mas, antes disso, somos uma empresa de gente. De gente que faz acontecer!';

  constructor() { }

  ngOnInit(): void {
  }

}
