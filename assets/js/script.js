const inputYear = document.querySelector('.year');
const inputMonth = document.querySelector('.month');
const inputDay = document.querySelector('.day');


const dateToday = new Date();

function verificationYear(dateToday) {
    const yearText = document.querySelector('.year-text');
    const textErrorYear = document.querySelector('.error-year');
    const labelYear = document.querySelector('.label-year');
    const yearErrorInput =document.querySelector('.year');
    const yearCurrent = dateToday.getFullYear();


    const yearInterested = inputYear.value === "" || inputYear.value > yearCurrent ? '--' : yearCurrent-inputYear.value;

    if(inputYear.value > 0 && inputYear.value <= yearCurrent){
        yearText.innerText = yearInterested;

        if(!textErrorYear.classList.contains('error')){
            textErrorYear.classList.add('error');
            labelYear.classList.remove('color-error');
            yearErrorInput.classList.remove('year-error-input');
        } 
    }

    if(inputYear.value > yearCurrent){
        
        labelYear.classList.add('color-error');
        yearErrorInput.classList.add('year-error-input');

        if(textErrorYear.classList.contains('error')){
            textErrorYear.classList.remove('error');
        }   
    }
}

document.addEventListener('click', (e) => {
    let el = e.target;
    
    if(el.classList.contains("btn")){
        verificationYear(dateToday);
    }
});
