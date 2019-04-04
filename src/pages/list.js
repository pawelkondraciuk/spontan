module.exports = {
    render: () => {
        const tableBody = document.querySelector('tbody');

        let rows = [];

        function createTr(row) {
            const tableTr = document.createElement('tr');
            const trId = document.createElement('th');
            const trName = document.createElement('td');
            const trPlayer = document.createElement('td');
            const trStatus = document.createElement('td');

            trId.textContent = row.id;
            trName.textContent = row.name;
            trPlayer.textContent = row.players.length;
            trStatus.innerHTML = row.status;

            tableTr.appendChild(trId);
            tableTr.appendChild(trName);
            tableTr.appendChild(trPlayer);
            tableTr.appendChild(trStatus);

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
            rows = JSON.parse(localStorage.getItem('rows')) || [];
            createTable(rows);
        }

        readFromLocalStorage()
    },
}