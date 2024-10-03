let represe = 0
let numb = []

for(represe = 0; represe<= 10; represe++){
numb[represe]  = parseInt(prompt("Digite seus numeros:"))
}
for(represe = 0; represe <= 10; represe++){
    if(numb[represe]<0){
    alert(`O numero ${represe} é negativo`)
}
}