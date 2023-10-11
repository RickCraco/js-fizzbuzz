const wrapper = document.getElementById('divWrapper');


for(let i = 1; i < 101; i++){

    let box = document.createElement('div');
    wrapper.append(box);
    wrapper.classList.add('d-flex', 'flex-wrap');
    box.classList.add('box','border','d-flex', 'justify-content-center', 'align-items-center', 'bg-secondary');
    let boxIndex = i;
    box.innerHTML = boxIndex;

    if(boxIndex % 3 === 0 && boxIndex % 5 === 0){
        const fizzBuzz = 'FizzBuzz';
        box.innerHTML = fizzBuzz;
        box.classList.add('bg-danger')
        console.log(boxIndex);
        console.log(fizzBuzz);
    }else if(boxIndex % 3 === 0){
        const fizz = 'Fizz';
        box.innerHTML = fizz;
        box.classList.add('bg-info')
        console.log(boxIndex);
        console.log(fizz);
    }else if(boxIndex % 5 === 0){
        const buzz = 'Buzz';
        box.innerHTML = buzz;
        box.classList.add('bg-success')
        console.log(boxIndex);
        console.log(buzz);
    }

    console.log(boxIndex);
}