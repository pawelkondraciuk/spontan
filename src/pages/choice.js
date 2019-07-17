const Sortable = require('sortablejs');
const utils = require('../utils');

module.exports = {
    render: () => {
        const searchParams = new URLSearchParams(utils.getParams());
        const id = searchParams.get('id');
        const tournament = getTournament();

        function createCard(question) {
            const elHTML = ` 
            <div class="card">
                <div class="card-content">
                    ${question}
                </div>
            </div>`;
            const divEl = document.createElement('div');
            divEl.innerHTML = elHTML;
            return divEl
        }

        function renderQuestions(containerEl, list) {
            containerEl.innerHTML = '';
            for (const question of list) {
                const newCard = createCard(question);
                containerEl.appendChild(newCard);
            }
        }

        function selectPhase(phase) {
            const questions = tournament.selectedQuestions[phase];
            renderQuestions(elRight, questions);
            const tabBtn = document.querySelector(`[data-at="${phase}"]`);
            tabBtn.parentElement.classList.add('is-active');
            if (activePhase) {
                const oldTabBtn = document.querySelector(`[data-at="${activePhase}"]`);
                oldTabBtn.parentElement.classList.remove('is-active');
            }
            activePhase = phase;
        }

        function getTournament() {
            const tournaments = utils.read('rows');
            return tournaments.find(value => value.id === id);
        }

        function saveTournament() {
            // tutaj
            if (tournament.selectedQuestions.quarterFinals.length === 0 ||
                tournament.selectedQuestions.semiFinals.length === 0 ||
                tournament.selectedQuestions.final.length === 0) {
                window.alert("Nie wszystkie fazy turnieju zawierają pytania!");
            } else {
                const tournaments = utils.read('rows');
                const tournamentIdx = tournaments.findIndex(value => value.id === id);
                tournaments[tournamentIdx] = tournament;
                utils.save('rows', tournaments);
                window.location.href = `/#/pairs?id=${id}`;
            }
        }

        function renderLeftColumn() {
            const selectedQuestions = tournament.selectedQuestions;
            const {
                quarterFinals,
                semiFinals,
                final
            } = selectedQuestions;

            const filteredQ = tournament.questions
                .filter(value => !quarterFinals.includes(value))
                .filter(value => !semiFinals.includes(value))
                .filter(value => !final.includes(value));
            renderQuestions(elLeft, filteredQ)
        }
        const elLeft = document.querySelector('.left-column');
        const elRight = document.querySelector('.right-column');
        const tabButtons = document.querySelectorAll('.tabs a');
        let activePhase = null;

        const sortableLeft = Sortable.create(elLeft, {
            group: 'questions',
            animation: 150,
            // onUpdate: (e) => {
            //     const {
            //         newIndex,
            //         oldIndex
            //     } = e;
            //     questionsList[oldIndex] = questionsList.splice(newIndex, 1, questionsList[oldIndex])[0];
            // },
            onRemove: (e) => {
                const {
                    newIndex,
                    item
                } = e;
                const activePhaseQuestions = tournament.selectedQuestions[activePhase];
                const newQuestion = item.querySelector('.card-content').textContent.trim();
                activePhaseQuestions.splice(newIndex, 0, newQuestion);
                console.log(e)
            },

        });
        const sortableRight = Sortable.create(elRight, {
            group: 'questions',
            animation: 150,
            onUpdate: (e) => {
                const {
                    newIndex,
                    oldIndex
                } = e;
                const activePhaseQuestions = tournament.selectedQuestions[activePhase];
                activePhaseQuestions[oldIndex] = activePhaseQuestions.splice(newIndex, 1, activePhaseQuestions[oldIndex])[0];
            },
            onRemove: (e) => {
                const {
                    oldIndex,
                } = e;
                const activePhaseQuestions = tournament.selectedQuestions[activePhase];
                activePhaseQuestions.splice(oldIndex, 1)
            }
        });


        tournament.selectedQuestions = tournament.selectedQuestions || {
            quarterFinals: [],
            semiFinals: [],
            final: [],
        };

        renderLeftColumn();
        selectPhase('quarterFinals')

        for (const tabButton of tabButtons) {
            tabButton.addEventListener('click', (e) => {
                const {
                    at
                } = e.target.dataset;
                selectPhase(at)
            })
        }

        const saveBtn = document.querySelector('.button');
        saveBtn.addEventListener('click', saveTournament)

    }
}

// sprawdzić czy każda faza ma przynajmniej jedno pytanie