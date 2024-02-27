import { Component, OnInit } from '@angular/core';
import { ICoffee } from 'src/app/interfaces/coffee.interface';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  micoffees: ICoffee[] = [];
  cuantos: number=0;

  constructor(private coffeeService: CoffeeService){}


  ngOnInit(): void {

    this.coffeeService.coffees.subscribe(datacoffees => {
      this.micoffees = datacoffees;
      this.cuantos = datacoffees.length;

    })

    
  }

  deleteCoffee(index: number){
    this.coffeeService.deleteCoffee(index);
    this.coffeeService.coffees.subscribe(datacoffess =>{
      this.micoffees = datacoffess;
      
    })

  }



  

  


}
