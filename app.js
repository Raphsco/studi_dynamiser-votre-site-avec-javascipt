var scores, scoresTours, JoueurActif, playingGames;

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(playingGames) {
       
        var dice = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


       
        if (dice !== 1) {
            
            scoresTours += dice;
            document.querySelector('#current-' + JoueurActif).textContent = scoresTours;
        } else {
           
            nextPlayer();
        }
    }    
});