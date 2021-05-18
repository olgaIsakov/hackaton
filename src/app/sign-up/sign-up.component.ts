import { Component, OnInit } from '@angular/core';
import {ToggleButtonModule} from 'primeng/togglebutton';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  checked: boolean = false;

  constructor() { }

  handleChange(event: any) {
    this.checked = !this.checked;
}

  ngOnInit(): void {
  }

}
