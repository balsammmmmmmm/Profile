const game = () => {
    let sPlayer = 0;
    let sCom = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.play');
        const playDiv = document.querySelector('.play-button');
        const optionsBtn = document.querySelector('.options');

        playBtn.addEventListener('click', () => {
            playDiv.classList.remove('fadeIn');
            playDiv.classList.add('fadeOut');
            optionsBtn.classList.add('fadeIn');

        });
    };

    const gameAction = () => {
        const options = document.querySelectorAll('.options button');

        //computer choice
        const comOptions = ['Rock', 'Paper', 'Scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                const comNumber = Math.floor(Math.random() * 3);
                const comChoice = comOptions[comNumber];
                console.log(comChoice);
                const playerChoice = this.textContent;
                updateTable(playerChoice, comChoice);
                compareChoiceOptions(playerChoice, comChoice);
            });
        });
    };
    const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd() {
                node.classList.remove(`${prefix}animated`, animationName);
                node.removeEventListener('animationend', handleAnimationEnd);

                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd);
        });
    const updateScore = () => {
        const comScore = document.querySelector('.score-c p');
        const playerScore = document.querySelector('.score-p p');
        comScore.textContent = sCom;
        playerScore.textContent = sPlayer;
        }
    const updateTable = (playerChoice, comChoice) => {
        const comTable = document.querySelector('.action-c p');
        const playerTable = document.querySelector('.action-p p');
        if (playerChoice === comChoice) {
            playerTable.textContent = 'Draw';
            comTable.textContent = 'Draw';
        } else {
            playerTable.textContent = playerChoice;
            comTable.textContent = comChoice;
        }
    }
    const winP = () => {
        const winnerIs = document.querySelector('.intro h1');
        winnerIs.textContent = 'Player Win';
        animateCSS('.score-p' , 'shakeY')
    }
    const winC = () => {
        const winnerIs = document.querySelector('.intro h1');
        winnerIs.textContent = 'Computer Win';
        animateCSS('.score-c' , 'shakeY')
    }
    const compareChoiceOptions = (playerChoice, comChoice) => {
        if (playerChoice === 'Rock') {
            if (comChoice === 'Paper') {
                sCom++;
                winC();
                updateScore();
                return 'Computer';
            } else if (comChoice === 'Scissors') {
                sPlayer++
                winP();
                updateScore();
                return 'Player';
            };
        };
        if (playerChoice === 'Paper') {
            if (comChoice === 'Rock') {
                sPlayer++;
                winP();
                updateScore();
                return 'Player';
            } else if (comChoice === 'Scissors') {
                sCom++;
                winC();
                updateScore();
                return 'Computer';
            };
        };
        if (playerChoice === 'Scissors') {
            if (comChoice === 'Rock') {
                sCom++;
                winC();
                updateScore();
                return 'Computer';
            } else if (comChoice === 'Paper') {
                sPlayer++;
                winP();
                updateScore();
                return 'Player';
            };
        };
    };
    //Вызов всех внутренных функции.
    startGame();
    gameAction();
};

//Вызов главной функции.

game();