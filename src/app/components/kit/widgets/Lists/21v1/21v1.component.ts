import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'kit-list-21v1',
  templateUrl: './21v1.component.html',
})
export class CuiList21v1Component implements OnInit {

  value?: string;
  value1?: string;

  constructor() {}
  ngOnInit() {}

  isVisible = false;  

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  
}
