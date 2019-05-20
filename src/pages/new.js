module.exports = {
  render: (element) => {
    const field = element.querySelector('#field');
    const inputPlayer = element.querySelector('#player');
    const inputTournament = element.querySelector('#tournament-name');
    const questionsField = element.querySelector('#questions');
    const addBtn = element.querySelector('#add');
    const submitBtn = element.querySelector('#submit');

    const players = [];

    function getTournamentName() {
      return inputTournament.value;
    }



    function addPlayer(name) {
      const player = {
        name
      };
      const newFieldEl = createField(player);

      players.push(player);
      field.appendChild(newFieldEl);
    }

    function removePlayer(player) {
      const idx = players.indexOf(player);
      players.splice(idx, 1);
      const children = field.children[idx];
      field.removeChild(children);
    }

    function createField(player) {
      const fieldHTML = `
      <div class="control is-expanded">
        <h2 class="subtitle is-3">${player.name}</h2>
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
        removePlayer(player);
      }

      buttonEl.addEventListener('click', onButtonClick);

      return fieldEl;

    }

    function getPlayerName() {
      return inputPlayer.value
    }

    function onAddButtonClick() {
      if (!getPlayerName()) {
        return;
      }
      addPlayer(getPlayerName());
      inputPlayer.value = '';
      inputPlayer.focus();
    }

    inputPlayer.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        onAddButtonClick()
      }
    })

    addBtn.addEventListener('click', onAddButtonClick);

    function saveToLocalStorage() {
      const rows = JSON.parse(localStorage.getItem('rows')) || [];
      rows.push({
        id: 1,
        name: getTournamentName(),
        players: players,
        status: 'w trakcie'
      });
      localStorage.setItem('rows', JSON.stringify(rows));

    }

    submitBtn.addEventListener('click', saveToLocalStorage);


    function createCheckbox(question) {
      const checkboxHTML = `
      <label class="checkbox">
       <input type="checkbox">
       ${question}
      </label>`;

      const fieldEl = document.createElement('div');
      fieldEl.innerHTML = checkboxHTML;
      return fieldEl
    }

    function addCheckbox(question) {
      const fieldEl = createCheckbox(question);
      questionsField.appendChild(fieldEl);
    }

    function readFromLocalStorage() {
      const questions = JSON.parse(localStorage.getItem('questions')) || [];
      questions.forEach(question => addCheckbox(question));
    }
    readFromLocalStorage()
  },
}