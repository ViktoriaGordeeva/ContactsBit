export class User {
    constructor(
      public name: string = '',
      public coins: number= 100,
      public moves: any = [],
      public _id?: string
    ) {}
    setId?() {
      this._id = makeId();
    }
  }
  
  function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
  
