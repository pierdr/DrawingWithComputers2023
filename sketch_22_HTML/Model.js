class Model{
 constructor(){
   this.list = [];
 }
 
 addItem(item)
 {
   console.log("added new item:",item);
   this.list.push(item);
 }
 
 emptyList()
 {
   this.list = [];
 }
  
}
