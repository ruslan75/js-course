const CODES = {
    A: 65,
    Z: 90
}


function toColumn(col, index) {
    return `
      <div class="column" data-type="resizable" data-col="${index}">
        ${col}
        <div class="col-resize" data-resize="col"></div>
      </div>
    `
  }

  function createRow(index, content) {
    const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
      <div class="row" data-type="resizable">
        <div class="row-info">
          ${index ? index : ''}
          ${resize}
        </div>
        <div class="row-data">${content}</div>
      </div>
    `
  }

function toCell(row) {
    return function(_, index) {
        return `
        <div class="cell" data-col="${index}" data-id="${row}:${index}" data-type="cell" contenteditable="true"></div>
        `
    }
}

function tuChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function creatTable(rowsCount = 10) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(tuChar)
        .map(toColumn)
        .join('')

        rows.push(createRow(null, cols))

        for (let row = 0; row < rowsCount; row++) {
            const cells = new Array(colsCount)
                .fill('')
                .map(toCell(row))
                .join('')

            rows.push(createRow(row + 1, cells))
          }

    return rows.join('')
}