const wrapper = document.getElementById('divWrapper');


for(let i = 1; i < 101; i++){

    let box = document.createElement('div');
    wrapper.append(box);
    wrapper.classList.add('d-flex', 'flex-wrap');
    box.classList.add('box','border', 'border-dark', 'd-flex', 'justify-content-center', 'align-items-center');
    let boxIndex = i;
    box.innerHTML = boxIndex;

    if(boxIndex % 3 === 0 && boxIndex % 5 === 0){
        const fizzBuzz = 'FizzBuzz';
        box.innerHTML = fizzBuzz;
        box.classList.add()
        console.log(boxIndex);
        console.log(fizzBuzz);
    }else if(boxIndex % 3 === 0){
        const fizz = 'Fizz';
        box.innerHTML = fizz;
        console.log(boxIndex);
        console.log(fizz);
    }else if(boxIndex % 5 === 0){
        const buzz = 'Buzz';
        box.innerHTML = buzz;
        console.log(boxIndex);
        console.log(buzz);
    }

    console.log(boxIndex);
}