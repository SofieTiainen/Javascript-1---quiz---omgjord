let mainContainer = document.querySelector(".main-container");
let toggleBtn = document.querySelector(".toggle");

toggleBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("dark-mode");
})


let quizData = [
    {
        question: 'Vilken/vilka följande sporter härstammar från Finland?',
        answer: ['1. Stövelkastning', '1. Träskfotboll', '1. Basket', '1. Ridning']
    },
    {
        question: 'Vilka är Finlands officiella huvudspråk?',
        answer: ['2. Finska', '2. Svenska', '2. Estniska', '2. Ryska']
    },
    {
        question: 'Vad är Finlands nationalrätt?',
        answer: '3. Rågbröd'
    },
    {
        question: 'Hur stavar man till frukten kiwi på finska?',
        answer: '4. Kiivi'
    },
    {
        question: 'Hur säger man tack på finska?',
        answer: '5. Kiitos'
    },
    {
        question: 'Vad heter Finlands motsvarighet till systembolaget?',
        answer: '6. Alko'
    },
    {
        question: 'Den finska jultomen kan man träffa i staden Rovaniemi',
        answer: '7. sant'
    },
    {
        question: 'Det skiljer sig 1 timma mellan Sverige och Finland',
        answer: '8. sant'
    },
    {
        question: 'Finländare dricker mest kaffe i världen!',
        answer: '9. sant'
    },
    {
        question: 'Finland på finska heter "Routsi"!',
        answer: '10. falskt'
    }
];


let showResultBtn = document.querySelector('#showResult');
let result = document.querySelector('#result');
let endDiv = document.querySelector(".end-div");

let getResult = () => {
    let allCheckboxesInput = document.querySelectorAll("input[type='checkbox'][name='answer']:checked");
    let allRadiosInput = document.querySelectorAll("[type='radio']:checked");
    let totalPoints = 0;
    let maxPoint = 10;
    let inputValues = [];


    allCheckboxesInput.forEach((input) => {
        inputValues.push(input.value);
    });
    allRadiosInput.forEach((input) => {
        inputValues.push(input.value);
    })


    result.innerText = '';
    endDiv.innerText = '';

    /* Info för nedan i if-statement
    (object.answer[0]) = brun och frukt (rätt)
    (object.answer[1]) = svart och grönsaker (rätt)
    (object.answer[1, 2]) = rosa och stenar (fel)
    (object.answer[1, 3]) = grön och möbler (fel)*/

    quizData.forEach((object) => {
        let p = document.createElement('p')
        p.innerText = `Fråga: ${object.question}`
        if ((inputValues.includes(object.answer)) || (inputValues.includes(object.answer[0])) && (inputValues.includes(object.answer[1])) && (!inputValues.includes(object.answer[1, 2])) && (!inputValues.includes(object.answer[1, 3]))) {
            totalPoints++
            p.innerHTML += ` <strong>Du svarade<span style= "color: green"> rätt!</span</strong>`
        } else {
            p.innerHTML += ` <strong>Du svarade<span style= "color: red"> fel!</span</strong>`
        }
        result.append(p)
    })



    let p2 = document.createElement('p');
    p2.classList.add("points-and-btn");
    p2.innerText = `Du fick ${totalPoints}/10 poäng!`
    if (totalPoints < maxPoint * 0.5) {
        p2.style.color = 'red';
        p2.innerHTML += ` <strong>Underkänt</strong>`
    } else if (totalPoints > maxPoint * 0.75) {
        p2.style.color = 'green';
        p2.innerHTML += ` <strong>Mycket väl godkänt</strong>`
    } else {
        p2.style.color = 'orange';
        p2.innerHTML += ` <strong>Godkänt</strong>`
    }
    endDiv.append(p2)

    let refreshQuizBtn = document.createElement('button')
    refreshQuizBtn.classList.add("points-and-btn");
    refreshQuizBtn.innerText = `Gör testet igen`;
    endDiv.append(refreshQuizBtn)
    refreshQuizBtn.addEventListener('click', () => {
        location.reload();
    })

}


showResultBtn.addEventListener('click', () => {
    getResult();
})