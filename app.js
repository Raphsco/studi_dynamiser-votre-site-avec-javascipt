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

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (playingGames) {
       
        scores[JoueurActif] += scoresTours;

        
        document.querySelector('#score-' + JoueurActif).textContent = scores[JoueurActif];

       
        if (scores[JoueurActif] >= 100) {
            document.querySelector('#name-' + JoueurActif).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + JoueurActif + '-panel').classList.add('winner');
            document.querySelector('.player-' + JoueurActif + '-panel').classList.remove('active');
            playingGames = false;
        } else {
            
            nextPlayer();
        }
    }
});
function nextPlayer() {
 
    JoueurActif === 0 ? JoueurActif = 1 : JoueurActif = 0;
    scoresTours = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');



    document.querySelector('.dice').style.display = 'none';
}
