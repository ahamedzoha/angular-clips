import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  isVisible: boolean = false;

  constructor() {
    this.isVisible = true;
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
  }
}
