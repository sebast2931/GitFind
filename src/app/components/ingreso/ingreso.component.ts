import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

export class IngresoComponent implements OnInit {
  public Nombre: string;

  constructor(
    private router: Router
  ) { }

  ingresoUsuario() {
    localStorage.setItem('NombreUsr', this.Nombre);
    this.router.navigate(['Listado']);
  }

  ngOnInit() {
    // localStorage.clear();
  }
}
