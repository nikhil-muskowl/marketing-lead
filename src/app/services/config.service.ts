import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // static BASE_URL: String = 'http://localhost/codeigniter/community/';
  static BASE_URL: String = 'http://service-enquiry.muskowl.com/admin/';

  constructor() { }
}
