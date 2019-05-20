const utils = require('../utils');

module.exports = {
    render: () => {
        const tableBody = document.querySelector('tbody');

        let rows = [];

        function createTr(row) {
const trHTML = `
    <th>
        <a href="/#/choice?id=${row.id}">${row.name}</a>
    </th>
    <td>${row.players.length}</td>
    <td>${row.status}</td>
`

            const tableTr = document.createElement('tr');

            tableTr.innerHTML = trHTML;
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