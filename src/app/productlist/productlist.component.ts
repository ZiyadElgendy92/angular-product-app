import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  template: `
    <body>
	<ul class='items'><li *ngFor="let item of items"><span class='tag'>{{item.itemindex+1}}- {{item.id}} </span>{{item.name}} 
	
	<button (click)="edititem(item.name, item.id, item.itemindex )" > edit</button> 
	
	<button  (click)="popItem(item.itemindex)"> delll</button> </li></ul>
	
	<button id="addbtn" class="button" (click)="openmodal()"> Add New Product </button>
	
	<div class="addproduct" id="addproduct">
	<div class="modalbox">
	insert product data <span class="closebtn" (click)="closemodal()">&times;</span>
	<div class="field">Name<input #newItemName ></div>
	<div class="field">Id<input #newItemId ></div>
    <button (click)="addItem(newItemName.value, newItemId.value)">Confirm</button>
	</div>
	</div>
	
	<div class="editproduct" id="editproduct">
	<div class="modalbox">
	edit productt <span class="closebtn" (click)="closemodal2()">&times;</span>
	<div class="field">Name<input #new2ItemName value={{templist[0].name}}></div>
	<div class="field">Id<input #new2ItemId value={{templist[0].id}}></div>

    <button (click)="updateitem(new2ItemName.value, new2ItemId.value, templist[0].itemindex)">Confirm edit</button>
	</div>
	</div>
	
	</body>
  `
})



export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items/*: itemlist[]  */ = [
  { id: 1951, name: 'car', itemindex:0 },
  { id: 1652, name: 'motorbike', itemindex:1 },
  { id: 93451, name: 'buy', itemindex:2 },
  { id: 51, name: 'far', itemindex:3 }
  
];
  
  
  addItem(newItemName: string, newItemId: number) {
    /*if (newItemName && newItemId) {} wrap all in here*/
	  /*for (var i=0; i<this.items.length; i++){
		this.items[i].itemindex = i;
	  } deletethis*/
	  
	  var indx= this.items.length;
	  var newItem ={id: newItemId, name:newItemName, itemindex: this.items.length};
      this.items.push(newItem);
	  console.log(newItem); //checking
	
  }
  
  edititem(n, d, i){
  this.openmodal2();
  var tempobj= {id: d, name:n, itemindex:i };
  this.templist.splice(0,1,tempobj);
  console.log (this.templist);//checking
  }
  
  updateitem(n, d, i){
	var newItem ={id: d, name:n, itemindex: i};
	this.items.splice(i, 1, newItem);
	this.templist.splice(0,1, {id: "", name:"", itemindex:"" });
	this.closemodal2();
  }
  
  
  popItem(n){
  this.items.splice(n, 1);
  
  for (var  i=0; i<this.items.length; i++){
		this.items[i].itemindex = i;
		
	  }
  }
     templist = [{id: "", name:"", itemindex:"" }];//array declaration!


	openalert(){//checking
		console.log("open!");
	}
  openmodal(){
  var modal = document.getElementById('addproduct');
	modal.style.display = 'block';
	this.openalert();//checking
  }
  
  closemodal(){
  var modal = document.getElementById('addproduct');
  modal.style.display = 'none';
}

openmodal2(){
  var modal = document.getElementById('editproduct');
	modal.style.display = 'block';
  }
  closemodal2(){
  var modal = document.getElementById('editproduct');
  modal.style.display = 'none';
  }
  
  
}



export class item {
	id: number;
	name: string;
	itemindex: number
}
