import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../servicies/services.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ServicesService]
})

export class ListadoComponent implements OnInit {
  public Buscar: string;
  public Nombre: String;
  public Result: any;
  public Lista: [];
  public JSONfavorito = '{"Favoritos": [';
  public Url: any;

  constructor(
    private Service: ServicesService,
    private spinner: NgxSpinnerService

  ) {
  }
  P: number = 1;
  ngOnInit() {
    this.Nombre = localStorage.getItem("NombreUsr");
  }

  consultarAPI() {
    this.spinner.show();
    this.Service.getData(this.Buscar).subscribe(data => {
      this.Result = data['items'];
      this.spinner.hide();
    });
  }

  agregarFavorito(NombreRepo: string, Descripcion: string, Estrella: string) {
    if (this.JSONfavorito == '{"Favoritos": [') {
      this.JSONfavorito = this.JSONfavorito + '{"Nombre":"' + NombreRepo + '", "Desc":"' + Descripcion + '", "Estrellas":"' + Estrella + '"}';
    } else {
      this.JSONfavorito = this.JSONfavorito + ',{"Nombre":"' + NombreRepo + '", "Desc":"' + Descripcion + '", "Estrellas":"' + Estrella + '"}';
    }
    this.construirJson();
  }

  construirJson() {
    localStorage.setItem('Favoritos', this.JSONfavorito + ']}');
    console.log(JSON.parse(localStorage.getItem('Favoritos')));
  }

  Ruta(Url: String) {
    this.Url = Url;
    console.log(this.Url);
    window.open("Url");
  }
}
