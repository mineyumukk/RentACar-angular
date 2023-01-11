import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded=false;

  constructor(private carService:CarService,private activedRoute:ActivatedRoute)//Bir servisi kullanabilmek icin yapmamız gereken hareket
  { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else{
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response=> {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=> {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

}
