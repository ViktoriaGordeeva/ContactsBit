import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Contact } from 'src/app/model/contact.model';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';



@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) { }

  user: User
  rate: any
  subscription: Subscription
  loaded = false
  lastMoves = []

  ngOnInit(): void {
    this.user = this.userService.getLoggedUser()
    this.currRate()
    this.lastMoves = this.userService.getLastMoves()
  }

  currRate() {
    this.subscription = this.bitcoinService
      .getRate(this.user.coins).subscribe(rate => {
        this.rate = rate
      })
  }
}

