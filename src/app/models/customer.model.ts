export class Customer {
  firstname: string;
  lastname: string;
  phone?: string;
  email?: string;

  constructor(f: string, l: string) {
    this.firstname = f;
    this.lastname = l;
  }

}
