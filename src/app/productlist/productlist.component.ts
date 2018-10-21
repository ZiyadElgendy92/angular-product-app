import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  template: `
    <ul class='items'><li *ngFor="let item of items"><span class='tag'>{{item.itemindex+1}}- {{item.id}} </span>{{item.name}} 
	
	<button > edit</button> 
	
	<button  (click)="popItem(item.itemindex)"> delll</button> </li></ul>
	
	<div class="addproduct">
	add product
	<div class="field">Name<input #newItemName ></div>
	<div class="field">Id<input #newItemId ></div>

    <button (click)="addItem(newItemName.value, newItemId.value)">Confirm</button>
	</div>
	
	<div class="editproduct">
	edit product 
	<div class="field">Name<input #new2ItemName value="xxxx"></div>
	<div class="field">Id<input #new2ItemId value="yyyy"></div>

    <button (click)="addItem(newItemName.value, newItemId.value)">Confirm edit</button>
	</div>
	
  `
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /*heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];*/
  items: itemlist[] = [
  { id: 1951, name: 'car', itemindex:0 },
  { id: 1652, name: 'motorbike', itemindex:1 }
];
  
  addItem(newItemName: string, newItemId: number) {
    /*if (newItemName && newItemId) {} wrap all in here*/
	  /*for (var i=0; i<this.items.length; i++){
		this.items[i].itemindex = i;
	  } deletethis*/
	  
	  var indx= this.items.length;
	  var newItem ={id: newItemId, name:newItemName, itemindex: this.items.length}
      this.items.push(newItem);
	  console.log(newItem); //checking
	
  }
  
  
  
  popItem(n){
  this.items.splice(n, 1);
  
  for (var  i=0; i<this.items.length; i++){
		this.items[i].itemindex = i;
	  }
  }
}


export class item {
	id: number;
	name: string;
	itemindex: number
}