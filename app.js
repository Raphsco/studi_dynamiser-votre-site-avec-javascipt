var scores, scoresTours, JoueurActif, playingGames;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(playingGames) {
       
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');