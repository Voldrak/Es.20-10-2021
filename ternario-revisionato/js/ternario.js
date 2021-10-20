
let arr = ["1.cat", "2.dog", "3.panda", "4.koala"]
let list = arr.join('\n');
let risultato = prompt(list)  ;
if (risultato === null){

    alert("perchè non hai effettuato una scelta?")
    location.reload()

} else{
    let animal = risultato -1;
    alert (animal in arr ? `chose ${arr[animal]}` : "Animal not found");
    console.log(animal);
}