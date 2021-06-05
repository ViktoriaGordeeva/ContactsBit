export class Contact {

  constructor(
    public _id?: string,
    public name: string = '',
    public email: string = '',
    public phone: string = '') { }

  setId?() {
    this._id = makeId()
  }
}

function makeId(length = 24) {
  var txt = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}