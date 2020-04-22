console.log("Hello!");
function outer(){

    let a = 'outer string';
    console.log(a);
    let b = {key: 'value'};
    console.log(b); //if console.log(b.key) you get just the 'value'

    function inner(a,b) {
        
        console.log(a); 

        //undefined when parameters a,b set in inner()
        
        console.log(b);

        a = 'inner string';
        b = {innerKeyUpdated: 'inner value'}
        
    }

    inner ('argument string', {argumentKey: 'argument value'});
    console.log(a);
    console.log(b);
}

outer();


