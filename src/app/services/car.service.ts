import { HttpClient } from '@angular/common/http' //HttpClient ile backende ulasabiliriz.Bu bir api cagrisidir.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44314/api/"
  constructor(private httpClient: HttpClient)//parantez icine private yazmamizin nedeni sadece bu classta HttpClienta erismek istememiz 
  { }
  
  getCars():Observable<ListResponseModel<Car>> {//Bir servisten api istegi yapmamz icin gerekli olan kisim
    let newPath=this.apiUrl+"cars/getall" //apiyi aldığımız yer
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {//Bir servisten api istegi yapmamz icin gerekli olan kisim
    let newPath=this.apiUrl+"cars/getbybrandid?brandId"+ brandId //apiyi aldığımız yer
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

}
