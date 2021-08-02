'use strict'

var elQuestion = document.querySelector('.question');
var elAnswers = document.querySelector('.answers');

var QUEST_COUNT = 12;
var gQuests = createQuests();
var gCurrQuestIdx = 0;
var gCorrectAnswers = 0;
var isProccessing = false;


function initGame(elBtn) {
    renderQuest();
    elQuestion.style.visibility = 'visible';
    elBtn.style.visibility = 'hidden';
}

function resetGame() {
    gCurrQuestIdx = 0;
    gCorrectAnswers = 0;
    initGame();
}

function checkAnswer(elOpt) {
    if (!isProccessing) {
        isProccessing = true;
        if (+(elOpt.getAttribute('data-idx')) === gQuests[gCurrQuestIdx].correctOptIdx) {
            elOpt.style.backgroundColor = '#42b4a5';
            elOpt.style.color = '#fff';
            gCorrectAnswers++;
            if (gCorrectAnswers === gQuests.length) {
                var elBtnContainer = document.querySelector('.button-container');
                setTimeout(function () {
                    alert('You won!!!');
                    elQuestion.innerHTML = '<p></p><img src="" alt="" />'
                    elAnswers.innerHTML = ''
                    elBtnContainer.innerHTML = '<button onclick="resetGame()">Play Again</button>'
                }, 500);
            } else {
                gCurrQuestIdx++;
                setTimeout(function () {
                    renderQuest();
                }, 1000)
            }
        } else {
            isProccessing = false;
            elOpt.classList.add('clicked');
            // elOpt.style.backgroundColor = '#e54d4d';
            // elOpt.style.color = '#fff';
            setTimeout(function () {
                elOpt.classList.remove('clicked');
                // elOpt.style.backgroundColor = '';
                // elOpt.style.color = '#42b4a5';
            }, 700)
        }
    }
}

function renderQuest() {
    var elImg = document.querySelector('img');
    var elQuest = document.querySelector('.question p');
    elQuest.innerText = `${gCurrQuestIdx + 1}/12`
    elImg.src = `img/${gCurrQuestIdx + 1}.png`;
    var strHTML = '';
    for (var i = 0; i < 4; i++) {
        strHTML += `<div class="opt" data-idx="${i}" onclick="checkAnswer(this)">${gQuests[gCurrQuestIdx].opt[i]}</div>`;
    }
    elAnswers.innerHTML = strHTML;
    isProccessing = false;
}

function createQuests() {
    var quests = [];
    for (var i = 0; i < QUEST_COUNT; i++) {
        quests.push({
            id: i + 1,
            opt: [],
            correctOptIdx: 0
        });
    }

    quests[0].opt = ['Verizon', 'Shazam', 'Amazon', 'Citizen'];
    quests[0].correctOptIdx = 2;

    quests[1].opt = ['Samsung', 'Nasa', 'Roblox', 'Android'];
    quests[1].correctOptIdx = 3;

    quests[2].opt = ['Burger King', 'Mcdonalds', 'Burgerunch', 'In n\' Out'];
    quests[2].correctOptIdx = 0;

    quests[3].opt = ['Honda', 'BMW', 'Skoda', 'Hyundai'];
    quests[3].correctOptIdx = 3;

    quests[4].opt = ['Diesel', 'Levi\'s', 'Avis', 'Converse'];
    quests[4].correctOptIdx = 1;

    quests[5].opt = ['Mastercard', 'Visa', 'Bitcoin', 'Coin Master'];
    quests[5].correctOptIdx = 0;

    quests[6].opt = ['Narcos', 'Nvidia', 'Netflix', 'Nokia'];
    quests[6].correctOptIdx = 2;

    quests[7].opt = ['Pinterest', 'Purina', 'Photoshop', 'Playstation'];
    quests[7].correctOptIdx = 3;

    quests[8].opt = ['Dodge', 'Red Robin', 'Red Bull', 'Chicago Bulls'];
    quests[8].correctOptIdx = 2;

    quests[9].opt = ['Seat', 'Suzuki', 'Subaru', 'Skoda'];
    quests[9].correctOptIdx = 0;

    quests[10].opt = ['Starkist', 'Alpinestars', 'Star Wars', 'Starbucks'];
    quests[10].correctOptIdx = 3;

    quests[11].opt = ['Angry Birds', 'Bird', 'Twitter', 'Twitch'];
    quests[11].correctOptIdx = 2;
    return quests;
}