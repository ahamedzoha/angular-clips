import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register = (id: string) => {
    this.modals.push({ id, visible: false });
    // console.log(this.modals);
  };

  unregister = (id: string) => {
    this.modals = this.modals.filter((m) => m.id !== id);
  };

  public isModalVisible = (id: string): boolean => {
    const modal = this.modals.find((m) => m.id === id);
    return modal ? modal.visible : false;
  };

  public toggleModal = (id: string): void => {
    const modal = this.modals.find((m) => m.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  };
}
