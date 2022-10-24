/*
FOR creo un loop che mi genera numeri(n) fino a 100;
IF (n) / 3 dà resto 0:
    -(n) = 'Fizz'
ELSE IF (n) / 5 dà resto 0:
    -(n) = 'Buzz'
ELSE IF (n) / 3 && (n) / 5 danno resto 0:
    -(n) = 'FizzBuzz'

*/


const eleNumbersBox = document.querySelector('.s_numbers_box');

for (let n = 1; n <= 100; n++) {
    if ((n % 3 == 0) && (n % 5 == 0)) {
        eleNumbersBox.innerHTML += `<div class="col"><div class="s_fizzbuzz s_card">FizzBuzz</div></div>`;
    }else if (n % 3 == 0) {
        eleNumbersBox.innerHTML += `<div class="col"><div class="s_fizz s_card">Fizz</div></div>`;
    }else if (n % 5 == 0) {
        eleNumbersBox.innerHTML += `<div class="col"><div class="s_buzz s_card">Buzz</div></div>`;
    }else {
        eleNumbersBox.innerHTML += `<div class="col"><div class="s_number s_card">${n}</div></div>`;
    }
}
