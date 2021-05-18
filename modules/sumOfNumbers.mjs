// Compute sum of numbers 1 to n

function sumOfNumberCount(n){
    // Check that n is valid
    if (n === undefined || n === null)
    {
        console.log('You did not enter a value for n.');
    }
    else if (isNaN(n) === true)
    {
        console.log('Please enter a number for n.');
    }
    else if (n < 1) {
        console.log('Please enter a positive number.');
    }
    else {
        let sum = 0;
        for(let i = 1; i <= n ; i++){
            sum = sum + i;
        }
        console.log(sum);
    }
}


function sumOfMultiples(n){
    // Check that n is valid
    if (n === undefined || n === null)
    {
        console.log('You did not enter a value for n.');
    }
    else if (isNaN(n) === true)
    {
        console.log('Please enter a number for n.');
    }
    else if (n < 1) {
        console.log('Please enter a positive number.');
    }
    else {
        let sum = 0;
        for(let i = 1; i <= n ; i++){
            if (i % 3 === 0 || i % 5 === 0)
            {
                sum = sum + i;
            }
        }
        console.log(sum);
    }
}


function sumOrProduct(n, operation) {
    // Check that n is valid
    if (n === undefined || n === null)
    {
        console.log('You did not enter a value for n.');
    }
    else if (isNaN(n) === true)
    {
        console.log('Please enter a number for n.');
    }
    else if (n < 1) {
        console.log('Please enter a positive number.');
    }
    else {
        if(operation === undefined || operation === null )
        {
            console.log('You did not enter a symbol for operation.');
        }
        else if (operation !== '+' && operation !== '*')
        {
            console.log('Operation symbol must be either + or *.');
        }
        else {
            switch (operation)
            {
                case '+':                
                    let sum = 0;
                    for(let i = 1; i <= n ; i++){
                        sum = sum + i;
                    }
                    console.log('Sum = ' + sum);
                break;
                default:
                    let product = 1;
                    for(let i = 1; i <= n ; i++){
                        product = product * i;
                    }
                    console.log('Product = ' + product);
            }
        }    
    }
}


export { sumOfNumberCount, sumOfMultiples, sumOrProduct };