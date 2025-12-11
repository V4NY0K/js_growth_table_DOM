'use strict';

const table = document.querySelector('tbody');
const buttonAppendRow = document.querySelector('.append-row');
const buttonAppendCol = document.querySelector('.append-column');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonRemoveCol = document.querySelector('.remove-column');

buttonAppendRow.addEventListener('click', () => {
  if (countRows >= 10) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < countCols; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  table.appendChild(tr);

  updateCounts();
  updateButtons();
});

buttonAppendCol.addEventListener('click', () => {
  if (countCols >= 10) {
    return;
  }

  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => row.appendChild(document.createElement('td')));

  updateCounts();
  updateButtons();
});

buttonRemoveRow.addEventListener('click', () => {
  if (countRows <= 2) {
    return;
  }

  const rows = table.querySelectorAll('tr');

  if (countRows > 2) {
    rows[rows.length - 1].remove();
    updateCounts();
  }

  updateButtons();
});

buttonRemoveCol.addEventListener('click', () => {
  if (countCols <= 2) {
    return;
  }

  const rows = table.querySelectorAll('tr');

  for (const row of rows) {
    const cells = row.querySelectorAll('td, th');

    if (cells.length > 0) {
      cells[cells.length - 1].remove();
    }
  }

  updateCounts();
  updateButtons();
});

function updateButtons() {
  if (countRows >= 10) {
    buttonAppendRow.disabled = true;
  } else {
    buttonAppendRow.disabled = false;
  }

  if (countRows <= 2) {
    buttonRemoveRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
  }

  if (countCols >= 10) {
    buttonAppendCol.disabled = true;
  } else {
    buttonAppendCol.disabled = false;
  }

  if (countCols <= 2) {
    buttonRemoveCol.disabled = true;
  } else {
    buttonRemoveCol.disabled = false;
  }
}

let countRows = table.querySelectorAll('tr').length;
let countCols;

function updateCounts() {
  countRows = table.querySelectorAll('tr').length;

  const dataRow = table.querySelector('tr td')?.closest('tr');

  if (dataRow) {
    countCols = dataRow.querySelectorAll('td').length;
  } else {
    countCols = table.querySelectorAll('th').length;
  }
}
