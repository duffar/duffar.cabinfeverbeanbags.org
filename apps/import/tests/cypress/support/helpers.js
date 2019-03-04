

function readHeaders(tableElem, headerOpts) {
    // console.log('readingHeaderElements');
    const headers = [];
    const headerElems = Cypress.$(tableElem).find(headerOpts.mainSelector);
    for (let c = 0; c < headerElems.length; c += 1) {
        const header = Cypress.$(headerElems[c]).find(headerOpts.endpointSelector).attr(headerOpts.attrName || 'id') || `$${c}`;
        headers.push(header);
    }
    // console.log(' - headers: ', headers);
    return headers;
}

function readRowElems(tableElem, rowOpts) {
    // console.log('readingRowElements');
    const rowElems = Cypress.$(tableElem).find(rowOpts.mainSelector);
    // console.log(' rowElems:', rowElems);
    return rowElems;
}

function parseRow(rowElem, headers, rowOpts) {
    // console.log('parsingRow');
    const row = {};
    const rowColumnElems = Cypress.$(rowElem).find(rowOpts.columnSelector);
    for (let c = 0; c < rowColumnElems.length; c += 1) {
        const columnElem = rowColumnElems[c];
        row[headers[c]] = columnElem.textContent;
    }
    // console.log('resulting row:', JSON.stringify(row, null, '  '));
    return row;
}

export function parseTable(parseOpts) {
    // console.log('parsingTable');
    const table = Cypress.$(parseOpts.tableSelector);
    const headers = readHeaders(table, parseOpts.headerOpts);
    const rowElements = readRowElems(table, parseOpts.rowOpts);
    const rows = [];
    for (let i = 0; i < rowElements.length; i += 1) {
        const row = parseRow(rowElements[i], headers, parseOpts.rowOpts);
        rows.push(row);
    }
    // console.log('loaded rows: ', JSON.stringify(rows, null, '  '));
    return rows;
}

// export function parseAuctionTable() {
//     const tableParseOpts = {
//         tableSelector: 'div#products', // primary selector of the table
//         headerOpts: {
//             mainSelector: '.rt-resizable-header-content', // primary selector of header columns
//             endpointSelector: 'span', // child selector where column name can be found
//             attrName: 'id' // attribute holding the column name
//         },
//         rowOpts: {
//             mainSelector: 'div.item div.row', // primary selector of table rows
//             columnSelector: '.rt-td' // primary selector of columns in a row
//         },
//     };
//     return parseTable(tableParseOpts);
// }

export function parseDeviceListTable() {
    const tableParseOpts = {
        tableSelector: '.js-device-list-table',           // primary selector of the table
        headerOpts: {
            mainSelector: '.rt-resizable-header-content', // primary selector of header columns
            endpointSelector: 'span',                     // child selector where column name can be found
            attrName: 'id'                                // attribute holding the column name
        },
        rowOpts: {
            mainSelector: '.rt-tbody .rt-tr-group',       // primary selector of table rows
            columnSelector: '.rt-td'                      // primary selector of columns in a row
        },
    };
    return parseTable(tableParseOpts);
}

export default {
    parseTable,
    parseDeviceListTable
};
