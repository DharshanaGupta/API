let user: UserInfo;
let CurrentUserID: number;
interface UserInfo {
  userID: any;
  userName: string;
  gender: string;
  department: string;
  mobile: string;
  walletBalance: number;
  mailID: string;
  password: string;
}

interface BookDetails {
  bookID: any;
  bookName: string;
  authorName: string;
  bookCount: number;
}

interface BorrowDetails {
  borrowID: any;
  bookID: number;
  userID: number;
  borrowedDate: Date;
  status: string;
  paidFineAmount: number;
  borrowBookCount: number;
}

//adding user
async function addUser(user: UserInfo): Promise<void> {
  const response = await fetch('http://localhost:5132/api/UserInfo',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(user)
    });
  if (!response.ok) {
    throw new Error('Failed to add user');
  }
}

async function addBook(book: BookDetails): Promise<void> {
  const response = await fetch('http://localhost:5132/api/BookDetails',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  if (!response.ok) {
    throw new Error('Failed to add Book');
  }
}

async function addBorrow(borrow: BorrowDetails): Promise<void> {
  const response = await fetch('http://localhost:5132/api/Borrowdetails',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(borrow)
    });
  if (!response.ok) {
    throw new Error('Failed to add Borrow');
  }
}

//update user
async function updateUser(id: number, users: UserInfo): Promise<void> {
  const response = await fetch(`http://localhost:5132/api/UserInfo/${id}`, {
    method: 'PUT',
    headers:
    {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)

  });
  if (!response.ok) {
    throw new Error('Failed to update user');
  }
  return await response.json();
}

//update borrow
async function updateBorrow(id: number, borrows: BorrowDetails): Promise<void> {
  const response = await fetch(`http://localhost:5132/api/Borrowdetails/${id}`, {
    method: 'PUT',
    headers:
    {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(borrows)

  });
  if (!response.ok) {
    throw new Error('Failed to update borrow');
  }
  return await response.json();
}

//update book
async function updateBook(id: any, books: BookDetails): Promise<void> {
  const response = await fetch(`http://localhost:5132/api/BookDetails/${id}`, {
    method: 'PUT',
    headers:
    {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(books)

  });
  if (!response.ok) {
    throw new Error('Failed to update book');
  }
  return await response.json();
}

//user class- fetch
async function fetchUser(): Promise<UserInfo[]> {
  const apiUrl = 'http://localhost:5132/api/UserInfo';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch User');

  }
  return await response.json();
}

//borrow class fetch
async function fetchBorrow(): Promise<BorrowDetails[]> {
  const apiUrl = 'http://localhost:5132/api/Borrowdetails';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch Borrow');

  }
  return await response.json();
}

//book class fetch
async function fetchBook(): Promise<BookDetails[]> {
  const apiUrl = 'http://localhost:5132/api/BookDetails';
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch Book');

  }
  return await response.json();
}

//delete book
async function deleteBook(id: number): Promise<void> {
  const response = await (fetch(`http://localhost:5132/api/BookDetails/${id}`,
    {
      method: 'DELETE'
    }
  ));
  if (!response.ok) {
    throw new Error('Failed to delete');
  }

}

//signinbutton
function SignInbutton() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "block";
  signup_page.style.display = "none";
  menubar.style.display = "none";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

async function SignIn() {
  let existingmail = (document.getElementById("existingmail") as HTMLInputElement).value;
  let password = (document.getElementById("password") as HTMLInputElement).value;
  const userList = await fetchUser();
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].mailID == existingmail && userList[i].password == password) {
      alert("Logged in Successfully");
      user = userList[i];
      CurrentUserID = user.userID;
      AfterSignIn();
      break;
    }
  }
}

function AfterSignIn() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

function SignUpbutton() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "block";
  menubar.style.display = "none";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

function SignUp() {
  let mail = (document.getElementById("mail") as HTMLInputElement).value;
  let name = (document.getElementById("name") as HTMLInputElement).value;
  let pwd = (document.getElementById("pwd") as HTMLInputElement).value;
  let confirm_password = (document.getElementById("confirm_password") as HTMLInputElement).value;
  let phone = (document.getElementById("number") as HTMLInputElement).value;
  let balance = (document.getElementById("balance") as HTMLInputElement).value;
  let gender = (document.getElementById("gender") as HTMLInputElement).value;
  let dept = (document.getElementById("dept") as HTMLInputElement).value;
  const user: UserInfo =
  {
    userID: undefined,
    userName: name,
    gender: gender,
    department: dept,
    mobile: phone,
    walletBalance: Number(balance),
    mailID: mail,
    password: pwd
  }
  addUser(user);
  alert("User Registered Successfully");
  AfterSignUp();
}

function AfterSignUp() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "block";
  signup_page.style.display = "none";
  menubar.style.display = "none";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

function Home() {
  let greet = document.getElementById("greet") as HTMLLabelElement;
  greet.innerHTML = `<h3>Hello ${user.userName}<h3>`;
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "block";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

function TopUpForm() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "block";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

function TopUp() {
  let balance = (document.getElementById("amount") as HTMLInputElement).value;
  user.walletBalance += Number(balance);
  updateUser(user.userID, user);
  alert(user.walletBalance);
}

function Balance() {
  alert("Your current Balance is: " + user.walletBalance);
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

//show history
let tablebody = document.querySelector("#borrow_history tbody") as HTMLTableSectionElement;
const historyTable = async () => {
  const borrowList = await fetchBorrow();
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
}

function Borrowtable() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "block";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

function SignOut() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  buttons.style.display = "block";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "none";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}

//book detail table
let bookdetails = document.querySelector("#bookdetails tbody") as HTMLTableSectionElement;
const bookTable = async () => {
  const bookList = await fetchBook();
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
}
function BookTable() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "block";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";

}



let returnbody = document.querySelector("#return tbody") as HTMLTableSectionElement;
const returnTable = async () => {
  const borrowList = await fetchBorrow();
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
}

function ReturnDisplay() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "block";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}
let borrowed: string;
async function Return(id: number) {
  alert("Welcome to return");
  let date1 = new Date();
  //let currentdate=date1.toString().substring(0,10);
  alert(date1);
  const borrowList = await fetchBorrow();

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
        const returnbook: BorrowDetails =
        {
          borrowID: id,
          bookID: borrowList[i].bookID,
          userID: borrowList[i].userID,
          borrowedDate: borrowList[i].borrowedDate,
          status: "Returned",
          paidFineAmount: borrowList[i].paidFineAmount,
          borrowBookCount: borrowList[i].borrowBookCount
        }
        updateBorrow(borrowList[i].borrowID, returnbook);

        const bookList = await fetchBook();
        for (let j = 0; j < bookList.length; j++) {
          if (bookList[j].bookID == borrowList[i].bookID) {
            let count = borrowList[i].borrowBookCount;
            const returncount: BookDetails =
            {
              bookID: bookList[j].bookID,
              bookName: bookList[j].bookName,
              authorName: bookList[j].authorName,
              bookCount: count
            }
            updateBook(bookList[j].bookID, returncount);
          }
        }
      }
      else if (diffdays > 15) {
        let days = diffdays - 15;
        fineAmount = days;
        const userList = await fetchUser();
        for (let i = 0; i < userList.length; i++) {
          if (borrowList[i].userID == CurrentUserID) {
            if (userList[i].walletBalance > fineAmount) {
              let newbalance = userList[i].walletBalance - fineAmount;
              const balupdate: UserInfo = {
                userID: CurrentUserID,
                userName: userList[i].userName,
                gender: userList[i].gender,
                department: userList[i].department,
                mobile: userList[i].mobile,
                walletBalance: newbalance,
                mailID: userList[i].mailID,
                password: userList[i].password
              }
              updateUser(CurrentUserID, balupdate);
              alert(userList[i].walletBalance);

              const bookList = await fetchBook();
              for (let j = 0; j < bookList.length; j++) {
                if (bookList[j].bookID == borrowList[i].bookID) {
                  let count = borrowList[i].borrowBookCount;
                  const returncount: BookDetails =
                  {
                    bookID: bookList[j].bookID,
                    bookName: bookList[j].bookName,
                    authorName: bookList[j].authorName,
                    bookCount: count
                  }
                  updateBook(bookList[j].bookID, returncount);
                  alert(bookList[j].bookCount);
                }
              }

              const returnbook: BorrowDetails =
              {
                borrowID: id,
                bookID: borrowList[i].bookID,
                userID: borrowList[i].userID,
                borrowedDate: borrowList[i].borrowedDate,
                status: "Returned",
                paidFineAmount: fineAmount,
                borrowBookCount: borrowList[i].borrowBookCount
              }
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
}

let borrowbody = document.querySelector("#buyBooks tbody") as HTMLTableSectionElement;
const borrowtable = async () => {
  const bookList = await fetchBook();
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
}

function BorrowDisplay() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "block";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";
}


let currentbookID: number;
function Borrow(id: number) {
  alert("Borrow");
  currentbookID = id;
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "block";
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "none";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "block";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "none";

}


let bookCount: number = 0;
async function borrowSubmit() {
  let currentbookcount = (document.getElementById("bookcount") as HTMLInputElement).value;
  const bookList = await fetchBook();
  const borrowList = await fetchBorrow();
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
            alert("You can have maximum of 3 borrowed books. Your already borrowed books count is " + bookCount + " and requested count is" + currentbookcount + ", which exceeds 3 ”")
          }
          else {
            const addbook: BorrowDetails =
            {
              borrowID: undefined,
              bookID: bookList[i].bookID,
              userID: CurrentUserID,
              borrowedDate: new Date(),
              status: "Borrowed",
              paidFineAmount: 0,
              borrowBookCount: Number(currentbookcount)
            }
            addBorrow(addbook);

            let countupdate = bookList[i].bookCount - Number(currentbookcount);
            alert(countupdate);
            const updatedcount: BookDetails =
            {
              bookID: currentbookID,
              bookName: bookList[i].bookName,
              authorName: bookList[i].authorName,
              bookCount: countupdate
            }
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
}
function Add() {
  let buttons = document.getElementById("buttons") as HTMLDivElement;
  let signin_page = document.getElementById("signin_page") as HTMLDivElement;
  let signup_page = document.getElementById("signup_page") as HTMLDivElement;
  let menubar = document.getElementById("menubar") as HTMLDivElement;
  let home_page = document.getElementById("home_page") as HTMLDivElement;
  let topup_form = document.getElementById("topup_form") as HTMLDivElement;
  let history = document.getElementById("history") as HTMLDivElement;
  buttons.style.display = "none";
  signin_page.style.display = "none";
  signup_page.style.display = "none";
  menubar.style.display = "block";
  home_page.style.display = "none";
  topup_form.style.display = "none";
  history.style.display = "none";
  let details = document.getElementById("details") as HTMLDivElement;
  details.style.display = "block";
  let returnbook = (document.getElementById("returnbook") as HTMLInputElement);
  returnbook.style.display = "none";
  let borrowbooks = document.getElementById("borrowbook") as HTMLDivElement;
  borrowbooks.style.display = "none";
  let form = document.getElementById("form") as HTMLInputElement;
  form.style.display = "none";
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "block";

}
let editingID: number | null = null;
let bookname = (document.getElementById("bookname") as HTMLInputElement);
let authorname = (document.getElementById("authorname") as HTMLInputElement);
let countbook = (document.getElementById("countbook") as HTMLInputElement);
async function SubmitBook() {
  let nameofbook = bookname.value;
  let nameofauthor = authorname.value;
  let countofbook = countbook.value;
  const bookList = await fetchBook();
  if (editingID !== null) {
    alert("updating")
    const updatebooks: BookDetails =
    {
      bookID: editingID,
      bookName: nameofbook,
      authorName: nameofauthor,
      bookCount: Number(countofbook)
    }
    updateBook(editingID, updatebooks);
  }
  else {
    const addbooks: BookDetails =
    {
      bookID: undefined,
      bookName: nameofbook,
      authorName: nameofauthor,
      bookCount: Number(countofbook)
    }
    addBook(addbooks);
    alert("Book added Successfully");
  }

}

const edit = async (id: number) => {
  const bookList = await fetchBook();
  let addbook = document.getElementById("addbook") as HTMLDivElement;
  addbook.style.display = "block";
  editingID = id;
  const item = bookList.find((item) => item.bookID === id);
  if (item) {
    bookname.value = item.bookName;
    authorname.value = item.authorName;
    countbook.value = String(item.bookCount);
  }
};




async function Export() {
  const a = document.querySelector('a') as HTMLAnchorElement;
  let data: string = "BorrowID,BookID,UserID,BorrowedDate,Status,PaidFineAmount,BorrowBookCount";
  const borrowList = await fetchBorrow();
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
}



