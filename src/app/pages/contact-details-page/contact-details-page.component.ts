import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Move } from '../../model/move.model';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  contact: Contact;
  movesPerContact: Move[]
  user: User

  constructor(private contactService: ContactService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.contact = this.route.snapshot.data.contact
    this.userService.loggedInUser$.subscribe(loggedUser => {
      this.movesPerContact = loggedUser.moves.filter(move => move.toId === this.contact._id)
      this.user = loggedUser
    })
  }

  onEditContact() {
    this.router.navigate(['edit', this.contact._id])
  }

  onBack() {
    this.router.navigate(['contact'])
  }
}
