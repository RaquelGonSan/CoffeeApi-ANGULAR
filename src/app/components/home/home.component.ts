import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICoffee } from 'src/app/interfaces/coffee.interface';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    coffeeList: ICoffee[] = [];
    micoffees: ICoffee[] = [];
    micoffee?: ICoffee;
   cuantos: number =  0;

  constructor(private coffeeservice: CoffeeService){


  }

  ngOnInit(): void {
    this.coffeeservice.getCoffeeList().subscribe((data: ICoffee[]) =>{
      this.coffeeList = data;
      
    })
  }

  newCoffee(ICoffee: ICoffee){
    this.coffeeservice.addCoffee(ICoffee);
    this.coffeeservice.coffees.subscribe(datacoffees => {
      this.micoffees = datacoffees;
     
    })

  }

 

}
