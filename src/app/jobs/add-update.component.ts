import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {

pageTitle = 'Add or Update';

// need to get selected Job ID if it was selected ELSE do ADD

  constructor() { }

  ngOnInit() {
  }

}
