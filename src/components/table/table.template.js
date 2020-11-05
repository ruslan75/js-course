const CODES = {
    A: 65,
    Z: 90
}

function toColumn(col) {
    return `
    <div class="column">${col}</div>
    `
}

function createRow(content, cell) {
    return `
    <div class="row">
    <div class="row-info"></div>
        <div class="row-data">${content}</div>
    </div>${cell}   
    `
}

function toCell(cell, index) {
        return `
        <div class="cell" contenteditable="">
        ${cell = CODES.Z - CODES.A ? cell : ''}${index + 1}</div>
        `
}

function tuChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function creatTable(rowsCount = 10) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const newCells = []
    let newRows = []

    const cols = new Array(colsCount)
        .fill('')
        .map(tuChar)
        .map(toColumn)
        .join('')

    const cells = new Array(colsCount)
        .fill('')
        .map(tuChar)
        .map(toCell)
        .join('')
        for (let i = 1; i < rowsCount; i++) {
             newCells.push(cells)
            }

                newRows = newCells.map((elem, rowsCount) => {
                    return `
                    <div class="row">
                        <div class="row-info">${rowsCount + 1}</div>
                    ${elem}</div>
                    `
                }).join(' ')

    rows.push(createRow(cols, newRows))
    return rows.join('')
}