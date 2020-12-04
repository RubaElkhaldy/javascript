
// All topping types
function topping_types(){
  json_ [0].topping.forEach((type, i)=>{
        console.log('type'+i+' = '+json_ [0].topping[i].type);  }) }





     
// All batter types
function batter_types(){
json_ [0].batters.batter.forEach((batter, i)=>{
    console.log('type'+i+' = '+json_ [0].batters.batter[i].type);  })}



//  Ppu average & Ppu SUM
function ppu_avg_sum(){
let sum=0;
let list_ppu=[];
for(let i in json_){
    list_ppu[i]=json_[i].ppu;
    sum+=json_[i].ppu;} 

}



// List of all mentioned IDs regardless to the type
function list_id(){
let list_ID=[];
for(let i in json_){
    list_ID[i]=json_[i].id; 
} 

for(let j in json_){
json_ [j].topping.forEach((type, i)=>{
    list_ID[list_ID.length++]= json_ [j].topping[i].id; })
json_ [j].batters.batter.forEach((batter, i)=>{
    list_ID[list_ID.length++]= json_ [j].batters.batter[i].id;})}
console.log(list_ID);}