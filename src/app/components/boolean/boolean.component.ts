import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.css']
})
export class BooleanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  // Skapar booleanValue och sätter värdet till true
  booleanValue: boolean = true;

  // Ändrar booleanValue från true till false
  booleanChange(): void {
    this.booleanValue = false;
  }
}