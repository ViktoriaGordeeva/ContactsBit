import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/model/contact.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts: Contact[] = [];
  subscription: Subscription
  selectedContactId: string = null


  ngOnInit(): void {
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
    })
    this.contactService.loadContacts()
  }
  
  onFilter(filterBy) {
    this.contactService.loadContacts(filterBy)
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
