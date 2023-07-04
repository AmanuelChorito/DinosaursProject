
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
     class Human {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;

    }
};
 


    // Use IIFE to get human data from form
   const getHumanData= (function () {
    var HumanName='' ;
        let height='' ;
        let weight='';
    let button= document.getElementById('btn');
    button.addEventListener('click',function(){
         HumanName =document.getElementById('name').value;
         console.log(`internal ${HumanName}`);
    });
        
        function getName(){
            console.log(`Data: ${HumanName}`)

            return HumanName;
        }
        // function getHeight(){
        //     return height;
        // }
        // function getWeight(){
        //     return weight;
        // }
        return{
            name:getName,
            // height:getHeight,
            // weight:getWeight
        };
    })();
 console.log(`Data: ${getHumanData.name()}`)
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
