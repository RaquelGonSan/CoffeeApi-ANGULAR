import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICoffee } from '../interfaces/coffee.interface';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  private baseUrl = 'https://fake-coffee-api.vercel.app/api';

  micoffees: ICoffee[] = [];
  micoffee?: ICoffee;
  cuantos: number = 0;

    private _coffees: BehaviorSubject<ICoffee[]>;

  constructor(private httpClient: HttpClient) {
    this._coffees = new BehaviorSubject<ICoffee[]>([]);
   }


  getCoffeeList(): Observable<ICoffee[]>{
    return this.httpClient.get<ICoffee[]>(this.baseUrl);
  }

  getCoffeeId(id: number): Observable<ICoffee>{
    return this.httpClient.get<ICoffee>(`${this.baseUrl}/${id}`);
  }


  addCoffee(ICoffe: ICoffee) {
      this.micoffees.push(ICoffe);
      //el metodo next emite hacia fuera para que todos los componentes que estan suscritos a este observable lo escuches y reciban sus cambios si es que hay
      this._coffees.next(this.micoffees);
      this.cuantos++;
  }

  deleteCoffee(index: number){
    this.micoffees.splice(index, 1);
    this._coffees.next(this.micoffees);
    this.cuantos--;

  }

   //este metodo nos da la posibilidad posteriormente de que cuando llamemos a este mmetodo desde fuera de este servicio, poder suscribirnos al observaable y recuperar sus valores
   //solo podemos hacer suscripciones a observables
   get coffees(){
    return this._coffees.asObservable();
  }

  getnumCoffees(){
    return this.cuantos;
  }


}
