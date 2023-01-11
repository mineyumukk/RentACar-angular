import { HttpClient } from '@angular/common/http' //HttpClient ile backende ulasabiliriz.Bu bir api cagrisidir.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44314/api/brands/getall"
  constructor(private httpClient: HttpClient)//parantez icine private yazmamizin nedeni sadece bu classta HttpClienta erismek istememiz 
  { }
  
  getBrands():Observable<ListResponseModel<Brand>> {//Bir servisten api istegi yapmamz icin gerekli olan kisim
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
