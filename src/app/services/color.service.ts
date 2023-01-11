import { HttpClient } from '@angular/common/http' //HttpClient ile backende ulasabiliriz.Bu bir api cagrisidir.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorSerice {

  apiUrl = "https://localhost:44314/api/colors/getall"
  constructor(private httpClient: HttpClient)//parantez icine private yazmamizin nedeni sadece bu classta HttpClienta erismek istememiz 
  { }
  
  getColors():Observable<ListResponseModel<Color>> {//Bir servisten api istegi yapmamz icin gerekli olan kisim
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl)
  }
}
