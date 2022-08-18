import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output()
  aoTranferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  public transferir() {
    console.log('transferencia solicitada');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTranferir.emit(valorEmitir);
    this.limparCampos();
  }

  public limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
