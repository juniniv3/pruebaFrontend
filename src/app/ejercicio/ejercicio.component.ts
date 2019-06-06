import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {

  //public variables
  //array that save the random generated numbers
  numberList: number[] = [];

  numberListOrdered: number[] = [];
  // int variable for save the array size
  arraySize:number = 0;
  //flag to control the events when the user send the array size
  sizeReceived: boolean = false;

  //form control object
  arrayForm = new FormGroup({
    size: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {

  }

  generateArray(){
    let arraySize = this.arrayForm.value.size;
    if(this.arraySize>=0){
      this.numberList = [];
      this.numberListOrdered =[];
     for (let index = 0; index < arraySize ; index++) {
      //push in to array a number between 1 to 1000
      this.numberList.push(Math.floor((Math.random() * 1000) + 1));
     }
    }else{
      alert("Debes ingresar un tamaño para el array");
    }
  }


  sortArray(){

    if(this.numberList.length>0){
      this.numberListOrdered = JSON.parse(JSON.stringify(this.numberList));

      this.numberListOrdered.sort(function(a, b){return a-b});
      console.log(this.numberList);
    }else{
      alert("Debes generar un arreglo para poder ordenarlo");
    }

  }


}
