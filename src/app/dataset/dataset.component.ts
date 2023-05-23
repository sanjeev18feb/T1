import { Component } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent {
  
  btndisabled: boolean=true;
  name:string="";
  text:string="No Name is added";

  constructor() {
    setTimeout(()=>{
       this.btndisabled=false;
    })
  }

  addname() {
    this.text = " Your Name is "+this.name;
  }
}
