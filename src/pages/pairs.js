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

        function getTournament() {
            const tournaments = utils.read('rows');
            return tournaments.find(value => value.id === id);
        }

        const playersContainer = document.querySelector('#list');
        const players = tournament.players

        renderPlayers(playersContainer, players)


        const drawBtn = document.querySelector('.button')
        let drawArray = []

        function draw() {
            let array = players;
            const pairs = document.querySelector('#pairs');

            while (array.length > 0) {
                let idx = Math.round(Math.random() * (array.length - 2));
                const pair = array.splice(idx, 2);
                drawArray.splice(1, 0, pair);
                const elHTML = ` 
                <div class="card">
                    <div class="card-content">
                        ${pair[0].name} vs ${pair[1].name} 
                    </div>
                </div>`;
                const divEl = document.createElement('div');
                divEl.innerHTML = elHTML;
                pairs.appendChild(divEl)
            }
            console.log(drawArray)
        }

        drawBtn.addEventListener('click', draw)





    }
}