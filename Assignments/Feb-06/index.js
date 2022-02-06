var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Title"] = document.getElementById("Title").value;
    formData["Description"] = document.getElementById("Description").value;
    formData["Text"] = document.getElementById("Text").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("Blogs").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Title;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Description;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Text;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Text").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Title;
    selectedRow.cells[1].innerHTML = formData.Description;
    selectedRow.cells[2].innerHTML = formData.Text;
}


function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('Blogs').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("Title").value = '';
    document.getElementById("Description").value = '';
    document.getElementById("Text").value = '';
    selectedRow = null;
}