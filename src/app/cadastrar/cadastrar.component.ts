import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User

  constructor() { }

  //ngOnInit quando minha página iniciar faça tal coisa
  ngOnInit(): void {
    window.scroll(0,0)
  }

}
