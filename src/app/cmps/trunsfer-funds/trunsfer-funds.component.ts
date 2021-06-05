import { Component, OnInit , Input} from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Contact } from '../../model/contact.model';

@Component({
  selector: 'trunsfer-funds',
  templateUrl: './trunsfer-funds.component.html',
  styleUrls: ['./trunsfer-funds.component.scss']
})
export class TrunsferFundsComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() contact: Contact;

  amount: number = 0;
  msg: string = '';

  ngOnInit(): void {
  }

  onTransferFunds()  {
    this.msg = this.amount?this.userService.transferFunds(this.contact, this.amount): 'Please enter an amount sum.'
  }
}
