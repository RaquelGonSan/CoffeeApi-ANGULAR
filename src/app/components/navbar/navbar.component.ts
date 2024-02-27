import { Component, OnInit } from '@angular/core';
import { ICoffee } from 'src/app/interfaces/coffee.interface';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mycoffeess: ICoffee[] = [];
  cuantos: number = 0;

  constructor(private coffeeservice: CoffeeService){

  }

  ngOnInit(): void {
    
    this.coffeeservice.coffees.subscribe(cofeedata => {
      this.mycoffeess = cofeedata;
      this.cuantos = cofeedata.length;
    })
    
  }

  ngOnChanges(): void {
    this.cuantos = this.coffeeservice.cuantos;
    
  }

}
