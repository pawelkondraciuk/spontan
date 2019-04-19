module.exports = {
    render: () => {
        const inputField = document.querySelector('#question');
        const addBtn = document.querySelector('#add');
        const questionsEl = document.querySelector('#questions');
        const submitBtn = document.querySelector('#submit');

        const questions = JSON.parse(localStorage.getItem('questions')) || [];

        function createInputEl() {
            const inputHTML = `<input class="input is-large" type="text" placeholder="Nazwa kategorii">`;
            const inputEl = document.createElement('div');
            inputEl.classList.add('control');
            inputEl.innerHTML = inputHTML;
            return inputEl
        }

        function addInputEl() {
            const newInput = createInputEl();
            inputField.appendChild(newInput);
        }

        function removeQuestion(question) {
            const idx = questions.indexOf(question);
            questions.splice(idx, 1);
            const children = questionsEl.children[idx];
            questionsEl.removeChild(children);
        }

        function createField(question) {
            const fieldHTML = `
            <div class="control is-expanded">
              <h2 class="subtitle is-3">${question}</h2>
            </div>
            <div class="control">
              <button class="button is-danger is-large">Usuń</button>
            </div>
          `;

            const fieldEl = document.createElement('div');
            fieldEl.classList.add('field', 'is-grouped');
            fieldEl.innerHTML = fieldHTML;


            const buttonEl = fieldEl.querySelector('button');

            function onButtonClick() {
                removeQuestion(question);
            }

            buttonEl.addEventListener('click', onButtonClick);

            return fieldEl;

        }

        function addNewQuestion() {

            const question = inputField.value;
            const questionExists = questions.indexOf(question) >= 0;

            if (!question || questionExists) {
                return
            };

            questions.push(question);

            const fieldEl = createField(question);
            questionsEl.appendChild(fieldEl);
            inputField.value = '';
            inputField.focus();
        }

        addBtn.addEventListener('click', () => {
            addNewQuestion()

        })
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addNewQuestion()
            }
        })

        submitBtn.addEventListener('click', () => {
            localStorage.setItem('questions', JSON.stringify(questions));
            window.location.href = '/#/list';
        })
        for (const question of questions) {
            const fieldEl = createField(question);
            questionsEl.appendChild(fieldEl);
        }

    }


}