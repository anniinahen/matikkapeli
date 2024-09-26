'use strict'

let rand_num1 = 0;
let rand_num2 = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10);
    rand_num2 = getRandomIntNumberInRange(1, 10);
    document.querySelector('#num1').innerHTML = rand_num1;
    document.querySelector('#num2').innerHTML = rand_num2;
};

const updateAnswerCounts = () => {
    document.querySelector('#correctCount').innerHTML = correctAnswers;
    document.querySelector('#wrongCount').innerHTML = wrongAnswers;
};


addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
});

document.querySelector('#calculate').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value);
    const correctAnswer = rand_num1 + rand_num2;

    if (answer === correctAnswer) {
        alert('Oikein!');
        correctAnswers++;  
    } else {
        alert('Väärin!');
        wrongAnswers++; 
    }

    updateAnswerCounts();

    randomizeNumbers();
    document.querySelector('input').value = '';
});