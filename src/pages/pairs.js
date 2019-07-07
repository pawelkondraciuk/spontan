const utils = require('../utils');

module.exports = {
    render: () => {
        const searchParams = new URLSearchParams(utils.getParams());
        const id = searchParams.get('id');
        const tournament = getTournament();

        function createCard(player) {
            const elHTML = ` 
            <div class="card">
                <div class="card-content">
                    ${player.name}
                </div>
            </div>`;
            const divEl = document.createElement('div');
            divEl.innerHTML = elHTML;
            return divEl
        }

        function renderPlayers(containerEl, list) {
            containerEl.innerHTML = '';
            for (const player of list) {
                const newCard = createCard(player);
                containerEl.appendChild(newCard);
            }
        }

        function renderPairs(tournament) {
            if (!tournament.pairs) {
                return;
            }
            const [playersA, playersB] = tournament.pairs;
            renderPlayers(playersAEl, playersA);
            renderPlayers(playersBEl, playersB);
        }

        function getTournament() {
            const tournaments = utils.read('rows');
            return tournaments.find(value => value.id === id);
        }

        function saveTournament(tournament) {
            const tournaments = utils.read('rows');
            const tournamentIndex = tournaments.findIndex(value => value.id === id);
            tournaments[tournamentIndex] = tournament;
            utils.save('rows', tournaments);
        }


        const players = tournament.players;


        const playersAEl = document.querySelector('#players-a');
        const playersBEl = document.querySelector('#players-b');
        const drawBtn = document.querySelector('.button');

        renderPairs(tournament);

        function drawPlayers(players) {
            const array = [...players];
            const arrayA = [];
            const arrayB = [];
            while (array.length > 0) {
                const randomPlayerA = pickRandomElementFromList(array);
                const randomPlayerB = pickRandomElementFromList(array);
                arrayA.push(randomPlayerA);
                arrayB.push(randomPlayerB);
            }
            return [arrayA, arrayB]
        }

        function pickRandomElementFromList(array) {
            let idx = Math.round(Math.random() * (array.length - 1));
            return array.splice(idx, 1)[0];
        }



        function onButtonClick() {
            tournament.pairs = drawPlayers(players);
            renderPairs(tournament);
            saveTournament(tournament);
        }

        drawBtn.addEventListener('click', onButtonClick)






    }
}