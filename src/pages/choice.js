const Sortable = require('sortablejs');
module.exports = {
    render: () => {
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
            const questions = selectedQuestions[phase];
            renderQuestions(elRight, questions);
            const tabBtn = document.querySelector(`[data-at="${phase}"]`);
            tabBtn.parentElement.classList.add('is-active');
            if (activePhase) {
                const oldTabBtn = document.querySelector(`[data-at="${activePhase}"]`);
                oldTabBtn.parentElement.classList.remove('is-active');
            }
            activePhase = phase;
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
                const activePhaseQuestions = selectedQuestions[activePhase];
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
                const activePhaseQuestions = selectedQuestions[activePhase];
                activePhaseQuestions[oldIndex] = activePhaseQuestions.splice(newIndex, 1, activePhaseQuestions[oldIndex])[0];
            },
            onRemove: (e) => {
                const {
                    oldIndex,
                } = e;
                const activePhaseQuestions = selectedQuestions[activePhase];
                activePhaseQuestions.splice(oldIndex, 1)
            }
        });

        const questionsList = [
            'pytanie1',
            'pytanie2',
            'pytanie3',
            'pytanie4',
            'pytanie5'
        ];

        const selectedQuestions = {
            qualifications: [
                'a',
                'b',
                'c',
            ],
            quarterFinals: [
                'sad'
            ],
            semiFinals: [
                'fs'
            ],
            final: [],
        }

        renderQuestions(elLeft, questionsList);
        selectPhase('qualifications')

        for (const tabButton of tabButtons) {
            tabButton.addEventListener('click', (e) => {
                const {
                    at
                } = e.target.dataset;
                selectPhase(at)
            })
        }

    }
}