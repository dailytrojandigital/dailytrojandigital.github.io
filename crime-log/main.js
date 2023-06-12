// Reading the Excel File using the XLSX library
const url = "6-9-60-Day-Log.xlsx";
let req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

req.onload = function(e) {
    let data = new Uint8Array(req.response);
    let workbook = XLSX.read(data, {type: "array"});
    let sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
    let worksheet = workbook.Sheets[sheetName];
    let jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1}); // Convert the sheet to JSON

    jsonData.shift(); // Remove the header row

    // Filter out empty rows and rows containing "Date Reported"
    jsonData = jsonData.filter(row => {
        return row.length > 0 && !row.includes("Date Reported");
    });

    // Create the rows in the table
    jsonData.forEach((row) => {
        $("#tableBody").append(`<tr>
            <td>${row[0]}</td>
            <td>${row[4]}</td>
            <td>${row[5]}</td>
            <td>${row[7]}</td>
            <td>${row[11]}</td>
            <td>${row[15]}</td>
            <td>${row[19]}</td>
            <td>${row[26]}</td>
        </tr>`);
    });

    // Initialize DataTables
    $('#table').DataTable();
};

req.send();
