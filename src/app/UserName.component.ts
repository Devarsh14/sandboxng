import { Component, Input } from '@angular/core';

@Component({
  selector: 'UserName',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class UserNameComponent  {
  @Input() name: string;
}
