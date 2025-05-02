console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i < 100; i+2) 
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

for(let i = 0; i < 100; i++) 
{
    if (i % 15 == 0)
    {
    console.log(i, "FIZZBUZZ");
    }
    else
    {

        if (i % 5 == 0)
        {

            console.log(i, "BUZZ");
        }

        if (i % 3 == 0)
        {
            console.log(i, "FIZZ");
        }
    }



}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// Do-While Loop Use for FIZZBUZZ Problem

let x = 1;

do
{


     if (x % 15 == 0)
    {

        console.log(x, "FIZZBUZZ");
    }


    if (x % 5 == 0)
    {

        console.log(x, "BUZZ");
    }

    if (x % 3 == 0)
    {
        console.log(x, "FIZZ");
}

x++;

}
while (x <= 100);


// While Loop used for FIZZBUZZ Problem

let i = 1;

while (i <= 100)
{


    if (i % 15 == 0)
    {

        console.log(i, "FIZZBUZZ");
    }


    if (i % 5 == 0)
    {

        console.log(i, "BUZZ");
    }

    if (i % 3 == 0)
    {
        console.log(i, "FIZZ");
    }

    ++;

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
    console.log(`Did not find ${value}, the random value`)
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
    if (i % fizzDivisor == 0)
    {
        
        console.log(i, "FIZZ");
    }
            
            
    if (i % buzzDivisor == 0)
    {
    
        console.log(i, "BUZZ");
    }
}      
        
console.log(fizzDivisor, buzzDivisor);



