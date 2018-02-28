import {Injectable} from '@angular/core';

@Injectable()
export class TestService {

  constructor() {
  }

  hello(): string {
    return 'Hello From TestService';
  }

}
