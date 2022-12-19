//console.log("Hello REAN");

// Part 1 : let vs var
/*
function doSomething(){
   // for(var i=0; i<10;i++)
   for(let i=0; i<10;i++)
    {
        console.log("i = "+i);
    }
    console.log("final i = "+i);
}
doSomething();*/

// Part 2 : Les String Template
/*
var formation ="REAN";
var result = `Une formation sur le framework ${formation} à PLB`;
console.log("Formation : " + result);*/

//Part 3 : Les valeurs par défaut
/*
let somme = function(x=10,y=10){
    return x+y;
}
let res = somme();
console.log(res);*/

//Part 4 : le foreach

//let names = ["Hugo","Alain","Alex"]
/*
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}*/
/*for(let name of names)
{
    console.log(name);
}*/

//Part 5 : Expression Lambda
/*
let nomComplet = (nom, prenom) => {
    console.log(nom + " " + prenom)
}*/

//nomComplet("Mezghich","Mohamed Amine");
/*
let tabs = [20,35,14,100,90];
tabs.sort((a,b)=>(a-b));
for(let v of tabs)
console.log(v);*/
/*
class Etudiant{
    nom;
    prenom;

    display()
    {
        console.log("Vous êtes : "+ this.nom +" "+this.prenom);
    }
}

let e = new Etudiant();
e.nom = "Mezghich";
e.prenom = "Mohamed Amine";
e.display();*/

const stagiaire= { nom: "Mezghich", ville: "Paris" };
console.log(Object.values(stagiaire));