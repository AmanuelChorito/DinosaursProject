
    // Create Dino Constructor
class Dino{
    constructor(species,image,fact){
        this.species=species;
        this.image=image;
        this.fact=fact;
    }
}

    // Create Dino Objects
 const anklyosaurus=new Dino('anklyosaurus','anklyosaurus.png',"Night vision");

    // Create Human Object
   
   class HumanObject {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

 


    // Use IIFE to get human data from form
    const button= document.getElementById('btn');
var human=[];
   button.addEventListener('click',(function(){
        
        return function (){
         HumanName =document.getElementById('name').value;
         ft =document.getElementById('feet').value;
         inches =document.getElementById('inches').value;
         height=ft+"\""+inches+"\'";
         weight =document.getElementById('weight').value;
       
        hum= new HumanObject(HumanName,height,weight);
        human.push(hum);
        console.log(human[0]);
          
        } 
        
    })());

 console.log(`Data: ${human}`)
    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
