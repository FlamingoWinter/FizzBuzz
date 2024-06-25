// Part 1

let maxcount = 100;
for(let i = 1; i <= maxcount; i++){
    let output:string=``;
    if(i%3==0){
        output+=`Fizz`;
    }
    if(i%5==0){
        output+=`Buzz`
    }
    if(!output){
        output=i.toString();
    }
    console.log(output);
}

// Part 2