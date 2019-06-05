const utils = require('../utils');

module.exports = {
    render: () => {
        const tableBody = document.querySelector('tbody');

        let rows = [];
        
        function removeTr(row) {
            const idx = rows.indexOf(row);
            rows.splice(idx, 1);
            const children = tableBody.children[idx];
            tableBody.removeChild(children);
           
            allRows = utils.read('rows');
            allRows.splice(idx, 1);
            utils.save('rows', rows);
        }
        function createTr(row) {
            const trHTML = `
                <th><a href="/#/choice?id=${row.id}">${row.name}</a> </th>
                 <td>${row.players.length}</td>
                <td>${row.status}</td>
                <button class="button is-danger">Usuń</button>
                <button class="button is-info">Edytuj</button>
                `

            const tableTr = document.createElement('tr');

            tableTr.innerHTML = trHTML;

            const buttonEl = tableTr.querySelector('button');

            function onButtonClick() {
             removeTr(row);
            }

            buttonEl.addEventListener('click', onButtonClick);

            return tableTr
        }

        function createTable(rows) {
            tableBody.innerHTML = '';
            for (const row of rows) {
                const newTr = createTr(row);
                tableBody.appendChild(newTr);
            }
        }

        function getId() {
            const last = rows[rows.length - 1];
            if (last) return last.id + 1;
            else return 1
        }

        function readFromLocalStorage() {
            rows = utils.read('rows') || [];
            createTable(rows);
        }

        readFromLocalStorage()
    },
}