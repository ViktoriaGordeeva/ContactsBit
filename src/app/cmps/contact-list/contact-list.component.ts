import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[] = []
  @Output() onSelectContact = new EventEmitter<string>()

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onAddContact(){
    this.router.navigate(['edit', {name:'', email:'', phone:''}])
  }
}
