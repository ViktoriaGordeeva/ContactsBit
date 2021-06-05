import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {
  contact: Contact;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.contact = data.contact || { name: '', email: '', phone: '' }
    })
  }
  

  onAddContact() {
    this.contactService.saveContact({ ...this.contact })
    this.contact = { name: '', email: '', phone: '' }
    this.router.navigate(['contact'])

  }

  onRemoveContact() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['contact'])
  }

   
  onBack(){
    this.router.navigate(['contact', this.contact._id])
  }
}
