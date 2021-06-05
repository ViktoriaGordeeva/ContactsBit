import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../model/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }

  @Input() moves: Move[] 
  @Input() isLastOnly: boolean;

  ngOnInit(): void {
  }

}
