console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i < 100; i+=2) 
{
    console.log(i);
}

    /* Alternate Code
    for(let i = 1; i < 100; i++) 
    {
        if(i % 2 != 0) 
        {
        console.log(i);
        }
    }
    */



    
// Exercise 2 Section
    console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i < 100; i++) 
{
    if (i % 15 == 0)
    {
        console.log(i, "FIZZBUZZ");
    }
    else if (i % 3 == 0)
    {
        console.log(i, "FIZZ");
    }
    
    else if (i % 5 == 0)    
    {
        console.log(i, "BUZZ");
    }
    
    



}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// Exercise 3, exercise 1 Re-factored as a - DO-WHILE Loop
console.log("exercise 1 - as DO-WHILE Loop:\n==========\n");

let y = 1;

do
{

    console.log(y);

y+=2;

} 

while (y < 100); 




// Exercise 3, Exercise 1 Re-Factored as a  - While LOOP

console.log("exercise 1 - as While Loop:\n==========\n");


let z = 1;

while (z < 100)
{
    console.log(z);
    z+= 2;
}






// Do-While Loop Use for FIZZBUZZ Problem


 console.log("exercise 2 - as DO-WHILE Loop:\n==========\n");

let x = 1;

do
{


     if (x % 15 == 0)
    {

        console.log(x, "FIZZBUZZ");
    }

    else if (x % 5 == 0)
    {

        console.log(x, "BUZZ");
    }

    else if (x % 3 == 0)
    {
        console.log(x, "FIZZ");
    }

x++;

}
while (x <= 100);


// While Loop used for FIZZBUZZ Problem

 console.log("exercise 2 - as While - Loop :\n==========\n");

let i = 1;



while (i <= 100)
{


    if (i % 15 == 0)
    {

        console.log(i, "FIZZBUZZ");
    }


    else if (i % 5 == 0)
    {

        console.log(i, "BUZZ");
    }

    else if (i % 3 == 0)
    {
        console.log(i, "FIZZ");
    }

    i++; //updated the letter used for the incrementer here.

}




// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++)
{
    if (i == value)
    {
    console.log(`Found ${i}`);
    break;
    }
    //if (value < 1 || value > n) 
    //{

        //console.log(`Did not find value: ${value}`);
      
    //}
      
}

if (i != n) 
{

    console.log(`Did not find value: ${value}`); 

}




// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n1 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start, n1)

for (let i = start; i <= n1; i++)
{
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) 
    {
    
        console.log(i, "FIZZBUZZ");
        
    } 
    else if (i % fizzDivisor == 0)
    {
        
        console.log(i, "FIZZ");
    }
            
            
    else if (i % buzzDivisor == 0)
    {
    
        console.log(i, "BUZZ");
    }

   
}      
        
console.log(fizzDivisor, buzzDivisor);



