module.exports = {
    render: () => {
        const inputField = document.querySelector('#question');

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

        function addInputList() {
            const questions = JSON.parse(localStorage.getItem('questions'));
            for (let i = 0; i < questions; i++) {
                addInputEl()
            }
        }

        addInputList()
    }
}