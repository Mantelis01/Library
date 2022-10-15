



///DAR NEZINAU KUR BEDA, BET KLAIDA PASALINANT IR PRIDEDANT KNYGAS I LIBRARY.


function lentele() {
    document.getElementById("form").style.display = "flex";
}

let myLibrary = [];

function addBookToLibrary() {
    let name = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pageNum").value;
    let status = document.getElementById("status");
    if(status.checked == true){
        status = "Yes";
    }
    else status = "No";
    let book = new Book(name, author, pages, status);
    myLibrary.push(book);
    render();
}

function render() {
    let table = document.getElementById("table");
    for (let i = 0; i < myLibrary.length; i++) {
        let row = table.insertRow(i);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = myLibrary[i].name;
        cell2.innerHTML = myLibrary[i].author;
        cell3.innerHTML = myLibrary[i].pages;
        cell4.innerHTML = myLibrary[i].status;
        cell5.innerHTML = `<button onclick="deleteBook(${i})">Delete</button>`;
    }
    table.style.display = "block";
    document.getElementById("form").style.display = "none";
}

function deleteBook(){
    for(let i=0;i<1;i++){
        document.getElementById("table").deleteRow(i);
    }
}

function Book(name, author, pageNum,status) {
    this.name=name;
    this.author=author;
    this.pages=pageNum;
    this.status=status;
}

let submit=document.querySelector("#submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    addBookToLibrary();
})