var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var CardnumberIncrement = 1000;
var user;
//user list--default data
// let userList:Array<UserInfo>=new Array<UserInfo>;
// userList.push(new UserInfo("Ravi","987654321",1000));
// userList.push(new UserInfo("Baskaran","1234567890",1000));
var TicketIDIncrement = 2000;
//ticket fair list - default data
// let ticketFairList:Array<TicketFair>=new Array<TicketFair>;
// ticketFairList.push(new TicketFair("Airport","Egmore",55));
// ticketFairList.push(new TicketFair("Airport","Koyembedu",25));
// ticketFairList.push(new TicketFair("Alandur","Koyembedu",25));
// ticketFairList.push(new TicketFair("Koyembedu","Egmore",32));
// ticketFairList.push(new TicketFair("Vadapalani","Egmore",45));
// ticketFairList.push(new TicketFair("Arumbakkam","Egmore",25));
// ticketFairList.push(new TicketFair("Vadaplani","Koyembedu",25));
// ticketFairList.push(new TicketFair("Arumbakkam","Koyembedu",16));
//Travel history details
var TravelIDIncrement = 3000;
//let travelList:Array<Travel>=new Array<Travel>;
var CurrentUser;
var CurrentUserBalance;
var CurrentUserName;
function SigninButton() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "block";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function () {
        var flag, cardnumber, regex, userList, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    flag = true;
                    cardnumber = document.getElementById("cardNumber").value;
                    regex = /^CMRL\d{4}$/;
                    return [4 /*yield*/, fetchUser()
                        // if(regex.test(cardnumber))
                        //     {
                    ];
                case 1:
                    userList = _a.sent();
                    // if(regex.test(cardnumber))
                    //     {
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].cardNumber == Number(cardnumber)) {
                            flag = false;
                            alert("Logged In Successfully");
                            CurrentUser = userList[i].cardNumber;
                            CurrentUserBalance = userList[i].balance;
                            CurrentUserName = userList[i].userName;
                            user = userList[i];
                            AfterSignin();
                        }
                    }
                    if (flag) {
                        alert("Invalid Card Number");
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//} 
function AfterSignin() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function SignUpbutton() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "block";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function SignUp() {
    return __awaiter(this, void 0, void 0, function () {
        var userList, username, passsword, phone, balanceAmount, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUser()
                    //let email=(document.getElementById("") as HTMLInputElement).value;
                ];
                case 1:
                    userList = _a.sent();
                    username = document.getElementById("name").value;
                    passsword = document.getElementById("pwd").value;
                    phone = document.getElementById("phone").value;
                    balanceAmount = document.getElementById("balance").value;
                    user = {
                        cardNumber: -1,
                        userName: username,
                        phone: phone,
                        balance: Number(balanceAmount)
                    };
                    addUser(user);
                    Aftersignup();
                    return [2 /*return*/];
            }
        });
    });
}
function Aftersignup() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "block";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function Home() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "block";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
    var greet = document.getElementById("greet");
    greet.innerHTML = "<h2>Welcome ".concat(CurrentUserName, " </h2>");
}
function Balance() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
    //alert("your Current Balance is: "+CurrentUserBalance);
    alert(user.balance);
}
function RechargeFormDisplay() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "block";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
function Recharge() {
    var topupamount = document.getElementById("top_up").value;
    //CurrentUserBalance=CurrentUserBalance+ +topupamount;
    user.balance = user.balance + Number(topupamount);
    updateUser(user.cardNumber, user);
    alert(user.balance);
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "none";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
var fairTableBody = document.querySelector("#fair tbody");
var FairDetails = function () { return __awaiter(_this, void 0, void 0, function () {
    var buttons, signin_page, signup_page, menubar, home, topup, FairDetails, travel, history, count, ticketFairList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                buttons = document.getElementById("buttons");
                signin_page = document.getElementById("signin_page");
                signup_page = document.getElementById("signup_page");
                menubar = document.getElementById("menubar");
                home = document.getElementById("home");
                topup = document.getElementById("topup");
                FairDetails = document.getElementById("FairDetails");
                travel = document.getElementById("travel");
                history = document.getElementById("history");
                count = document.getElementById("count");
                buttons.style.display = "none";
                signin_page.style.display = "none";
                signup_page.style.display = "none";
                menubar.style.display = "block";
                home.style.display = "none";
                topup.style.display = "none";
                FairDetails.style.display = "block";
                travel.style.display = "none";
                history.style.display = "none";
                count.style.display = "none";
                fairTableBody.innerHTML = "";
                return [4 /*yield*/, fetchTicket()];
            case 1:
                ticketFairList = _a.sent();
                ticketFairList.forEach(function (item) {
                    var row = document.createElement("tr");
                    row.innerHTML = "\n        <td>".concat(item.fromLocation, "</td>\n        <td>").concat(item.toLocation, "</td>\n        <td>").concat(item.fair, "</td>\n        ");
                    fairTableBody.appendChild(row);
                });
                return [2 /*return*/];
        }
    });
}); };
var travelBody = document.querySelector("#makeTravel tbody");
var Travelbtn = function () { return __awaiter(_this, void 0, void 0, function () {
    var ticketFairList, buttons, signin_page, signup_page, menubar, home, topup, FairDetails, travel, history, count;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchTicket()];
            case 1:
                ticketFairList = _a.sent();
                travelBody.innerHTML = "";
                ticketFairList.forEach(function (item) {
                    var row = document.createElement("tr");
                    row.innerHTML = "\n            <td>".concat(item.fromLocation, "</td>\n            <td>").concat(item.toLocation, "</td>\n            <td>").concat(item.fair, "</td>\n            <td><input type=\"button\" onclick=\"DisplayCountForm('").concat(item.fromLocation, "','").concat(item.toLocation, "')\" value=\"BuyTickets\"></td>\n            ");
                    travelBody.appendChild(row);
                });
                buttons = document.getElementById("buttons");
                signin_page = document.getElementById("signin_page");
                signup_page = document.getElementById("signup_page");
                menubar = document.getElementById("menubar");
                home = document.getElementById("home");
                topup = document.getElementById("topup");
                FairDetails = document.getElementById("FairDetails");
                travel = document.getElementById("travel");
                history = document.getElementById("history");
                count = document.getElementById("count");
                buttons.style.display = "none";
                signin_page.style.display = "none";
                signup_page.style.display = "none";
                menubar.style.display = "block";
                home.style.display = "none";
                topup.style.display = "none";
                FairDetails.style.display = "none";
                travel.style.display = "block";
                history.style.display = "none";
                count.style.display = "none";
                return [2 /*return*/];
        }
    });
}); };
var fromLocation;
var toLocation;
function confirmTravel() {
    return __awaiter(this, void 0, void 0, function () {
        var ticketFairList, quantity, i, price, date, day, month, year, currentDate, travel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchTicket()];
                case 1:
                    ticketFairList = _a.sent();
                    quantity = document.getElementById("getcount").value;
                    for (i = 0; i < ticketFairList.length; i++) {
                        if (ticketFairList[i].fromLocation == fromLocation && ticketFairList[i].toLocation == toLocation) {
                            price = ticketFairList[i].fair * +quantity;
                            if (CurrentUserBalance >= price) {
                                date = new Date();
                                day = date.getDate();
                                month = date.getMonth();
                                year = date.getFullYear();
                                currentDate = day + '/' + month + '/' + year;
                                travel = {
                                    travelID: 0,
                                    cardNumber: CurrentUser,
                                    fromLocation: ticketFairList[i].fromLocation,
                                    toLocation: ticketFairList[i].toLocation,
                                    travelCost: price,
                                    status: "Booked",
                                    date: new Date()
                                };
                                addTravel(travel);
                                //CurrentUserBalance=CurrentUserBalance-price;
                                user.balance = user.balance - price;
                                updateUser(user.cardNumber, user);
                                alert("Tickets Booked");
                                alert(user.balance);
                                //travelList.push(new Travel(CurrentUser,ticketFairList[i].FromLocation,ticketFairList[i].ToLocation,ticketFairList[i].Fair,"Booked",currentDate));
                            }
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function DisplayCountForm(from, to) {
    return __awaiter(this, void 0, void 0, function () {
        var ticketFairList, i, buttons, signin_page, signup_page, menubar, home, topup, FairDetails, travel, history, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchTicket()];
                case 1:
                    ticketFairList = _a.sent();
                    for (i = 0; i < ticketFairList.length; i++) {
                        if (ticketFairList[i].fromLocation == from && ticketFairList[i].toLocation == to) {
                            fromLocation = ticketFairList[i].fromLocation;
                            toLocation = ticketFairList[i].toLocation;
                        }
                    }
                    buttons = document.getElementById("buttons");
                    signin_page = document.getElementById("signin_page");
                    signup_page = document.getElementById("signup_page");
                    menubar = document.getElementById("menubar");
                    home = document.getElementById("home");
                    topup = document.getElementById("topup");
                    FairDetails = document.getElementById("FairDetails");
                    travel = document.getElementById("travel");
                    history = document.getElementById("history");
                    count = document.getElementById("count");
                    buttons.style.display = "none";
                    signin_page.style.display = "none";
                    signup_page.style.display = "none";
                    menubar.style.display = "block";
                    home.style.display = "none";
                    topup.style.display = "none";
                    FairDetails.style.display = "none";
                    travel.style.display = "block";
                    history.style.display = "none";
                    count.style.display = "block";
                    return [2 /*return*/];
            }
        });
    });
}
var historybody = document.querySelector("#travelHistory tbody");
var TravelDetails = function () { return __awaiter(_this, void 0, void 0, function () {
    var buttons, signin_page, signup_page, menubar, home, topup, FairDetails, travel, history, count, travelList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                buttons = document.getElementById("buttons");
                signin_page = document.getElementById("signin_page");
                signup_page = document.getElementById("signup_page");
                menubar = document.getElementById("menubar");
                home = document.getElementById("home");
                topup = document.getElementById("topup");
                FairDetails = document.getElementById("FairDetails");
                travel = document.getElementById("travel");
                history = document.getElementById("history");
                count = document.getElementById("count");
                buttons.style.display = "none";
                signin_page.style.display = "none";
                signup_page.style.display = "none";
                menubar.style.display = "block";
                home.style.display = "none";
                topup.style.display = "none";
                FairDetails.style.display = "none";
                travel.style.display = "none";
                history.style.display = "block";
                count.style.display = "none";
                return [4 /*yield*/, fetchTravel()];
            case 1:
                travelList = _a.sent();
                historybody.innerHTML = "";
                travelList.forEach(function (item) {
                    var row = document.createElement("tr");
                    row.innerHTML = "\n            <td>".concat(item.fromLocation, "</td>\n            <td>").concat(item.toLocation, "</td>\n            <td>").concat(item.travelCost, "</td>\n            <td>").concat(item.date, "</td>\n            <td>").concat(item.status, "</td>\n            ");
                    historybody.appendChild(row);
                });
                return [2 /*return*/];
        }
    });
}); };
function Signout() {
    var buttons = document.getElementById("buttons");
    var signin_page = document.getElementById("signin_page");
    var signup_page = document.getElementById("signup_page");
    var menubar = document.getElementById("menubar");
    var home = document.getElementById("home");
    var topup = document.getElementById("topup");
    var FairDetails = document.getElementById("FairDetails");
    var travel = document.getElementById("travel");
    var history = document.getElementById("history");
    var count = document.getElementById("count");
    buttons.style.display = "block";
    signin_page.style.display = "none";
    signup_page.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    topup.style.display = "none";
    FairDetails.style.display = "none";
    travel.style.display = "none";
    history.style.display = "none";
    count.style.display = "none";
}
//adding user
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5241/api/userInfo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add user');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//adding Travel
function addTravel(travel) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5241/api/Travel', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(travel)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add order');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//update user
function updateUser(id, users) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5241/api/userInfo/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(users)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update order');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//updating balance
function updateBalance(id, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5241/api/UserInfo/".concat(id).concat(amount), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(amount)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update Balance');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//updating Travel
function updateTravel(id, travel) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5241/api/Travel/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(travel)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update order');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//user class- fetch
function fetchUser() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5241/api/userInfo';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch User');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//Travel class -fetch
function fetchTravel() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5241/api/Travel';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch Medicine');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//TicketFair class-fetch
function fetchTicket() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5241/api/TicketFair';
                    return [4 /*yield*/, fetch(apiUrl)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch order');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
