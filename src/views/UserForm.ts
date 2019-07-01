import { View } from '../views/View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.name': this.onNameClick,
      'click:.age': this.onSetAgeClick,
      'click:.save': this.onSaveClick
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
    <div>
    <input placeholder="${this.model.get('name')}"/>
    <button class="name">Update Name</button>
    <button class="age">Set Random Age</button>
    <button class="save">Save</button>
    </div>
    `;
  }
}
