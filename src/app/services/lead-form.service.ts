import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadFormService {

  constructor(private http: HttpClient) { }

  public getType(): any {
    return this.http.get(ConfigService.BASE_URL + 'category/autocomplete');
  }

  public postData(data): any {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');

    const formData: FormData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);
    formData.append('company', data.company);
    formData.append('remarks', data.remarks);
    formData.append('categories', JSON.stringify(data.categories));

    return this.http.post(ConfigService.BASE_URL + 'category_quotation/ajax_post',
      formData,
      {
        headers: headers,
      }
    );
  }
}
