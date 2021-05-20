document.addEventListener("DOMContentLoaded", function(event) {

    const choices = ['rock', 'paper', 'scissors'];
    let playerschoice = choices[0];

    function startMatch() {
        document.getElementById('btnNewMatch').style.visibility = 'hidden';
        document.getElementById('matchResult').style.visibility = 'hidden';
        document.getElementById('winningmessage').style.visibility = 'hidden';
        let choiceButtons = document.getElementsByClassName('choiceButton');
        for (let i = 0; i < choiceButtons.length; i++) {
            choiceButtons[i].style.visibility = 'visible';
        }
        document.getElementById('timer').innerHTML = 4;
        countdown();
    }

    function countdown() {
        document.getElementById('timer').style.visibility = 'visible';
        let timeLeft = document.getElementById('timer').innerHTML;
        if (timeLeft > 1) {
            document.getElementById('timer').innerHTML = timeLeft - 1;
            setTimeout(countdown, 1000);
        }
        else {
            endMatch();
        }
    }

    function endMatch() {
        playerChooses(playerschoice);
        document.getElementById('btnNewMatch').style.visibility = 'visible';
        // let choiceButtons = document.getElementsByClassName('choiceButton');
        // for (let i = 0; i < choiceButtons.length; i++) {
        //     choiceButtons[i].style.visibility = 'hidden';
        // }
        document.getElementById('choiceButtonRock').style.visibility = 'hidden';
        document.getElementById('choiceButtonPaper').style.visibility = 'hidden';
        document.getElementById('choiceButtonScissors').style.visibility = 'hidden';

        document.getElementById('timer').style.visibility = 'hidden';
        document.getElementById('matchResult').style.visibility = 'visible';
        document.getElementById('winningmessage').style.visibility = 'visible';
    }

    function playerChooses(playerschoice) {
        document.getElementById('playerschoice').innerHTML = playerschoice;

        document.getElementById('playerschoiceImg').src = 'img/' + playerschoice + '.png';
        // console.log('playerschoice ' + playerschoice);
        const random = Math.floor(Math.random() * choices.length);
        // console.log(random);
        const computerschoice = choices[random];
        // console.log('computerschoice '+ computerschoice);
        document.getElementById('computerschoice').innerHTML = computerschoice;
        document.getElementById('computerschoiceImg').src = 'img/' + computerschoice + '.png';

        const winningmessage = calculateWinner(playerschoice, computerschoice);
        document.getElementById('winningmessage').innerHTML = winningmessage;
    }

    function calculateWinner(playerschoice, computerschoice) {
        if (playerschoice == choices[0]) {
            if (computerschoice == choices[0]) return 'It\'s a tie!';
            else if (computerschoice == choices[1]) return 'You lose.';
            else return 'You win!';
        }
        else if (playerschoice == choices[1]) {
            if (computerschoice == choices[0]) return 'You win!';
            else if (computerschoice == choices[1]) return 'It\'s a tie!';
            else return 'You lose.';
        }
        else if (playerschoice == choices[2]) {
            if (computerschoice == choices[0]) return 'You lose.';
            else if (computerschoice == choices[1]) return 'You win!';
            else return 'It\'s a tie!';
        }
        return 'Not yet implemented.';
    }

    document.getElementById('btnNewMatch').addEventListener('click', function() {
        startMatch();
    });
    document.getElementById('choiceButtonRock').addEventListener("mouseover", function() {
        playerschoice = choices[0];
    });
    document.getElementById('choiceButtonPaper').addEventListener("mouseover", function() {
        playerschoice = choices[1];
    });
    document.getElementById('choiceButtonScissors').addEventListener("mouseover", function() {
        playerschoice = choices[2];
    });

});