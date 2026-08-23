const header = document.querySelector('header'); 
const headerHeight = header.offsetHeight;
console.log(headerHeight);
document.body.style.setProperty('--header-height', headerHeight + 'px')


const burger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', ()=> {
  burger.classList.toggle('move');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => { 
  link.addEventListener('click', ()=> {
    burger.classList.remove('move');
    navLinks.classList.remove('active');
  });
});


const faq = document.querySelectorAll('.faq-question');

faq.forEach(btn => {
  btn.addEventListener('click', () => {
   
    const arrow = btn.querySelector('.arrow');
    const answer = btn.nextElementSibling;
    const isOpen = arrow.classList.contains('scroll');
    
    faq.forEach(clBtn => {
     clBtn.querySelector('.arrow').classList.remove('scroll');
     clBtn.nextElementSibling.classList.remove('appear');
    });
    
    if(!isOpen) {
      arrow.classList.add('scroll');
      answer.classList.add('appear');
    }
  });
});


const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
    }
  });
});
sections.forEach(section => {
  observer.observe(section);
});



const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const output = document.querySelector('#output');
const status = document.querySelector('#status');
const form = document.querySelector('#bmi-form');
const error = document.querySelector('.errorMsg')
error.style.color = 'red';

function timeOut() {
  status.textContent = "--"
  output.textContent = "--"
  setTimeout(() => {
    error.textContent = "";
  }, 4000);
}

form.addEventListener('submit', (event) => {
  
  event.preventDefault();
  
  const heightValue = Number(height.value);
  const weightValue = Number(weight.value);
  
  if (height.value.trim() === '' || weight.value.trim() === '') {
    error.textContent = "Please enter both height and weight.";
    timeOut()
    return;
  }
  
  
  if (heightValue <= 0) {
    error.textContent = "Please enter a valid height.";
    timeOut()
    return;
  }
  
  if (weightValue <= 0) {
    error.textContent = "Please enter a valid weight.";
    timeOut()
    return;
  }
  
  if (heightValue < 50 || heightValue > 250) {
    error.textContent = "Please enter a realistic height";
    timeOut();
    return;
  }
  
  if (weightValue < 10 || weightValue > 300) {
    error.textContent = "Please enter a valid weight";
    timeOut();
    return;
  }
  
   const heightInMeters = heightValue/100;
   
   const bmi = weightValue / (heightInMeters*heightInMeters);
   const roundedOutput = bmi.toFixed(1);
   output.textContent = roundedOutput;
   
   if (bmi < 18.5) {
     status.textContent = 'Underweight 🌱';
     status.style.color = 'gold';
   }
   else if (bmi < 25) {
     status.textContent = "Healthy Weight ✅";
     status.style.color = '#A3FF12';
   }
   else if (bmi < 30) {
     status.textContent = 'Overweight‼️';
     status.style.color = 'tomato';
   }
   else {
     status.textContent = 'Obese ⚠️';
     status.style.color = 'tomato';
   }
});



const back2Top = document.querySelector('#backtoTop');

window.addEventListener('scroll', () => {
// console.log(window.scrollY);
  
  if (window.scrollY > 400) {
    back2Top.classList.add('on');
  }
  else {
    back2Top.classList.remove('on');
  }
});


back2Top.addEventListener('click', ()=> {
  console.log('☝️');
//  window.scrollTo(0,0);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
