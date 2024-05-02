var num = 1;
var person1;
var person2;
var scorePlayer1 = 0;
var scorePlayer2 = 0;

function startNewRound() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.value = '';
        cell.disabled = false;
        cell.style.color = 'black';
    });

    document.getElementById('print').innerHTML = '';

    var inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.disabled = false;
    });
}

function startGame() {
    p1 = document.getElementById("player1");
    p2 = document.getElementById("player2");
    sg = document.getElementById("startbtn");
    pn = document.getElementById("playernames");
    person1 = p1.value;
    person2 = p2.value;
    p1.style.display = "none";
    p2.style.display = "none";
    sg.style.display = "none";
    pn.innerHTML = `Player-X: ${person1}  Player-0: ${person2}`;
    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.disabled = false;
    });
}

function Reset() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    num = 1;
    pn.innerHTML = `Player-X (${person1}): ${scorePlayer1} points<br>Player-0 (${person2}): ${scorePlayer2} points`;

    var cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.value = '';
        cell.disabled = false;
        cell.style.color = 'black';
    });

    var inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.disabled = false;
    });

    print = document.getElementById("print");
    print.style.display = "none";
}

function updateVal(b) {
    ele = document.getElementById(b);
    if (num % 2 == 0) {
        ele.value = "0";
    } else {
        ele.value = "X";
        ele.disabled = true;
    }
    num += 1;
}
function check() {
    const a1 = document.getElementById('a1').value;
    const a2 = document.getElementById('a2').value;
    const a3 = document.getElementById('a3').value;
    const b1 = document.getElementById('b1').value;
    const b2 = document.getElementById('b2').value;
    const b3 = document.getElementById('b3').value;
    const c1 = document.getElementById('c1').value;
    const c2 = document.getElementById('c2').value;
    const c3 = document.getElementById('c3').value;

    const a1btn = document.getElementById('a1');
    const a2btn = document.getElementById('a2');
    const a3btn = document.getElementById('a3');
    const b1btn = document.getElementById('b1');
    const b2btn = document.getElementById('b2');
    const b3btn = document.getElementById('b3');
    const c1btn = document.getElementById('c1');
    const c2btn = document.getElementById('c2');
    const c3btn = document.getElementById('c3');

    if ((a1 == 'X') && (a2 == 'X') && (a3 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a1btn.style.color = "red";
        a2btn.style.color = "red";
        a3btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((a1 == 'X') && (b1 == 'X') && (c1 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a2btn.disabled = true;
        a3btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a1btn.style.color = "red";
        b1btn.style.color = "red";
        c1btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((c1 == 'X') && (c2 == 'X') && (c3 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;

        c1btn.style.color = "red";
        c2btn.style.color = "red";
        c3btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((a3 == 'X') && (b3 == 'X') && (c3 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a1btn.disabled = true;
        a2btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;

        a3btn.style.color = "red";
        b3btn.style.color = "red";
        c3btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((a1 == 'X') && (b2 == 'X') && (c3 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a2btn.disabled = true;
        a3btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;

        a1btn.style.color = "red";
        b2btn.style.color = "red";
        c3btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((a3 == 'X') && (b2 == 'X') && (c1 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a1btn.disabled = true;
        a2btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a3btn.style.color = "red";
        b2btn.style.color = "red";
        c1btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((a2 == 'X') && (b2 == 'X') && (c2 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a1btn.disabled = true;
        a3btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c3btn.disabled = true;

        a2btn.style.color = "red";
        b2btn.style.color = "red";
        c2btn.style.color = "red";
        scorePlayer1++;
    }
    else if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        document.getElementById('print').innerHTML = `${person1} won!`;
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
        scorePlayer1++;
    }

    else if ((a1 == '0') && (a2 == '0') && (a3 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a1btn.style.color = "red";
        a2btn.style.color = "red";
        a3btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((a1 == '0') && (b1 == '0') && (c1 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        b2btn.disabled = true;
        b3btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a1btn.style.color = "red";
        b1btn.style.color = "red";
        c1btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((c1 == '0') && (c2 == '0') && (c3 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;

        c1btn.style.color = "red";
        c2btn.style.color = "red";
        c3btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((a3 == '0') && (b3 == '0') && (c3 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        b1btn.disabled = true;
        b2btn.disabled = true;
        a1btn.disabled = true;
        a2btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;

        b3btn.style.color = "red";
        a3btn.style.color = "red";
        c3btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((a1 == '0') && (b2 == '0') && (c3 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        a2btn.disabled = true;
        a3btn.disabled = true;
        b1btn.disabled = true;
        b3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;

        a1btn.style.color = "red";
        b2btn.style.color = "red";
        c3btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((a3 == '0') && (b2 == '0') && (c1 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        b1btn.disabled = true;
        b3btn.disabled = true;
        a1btn.disabled = true;
        a2btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        a3btn.style.color = "red";
        b2btn.style.color = "red";
        c1btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((a2 == '0') && (b2 == '0') && (c2 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        b1btn.disabled = true;
        b3btn.disabled = true;
        a1btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c3btn.disabled = true;

        b2btn.style.color = "red";
        a2btn.style.color = "red";
        c2btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
        document.getElementById('print').innerHTML = `${person2} won!`;
        a1btn.disabled = true;
        a2btn.disabled = true;
        a3btn.disabled = true;
        c1btn.disabled = true;
        c2btn.disabled = true;
        c3btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
        scorePlayer2++;
    }
    else if ((a1 == 'X' || a1 == '0') && (a2 == 'X'
        || a2 == '0') && (a3 == 'X' || a3 == '0') &&
        (b1 == 'X' || b1 == '0') && (b2 == 'X' ||
            b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (c1 == 'X' || c1 == '0') && (c2 == 'X' ||
            c2 == '0') && (c3 == 'X' || c3 == '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
        num = 0;
    }
    else {
        if (num % 2 == 1) {
            document.getElementById('print').innerHTML = `${person1}'s turn`;
        }
        else {
            document.getElementById('print').innerHTML = `${person2}'s turn`;
        }
    }
    pn.innerHTML = `Player-X (${person1}): ${scorePlayer1} points<br>Player-0 (${person2}): ${scorePlayer2} points`;
}