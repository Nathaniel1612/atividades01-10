let NOme=[4]
let nota=[4]
let medi=.0,adiçao

for(let i=0;i<5;i++){
   NOme.push(prompt("Digite seu nome"))
}
for(let i=0;i<5;i++){
   nota.push(Number(prompt("Digite suas notas")))

   medi=(medi+nota)/5

   if(nota<medi){    
   console.log(NOme+"esta de rescuperaçao")
   }else{
   
   }

}