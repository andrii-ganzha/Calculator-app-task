'use strict';

let toggleSwitch = document.getElementsByClassName('redButton')[0];
const slide1 = document.querySelector('.legendText1');
const slide2 = document.querySelector('.legendText2');
const slide3 = document.querySelector('.legendText3');

function init_styleDisplay() {
  slide1.addEventListener('click', function () {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    document.body.style.backgroundColor = '#3a4764';
    document.querySelector('#buttonContainer').style.backgroundColor =
      '#232c43';
    document.querySelector('#legendTextContainer').style.color = '#fff';
    document.querySelector('.heading-calculator').style.color = '#fff';
    document.querySelector('.theme-text').style.color = '#fff';
    document.querySelector('.redButton').style.backgroundColor = '#d03f2f';
    document.querySelector('.calculator-display').style.backgroundColor =
      '#182034';
    document.querySelector('.display-text').style.color = '#fff';
    document.querySelector('.calculator-keys').style.backgroundColor =
      '#182034';
    let CalcBtn = document.querySelectorAll('.calc-button');
    CalcBtn.forEach(element => {
      element.style.color = '#3a4764';
      element.style.boxShadow = '0 0.4rem 0 rgb(180, 165, 151)';
      element.style.backgroundColor = '#eae3dc';
    });
    let AltBtn = document.querySelectorAll('.alternate-button');
    AltBtn.forEach(element => {
      element.style.color = '#fff';
      element.style.boxShadow = '0 0.4rem 0 rgb(64, 78, 114)';
      element.style.backgroundColor = 'rgb(99, 112, 151)';
    });
    document.querySelector('.equal-button').style.color = '#fff';
    document.querySelector('.equal-button').style.backgroundColor =
      'rgb(208, 63, 47)';
    document.querySelector('.equal-button').style.boxShadow =
      '0 0.4rem 0 rgb(147, 38, 26)';
  });

  slide2.addEventListener('click', function () {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    document.body.style.backgroundColor = 'hsl(0, 0%, 93%)';
    document.querySelector('#buttonContainer').style.backgroundColor =
      'hsl(0, 5%, 81%)';
    document.querySelector('#legendTextContainer').style.color = '#222';
    document.querySelector('.heading-calculator').style.color = '#222';
    document.querySelector('.theme-text').style.color = '#222';
    document.querySelector('.redButton').style.backgroundColor =
      'hsl(25, 98%, 40%)';
    document.querySelector('.calculator-display').style.backgroundColor =
      'hsl(0, 0%, 90%)';
    document.querySelector('.display-text').style.color = '#222';
    document.querySelector('.calculator-keys').style.backgroundColor =
      'hsl(0, 5%, 81%)';
    let CalcBtn = document.querySelectorAll('.calc-button');
    CalcBtn.forEach(element => {
      element.style.color = '#222';
      element.style.boxShadow = '0 0.4rem 0 hsl(35, 11%, 61%)';
      element.style.backgroundColor = 'hsl(45, 7%, 89%)';
    });

    let AltBtn = document.querySelectorAll('.alternate-button');
    AltBtn.forEach(element => {
      element.style.color = '#fff';
      element.style.boxShadow = '0 0.4rem 0 hsl(185, 58%, 25%)';
      element.style.backgroundColor = 'hsl(185, 42%, 37%)';
    });
    document.querySelector('.equal-button').style.color = '#fff';
    document.querySelector('.equal-button').style.backgroundColor =
      'hsl(25, 98%, 40%)';
    document.querySelector('.equal-button').style.boxShadow =
      '0 0.4rem 0 hsl(25, 99%, 27%)';
  });

  slide3.addEventListener('click', function () {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    document.querySelector('#buttonContainer').style.backgroundColor =
      'hsl(268, 71%, 12%)';
    document.querySelector('#legendTextContainer').style.color =
      'hsl(52, 100%, 62%)';
    document.querySelector('.heading-calculator').style.color =
      'hsl(52, 100%, 62%)';
    document.querySelector('.theme-text').style.color = 'hsl(52, 100%, 62%)';
    document.querySelector('.redButton').style.backgroundColor =
      'hsl(176, 100%, 44%)';
    document.querySelector('.calculator-display').style.backgroundColor =
      'hsl(268, 71%, 12%)';
    document.querySelector('.display-text').style.color = 'hsl(52, 100%, 62%)';
    document.querySelector('.calculator-keys').style.backgroundColor =
      'hsl(268, 71%, 12%)';
    let CalcBtn = document.querySelectorAll('.calc-button');
    CalcBtn.forEach(element => {
      element.style.color = 'hsl(52, 100%, 62%)';
      element.style.boxShadow = '0 0.4rem 0 hsl(290, 70%, 36%)';
      element.style.backgroundColor = 'hsl(268, 47%, 21%)';
    });
    let AltBtn = document.querySelectorAll('.alternate-button');
    AltBtn.forEach(element => {
      element.style.color = '#fff';
      element.style.boxShadow = '0 0.4rem 0 hsl(285, 91%, 52%)';
      element.style.backgroundColor = 'hsl(281, 89%, 26%)';
    });
    document.querySelector('.equal-button').style.color = 'hsl(268, 71%, 12%)';
    document.querySelector('.equal-button').style.backgroundColor =
      'hsl(176, 100%, 44%)';
    document.querySelector('.equal-button').style.boxShadow =
      '0 0.4rem 0 hsl(177, 92%, 70%)';
  });
}

init_styleDisplay();

let display = document.querySelector('.display-text');
let buttons = Array.from(document.querySelectorAll('.calc-button'));

buttons.map(button => {
  button.addEventListener('click', e => {
    switch (e.target.innerText) {
      case 'RESET':
        display.innerText = '';
        break;
      case 'DEL':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error!';
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
