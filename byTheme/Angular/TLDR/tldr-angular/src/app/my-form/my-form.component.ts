import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto-service.service'

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  top100cryptos;

  constructor(public cryptoService: CryptoService) { }

  ngOnInit() {
    return this.cryptoService.getCryptos().subscribe((data) => {
      this.top100cryptos = data;
    })
  }
}