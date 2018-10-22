import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  template: `
    <body>
	
	<ul class='items'>
	
	<li id="titlebar" ><span class='tag'>Index  ID</span> NAME <button id="addbtn" class="button" (click)="openmodal()"> Add New Product </button>
	</li>
	
	<li *ngFor="let item of items"><span class='tag'>{{item.itemindex+1}}   </span>{{item.id}}  {{item.name}} 
	
	<span class="btns">
	<button (click)="edititem(item.name, item.id, item.itemindex )" > edit</button>
	<button  (click)="popItem(item.itemindex)"> del</button>
	</span> 
	
	</li>
	</ul>
	
	
	
	
	<div class="addproduct" id="addproduct">
	<div class="modalbox">
	insert product data <span class="closebtn" (click)="closemodal()">&times;</span>
	<div class="field"  >Name<input #newItemName id="inputname"></div>
	<div class="field"  >Id<input #newItemId id="inputid"></div>
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
  { id: 9658, name: 'nissan', itemindex:0 },
  { id: 2548, name: 'toyota', itemindex:1 },
  { id: 9847, name: 'bmw', itemindex:2 },
  { id: 9865, name: 'fiat', itemindex:3 }
  
];
  
  
  addItem(newItemName: string, newItemId: number) {
    /*if (newItemName && newItemId) {} wrap all in here*/

	  
	  var indx= this.items.length;
	  var newItem ={id: newItemId, name:newItemName, itemindex: this.items.length};
      this.items.push(newItem);
	  console.log(newItem); //checking
	  document.getElementById('inputname').value='' ;
	  document.getElementById('inputid').value='' ;
	
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
		console.log("opennnn!");
	}
  openmodal(){
	var modal = document.getElementById('addproduct');
	modal.style.display = 'block';
	this.openalert();//checking
	document.getElementById('inputname').value='' ;
	document.getElementById('inputid').value='' ;
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
