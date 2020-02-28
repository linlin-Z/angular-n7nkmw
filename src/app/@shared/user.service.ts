import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private user: User;

  constructor() {}

  auth(login: string) {
    this.user = { login: login };
  }

  getUser() {
    return this.user;
  }
}

export interface User {
  login: string;
}
