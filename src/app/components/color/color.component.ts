import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorSerice } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor: Color;
  constructor(private colorService: ColorSerice ) { }//bu componente bir servis enjekte ediyoruz

  ngOnInit(): void {
    this.getColors
  }

  getColors() {
    this.colorService.getColors().subscribe(response=> {
      this.colors = response.data;
    });
  }

}
