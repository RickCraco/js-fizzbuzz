const wrapper = document.getElementById('divWrapper');
wrapper.append('div')

for(let i = 1; i < 101; i++){
    let boxIndex = i;
    if(boxIndex % 3 === 0 && boxIndex % 5 === 0){
        const fizzBuzz = 'FizzBuzz';
        console.log(boxIndex);
        console.log(fizzBuzz);
    }else if(boxIndex % 3 === 0){
        const fizz = 'Fizz';
        console.log(boxIndex);
        console.log(fizz);
    }else if(boxIndex % 5 === 0){
        const buzz = 'Buzz';
        console.log(boxIndex);
        console.log(buzz);
    }

    console.log(boxIndex);
}