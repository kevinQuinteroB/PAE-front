import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-main-operador',
  standalone: false,
  templateUrl: './main-operador.component.html',
  styleUrl: './main-operador.component.css'
})
export class MainOperadorComponent {

  ngAfterViewInit() {
    const deslizador = document.getElementById("deslizador");
    const menuButton = document.getElementById("menuButton");
    const closeButton = document.getElementById("closeButton");

    if (!menuButton || !closeButton || !deslizador) {
      console.error("No se encontraron los elementos del menú.");
      return;
    }

    menuButton.addEventListener("click", () => {
      deslizador.style.transform = "translateX(0)";
    });

    closeButton.addEventListener("click", () => {
      deslizador.style.transform = "translateX(-250px)";
    });
  }
  
}
