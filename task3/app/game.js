let questionBlock = document.querySelector('p.question'), 
    positionQuestion = 0, 
    blockAnswers = document.querySelector('.wrapper__possible-answer'), 
    timerElem = document.querySelector('.timer-question'), 
    timerInterval = null,
    responseStatusElem = document.querySelector('.response-status'), 
    numberQuestion = document.querySelector('.number-question'), 
    allQuestions = document.querySelector('.all-questions'),
    wrongAnswers = 0, 
    rightAnswers = 0, 
    startButton = document.querySelector('.intro__content button'), 
    introElem = document.querySelector('.intro'), 
    gameElem = document.querySelector('.game'), 
    resultGame = document.querySelector('.result-game'), 
    resultWrongAnswer = document.querySelector('.wrong-ans span'), 
    resultRightAnswer = document.querySelector('.right-ans span'), 
    restartButton = document.querySelector('.restart-game'), 
    stopGameButton = document.querySelector('.stop_game');



const game = {
    start() {
        console.log('Вопрос под номером', positionQuestion)
        
        if(question[positionQuestion]) {
            numberQuestion.innerText = positionQuestion + 1;
            let allAnswers = this.switchingQuestions(question[positionQuestion]);
            blockAnswers.insertAdjacentHTML('afterBegin', allAnswers);
            blockAnswers.querySelectorAll('.possible-answer').forEach(elem => {
                elem.addEventListener('click', this.processingQuestion, false);
            })
        } else {
            this.stopGame();
        } 
    },
    stopGame() {
        gameElem.style.display = 'none';
        gameElem.style.display = 'none';
            resultGame.style.display = 'flex';
            resultWrongAnswer.innerText = wrongAnswers;
            resultRightAnswer.innerText = rightAnswers;
        blockAnswers.querySelectorAll('.possible-answer').forEach(elem => {
            elem.remove();
        });
    },
    timer() {
        --timerElem.innerHTML;
        console.log(timerElem.innerHTML)
        if(timerElem.innerHTML == 0) {
            clearInterval(timerInterval);
            timerElem.style.opacity = 0;
            timerInterval = null;
            timerElem.innerHTML = '3';
            responseStatusElem.innerHTML = '';
            numberQuestion.innerText = 0;
        }
    },
    init() {
        introElem.style.display = 'none';
        gameElem.style.display = 'block';
        resultGame.style.display = 'none';
        allQuestions.innerText = question.length;
        positionQuestion = 0;
        wrongAnswers =  0;
        rightAnswers = 0;
        game.start();
    }, 
    switchingQuestions(quest) {
        questionBlock.innerText = quest.quest; // Добавляем вопрос
        let elemAnswer = '';
        for(let key in quest.answer) {
            console.log(quest.answer[key]);
            elemAnswer += `
            <div class="possible-answer" data-answ-num="${key}"><span>${key}:</span> ${quest.answer[key][0]}</div>
            `;
        }
        return elemAnswer;
    }, 
    removeListener() {
        blockAnswers.querySelectorAll('.possible-answer').forEach(function(elem) {
            elem.removeEventListener('click', game.processingQuestion, false);
        })
    },
    processingQuestion(e) {
        console.log(e);
        if(question[positionQuestion].answer[e.target.getAttribute('data-answ-num')][1]) {
            console.log('Ответ верный');

            game.removeListener();

            e.target.classList.add('green');
            timerElem.style.opacity = 1;
            timerInterval = setInterval(game.timer, 1000);
            responseStatusElem.innerHTML = `<div class="right">Верно</div>`;
            rightAnswers++;
            setTimeout(function() {
                blockAnswers.querySelectorAll('.possible-answer').forEach(elem => {
                        elem.remove();
                    });
                    positionQuestion++;
                    game.start();
            }, 3000);
        } else {
            wrongAnswers++;
            responseStatusElem.innerHTML = `<div class="wrong">Неверно</div>`;
            console.log('Ответ неверный');
            e.target.classList.add('red');
        }
    }
    
}

startButton.addEventListener('click', game.init);
restartButton.addEventListener('click', game.init);
stopGameButton.addEventListener('click', game.stopGame);