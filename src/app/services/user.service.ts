import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Move } from '../model/move.model';
import { Contact } from '../model/contact.model';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';


const USER_Key = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _loggedInUser: User
  private _loggedInUser$ = new BehaviorSubject<any>({})
  public loggedInUser$ = this._loggedInUser$.asObservable()

  constructor(
    private storageService: StorageService,
  ) { }

  getLoggedUser() {
    return this.storageService.loadFromStorage(USER_Key);
  }

  signup(name: string) {
    const user = new User()
    user.name = name
    user.setId()
    this._loggedInUser = user
    this._loggedInUser$.next(this._loggedInUser)
    this.storageService.saveToStorage(USER_Key, user);
  }

  transferFunds(contact: Contact, amount: number) {

    if (+this._loggedInUser.coins < +amount) {
      return 'You don\'t have enough balance.';
    }
    const newMove = new Move(contact._id, contact.name, Date.now(), amount);
    this._loggedInUser.moves = [newMove, ...this._loggedInUser.moves];
    this._loggedInUser.coins = this._loggedInUser.coins - amount;
    this._loggedInUser$.next(this._loggedInUser)

    this.storageService.saveToStorage(USER_Key, this._loggedInUser);
    return `The process complited successfully. ${amount} coins are transferred to ${contact.name}.`;

  }
  getLastMoves() {
    return this._loggedInUser.moves.slice(0, 3)
  }

}
