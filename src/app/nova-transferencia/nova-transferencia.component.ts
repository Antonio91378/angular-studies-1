import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;
  public transferir() {
    console.log('transferencia solicitada');
    console.log(this.valor);
    console.log(this.destino);
  }
}
