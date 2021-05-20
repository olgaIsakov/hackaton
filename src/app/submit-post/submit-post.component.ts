import { Component, OnInit } from '@angular/core';
import {InputSwitchModule} from 'primeng/inputswitch';

@Component({
  selector: 'app-submit-post',
  templateUrl: 'submit-post.component.html',
  styleUrls: ['submit-post.component.css']
})
export class SubmitPostComponent implements OnInit {
  text="";
  isChecked =true;
  constructor() {

   }

   submit(){
    this.text="this works!!";
  }

  ngOnInit(): void {
  }

  handleChange(e:any) {
    let isChecked = e.checked;
}
}
