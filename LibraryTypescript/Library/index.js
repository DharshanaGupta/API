"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let user;
let CurrentUserID;
//adding user
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5132/api/UserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
    });
}
function addBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5132/api/BookDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        if (!response.ok) {
            throw new Error('Failed to add Book');
        }
    });
}
function addBorrow(borrow) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5132/api/Borrowdetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrow)
        });
        if (!response.ok) {
            throw new Error('Failed to add Borrow');
        }
    });
}
//update user
function updateUser(id, users) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5132/api/UserInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        return yield response.json();
    });
}
//update borrow
function updateBorrow(id, borrows) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5132/api/Borrowdetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrows)
        });
        if (!response.ok) {
            throw new Error('Failed to update borrow');
        }
        return yield response.json();
    });
}
//update book
function updateBook(id, books) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5132/api/BookDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(books)
        });
        if (!response.ok) {
            throw new Error('Failed to update book');
        }
        return yield response.json();
    });
}
//user class- fetch
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5132/api/UserInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch User');
        }
        return yield response.json();
    });
}
//borrow class fetch
function fetchBorrow() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5132/api/Borrowdetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Borrow');
        }
        return yield response.json();
    });
}
//book class fetch
function fetchBook() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5132/api/BookDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Book');
        }
        return yield response.json();
    });
}
//delete book
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (fetch(`http://localhost:5132/api/BookDetails/${id}`, {
            method: 'DELETE'
        }));
        if (!response.ok) {
            throw new Error('Failed to delete');
        }
    });
}
//signinbutton
function SignInbutton() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "block";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let existingmail = document.getElementById("existingmail").value;
        let password = document.getElementById("password").value;
        const userList = yield fetchUser();
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].mailID == existingmail && userList[i].password == password) {
                alert("Logged in Successfully");
                user = userList[i];
                CurrentUserID = user.userID;
                AfterSignIn();
                break;
            }
        }
    });
}
function AfterSignIn() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function SignUpbutton() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "block";
    menubar.style.display = "none";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function SignUp() {
    let mail = document.getElementById("mail").value;
    let name = document.getElementById("name").value;
    let pwd = document.getElementById("pwd").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let phone = document.getElementById("number").value;
    let balance = document.getElementById("balance").value;
    let gender = document.getElementById("gender").value;
    let dept = document.getElementById("dept").value;
    const user = {
        userID: undefined,
        userName: name,
        gender: gender,
        department: dept,
        mobile: phone,
        walletBalance: Number(balance),
        mailID: mail,
        password: pwd
    };
    addUser(user);
    alert("User Registered Successfully");
    AfterSignUp();
}
function AfterSignUp() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "block";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function Home() {
    let greet = document.getElementById("greet");
    greet.innerHTML = `<h3>Hello ${user.userName}<h3>`;
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "block";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function TopUpForm() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "block";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function TopUp() {
    let balance = document.getElementById("amount").value;
    user.walletBalance += Number(balance);
    updateUser(user.userID, user);
    alert(user.walletBalance);
}
function Balance() {
    alert("Your current Balance is: " + user.walletBalance);
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
//show history
let tablebody = document.querySelector("#borrow_history tbody");
const historyTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const borrowList = yield fetchBorrow();
    tablebody.innerHTML = "";
    borrowList.forEach((item) => {
        if (item.userID == CurrentUserID) {
            const row = document.createElement("tr");
            row.innerHTML =
                `
        <td>${item.borrowID}</td>
        <td>${item.bookID}</td>
        <td>${item.userID}</td>
        <td>${item.borrowedDate}</td>
        <td>${item.borrowBookCount}</td>
        <td>${item.status}</td>
        <td>${item.paidFineAmount}</td>
        
        `;
            tablebody.appendChild(row);
        }
    });
    Borrowtable();
});
function Borrowtable() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "block";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
function SignOut() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    let details = document.getElementById("details");
    details.style.display = "none";
    buttons.style.display = "block";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
//book detail table
let bookdetails = document.querySelector("#bookdetails tbody");
const bookTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookList = yield fetchBook();
    bookdetails.innerHTML = "";
    bookList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML =
            ` 
            <td>${item.bookID}</td>
            <td>${item.bookName}</td>
            <td>${item.authorName}</td>
            <td>${item.bookCount}</td>
            <td>
            <button onclick="edit(${item.bookID})">Edit</button>
            <button onclick="deleteBook(${item.bookID})">Delete</button>
            </td>
            
            `;
        bookdetails.appendChild(row);
    });
    BookTable();
});
function BookTable() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let details = document.getElementById("details");
    details.style.display = "block";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
let returnbody = document.querySelector("#return tbody");
const returnTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const borrowList = yield fetchBorrow();
    returnbody.innerHTML = "";
    borrowList.forEach((item) => {
        if (item.status == "Borrowed") {
            if (item.userID == CurrentUserID) {
                const row = document.createElement("tr");
                row.innerHTML =
                    `
            <td>${item.borrowID}</td>
            <td>${item.bookID}</td>
            <td>${item.userID}</td>
            <td>${item.borrowedDate}</td>
            <td>${item.borrowBookCount}</td>
            <td>${item.status}</td>
            <td>${item.paidFineAmount}</td>
            <td><button onclick="Return(${item.borrowID})">Return</td>
          `;
                returnbody.appendChild(row);
            }
        }
    });
    ReturnDisplay();
});
function ReturnDisplay() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let details = document.getElementById("details");
    details.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "block";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
let borrowed;
function Return(id) {
    return __awaiter(this, void 0, void 0, function* () {
        alert("Welcome to return");
        let date1 = new Date();
        //let currentdate=date1.toString().substring(0,10);
        alert(date1);
        const borrowList = yield fetchBorrow();
        for (let i = 0; i < borrowList.length; i++) {
            if (borrowList[i].borrowID == id) {
                borrowed = (borrowList[i].borrowedDate).toString().substring(0, 10);
            }
        }
        //let diff=new Date(borrowed).getTime() -new Date(date1).getTime();
        let diff = new Date(borrowed.substring(0, 10)).getTime() - date1.getTime();
        alert(diff);
        let diffdays = Math.ceil(diff / (1000 * 3600 * 24));
        alert(diffdays);
        diffdays = Math.abs(diffdays);
        let fineAmount;
        for (let i = 0; i < borrowList.length; i++) {
            if (borrowList[i].borrowID == id) {
                if (diffdays < 15) {
                    const returnbook = {
                        borrowID: id,
                        bookID: borrowList[i].bookID,
                        userID: borrowList[i].userID,
                        borrowedDate: borrowList[i].borrowedDate,
                        status: "Returned",
                        paidFineAmount: borrowList[i].paidFineAmount,
                        borrowBookCount: borrowList[i].borrowBookCount
                    };
                    updateBorrow(borrowList[i].borrowID, returnbook);
                    const bookList = yield fetchBook();
                    for (let j = 0; j < bookList.length; j++) {
                        if (bookList[j].bookID == borrowList[i].bookID) {
                            let count = borrowList[i].borrowBookCount;
                            const returncount = {
                                bookID: bookList[j].bookID,
                                bookName: bookList[j].bookName,
                                authorName: bookList[j].authorName,
                                bookCount: count
                            };
                            updateBook(bookList[j].bookID, returncount);
                        }
                    }
                }
                else if (diffdays > 15) {
                    let days = diffdays - 15;
                    fineAmount = days;
                    const userList = yield fetchUser();
                    for (let i = 0; i < userList.length; i++) {
                        if (borrowList[i].userID == CurrentUserID) {
                            if (userList[i].walletBalance > fineAmount) {
                                let newbalance = userList[i].walletBalance - fineAmount;
                                const balupdate = {
                                    userID: CurrentUserID,
                                    userName: userList[i].userName,
                                    gender: userList[i].gender,
                                    department: userList[i].department,
                                    mobile: userList[i].mobile,
                                    walletBalance: newbalance,
                                    mailID: userList[i].mailID,
                                    password: userList[i].password
                                };
                                updateUser(CurrentUserID, balupdate);
                                alert(userList[i].walletBalance);
                                const bookList = yield fetchBook();
                                for (let j = 0; j < bookList.length; j++) {
                                    if (bookList[j].bookID == borrowList[i].bookID) {
                                        let count = borrowList[i].borrowBookCount;
                                        const returncount = {
                                            bookID: bookList[j].bookID,
                                            bookName: bookList[j].bookName,
                                            authorName: bookList[j].authorName,
                                            bookCount: count
                                        };
                                        updateBook(bookList[j].bookID, returncount);
                                        alert(bookList[j].bookCount);
                                    }
                                }
                                const returnbook = {
                                    borrowID: id,
                                    bookID: borrowList[i].bookID,
                                    userID: borrowList[i].userID,
                                    borrowedDate: borrowList[i].borrowedDate,
                                    status: "Returned",
                                    paidFineAmount: fineAmount,
                                    borrowBookCount: borrowList[i].borrowBookCount
                                };
                                updateBorrow(borrowList[i].borrowID, returnbook);
                            }
                            else {
                                alert("Insufficient balance");
                            }
                        }
                    }
                }
            }
        }
    });
}
let borrowbody = document.querySelector("#buyBooks tbody");
const borrowtable = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookList = yield fetchBook();
    borrowbody.innerHTML = "";
    bookList.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML =
            ` 
            <td>${item.bookID}</td>
            <td>${item.bookName}</td>
            <td>${item.authorName}</td>
            <td>${item.bookCount}</td>
            <td><button onclick="Borrow(${item.bookID})">Borrow</button></td>
            <td><input type="file" id="upload"></td>
            `;
        borrowbody.appendChild(row);
    });
    BorrowDisplay();
});
function BorrowDisplay() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let details = document.getElementById("details");
    details.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "block";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
let currentbookID;
function Borrow(id) {
    alert("Borrow");
    currentbookID = id;
    let form = document.getElementById("form");
    form.style.display = "block";
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let details = document.getElementById("details");
    details.style.display = "none";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "block";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "none";
}
let bookCount = 0;
function borrowSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        let currentbookcount = document.getElementById("bookcount").value;
        const bookList = yield fetchBook();
        const borrowList = yield fetchBorrow();
        if (+currentbookcount <= 3) {
            for (let i = 0; i < bookList.length; i++) {
                if (currentbookID == bookList[i].bookID) {
                    if (bookList[i].bookCount >= Number(currentbookcount)) {
                        for (let i = 0; i < borrowList.length; i++) {
                            if (CurrentUserID == borrowList[i].userID && borrowList[i].status == "Borrowed") {
                                bookCount += borrowList[i].borrowBookCount;
                            }
                        }
                        if (bookCount > 3) {
                            alert("You can have maximum of 3 borrowed books. Your already borrowed books count is " + bookCount + " and requested count is" + currentbookcount + ", which exceeds 3 ”");
                        }
                        else {
                            const addbook = {
                                borrowID: undefined,
                                bookID: bookList[i].bookID,
                                userID: CurrentUserID,
                                borrowedDate: new Date(),
                                status: "Borrowed",
                                paidFineAmount: 0,
                                borrowBookCount: Number(currentbookcount)
                            };
                            addBorrow(addbook);
                            let countupdate = bookList[i].bookCount - Number(currentbookcount);
                            alert(countupdate);
                            const updatedcount = {
                                bookID: currentbookID,
                                bookName: bookList[i].bookName,
                                authorName: bookList[i].authorName,
                                bookCount: countupdate
                            };
                            updateBook(currentbookID, updatedcount);
                            alert("Book borrowed Successfully");
                        }
                    }
                    else {
                        alert("Books are not available for the selected count");
                    }
                }
            }
        }
        else {
            alert("maximum limit is 3");
        }
    });
}
function Add() {
    let buttons = document.getElementById("buttons");
    let signin_page = document.getElementById("signin_page");
    let signup_page = document.getElementById("signup_page");
    let menubar = document.getElementById("menubar");
    let home_page = document.getElementById("home_page");
    let topup_form = document.getElementById("topup_form");
    let history = document.getElementById("history");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home_page.style.display = "none";
    topup_form.style.display = "none";
    history.style.display = "none";
    let details = document.getElementById("details");
    details.style.display = "block";
    let returnbook = document.getElementById("returnbook");
    returnbook.style.display = "none";
    let borrowbooks = document.getElementById("borrowbook");
    borrowbooks.style.display = "none";
    let form = document.getElementById("form");
    form.style.display = "none";
    let addbook = document.getElementById("addbook");
    addbook.style.display = "block";
}
let editingID = null;
let bookname = document.getElementById("bookname");
let authorname = document.getElementById("authorname");
let countbook = document.getElementById("countbook");
function SubmitBook() {
    return __awaiter(this, void 0, void 0, function* () {
        let nameofbook = bookname.value;
        let nameofauthor = authorname.value;
        let countofbook = countbook.value;
        const bookList = yield fetchBook();
        if (editingID !== null) {
            alert("updating");
            const updatebooks = {
                bookID: editingID,
                bookName: nameofbook,
                authorName: nameofauthor,
                bookCount: Number(countofbook)
            };
            updateBook(editingID, updatebooks);
        }
        else {
            const addbooks = {
                bookID: undefined,
                bookName: nameofbook,
                authorName: nameofauthor,
                bookCount: Number(countofbook)
            };
            addBook(addbooks);
            alert("Book added Successfully");
        }
    });
}
const edit = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const bookList = yield fetchBook();
    let addbook = document.getElementById("addbook");
    addbook.style.display = "block";
    editingID = id;
    const item = bookList.find((item) => item.bookID === id);
    if (item) {
        bookname.value = item.bookName;
        authorname.value = item.authorName;
        countbook.value = String(item.bookCount);
    }
});
function Export() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = document.querySelector('a');
        let data = "BorrowID,BookID,UserID,BorrowedDate,Status,PaidFineAmount,BorrowBookCount";
        const borrowList = yield fetchBorrow();
        for (let i = 0; i < borrowList.length; i++) {
            data = data + `\n` + `${borrowList[i].borrowID},${borrowList[i].bookID},${borrowList[i].userID},${borrowList[i].borrowedDate.toString().substring(0, 10)},${borrowList[i].status},${borrowList[i].paidFineAmount},${borrowList[i].borrowBookCount}\n`;
        }
        //create a binary large object
        const blob = new Blob([data], { type: 'text/csv' });
        //create url for data in blob
        const url = URL.createObjectURL(blob);
        //set href
        a.href = url;
        a.download = 'borrowDetails.csv';
    });
}
