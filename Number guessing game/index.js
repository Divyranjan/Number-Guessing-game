let min=1;
let max=100;
let guess;
let attempts=0;
let flag =true;

let num=Math.round(Math.random() * (max-min+1))+min;
console.log(num);

while(flag)
{
    guess=Number(window.prompt(`Guess a number between ${min} and ${max}.`));

    if(guess<num)
    {
        window.alert("Too small .Plzz try again.");

    }

    else if(guess>num)
    {
        window.alert("Too large .Plzz try again.");
        
    }
    
    else{
        window.alert("Hurray!!! You Won");
        flag=false;
        
    }  
    
    

}



