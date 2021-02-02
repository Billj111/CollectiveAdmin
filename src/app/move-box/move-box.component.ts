import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-box',
  templateUrl: './move-box.component.html',
  styleUrls: ['./move-box.component.css']
})
export class MoveBoxComponent implements OnInit {

  nameEntry = "me";

  colorList: string[] = [ "RED", "GREEN", "BLUE"]

  // dropdown ==> https://www.positronx.io/angular-7-select-dropdown-examples-with-reactive-forms/

  constructor() { }

  ngOnInit(): void {
  }

}
