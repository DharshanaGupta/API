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
var CurrentUserID;
var CurrentUserName;
var CurrentUserBalance;
var user;
var editingID = null;
function SignInbutton() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "block";
    button.style.display = "none";
    signup.style.display = "none";
    home.style.display = "none";
    menubar.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
function SignIn() {
    return __awaiter(this, void 0, void 0, function () {
        var existing, userList, regex, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    existing = document.getElementById("existinguserid").value;
                    return [4 /*yield*/, fetchUser()];
                case 1:
                    userList = _a.sent();
                    regex = /^\d{4}$/;
                    //if(regex.test(existing))
                    //{
                    for (i = 0; i < userList.length; i++) {
                        if (userList[i].userID == Number(existing)) {
                            CurrentUserID = userList[i].userID;
                            CurrentUserName = userList[i].userName;
                            CurrentUserBalance = userList[i].walletBalance;
                            user = userList[i];
                            alert("logged in successfully");
                            AfterSignin();
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//displaying After sign in
function AfterSignin() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//displaying Home
function Home() {
    var greet = document.getElementById("greet");
    greet.innerHTML = "<h3>Hello ".concat(CurrentUserName, "</h3>");
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "block";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
function SignUpbutton() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "block";
    home.style.display = "none";
    menubar.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//let userList: Array<UserInfo> = new Array<UserInfo>;
function SignUp() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pwd").value;
    var phone = document.getElementById("number").value;
    var balance = document.getElementById("balance").value;
    //userList.push(new UserInfo(username,password,phone,+balance));
    var user = {
        userID: -1,
        userName: username,
        password: password,
        phone: phone,
        walletBalance: Number(balance)
    };
    addUser(user);
    alert("success");
    AfterSignup();
}
function AfterSignup() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "block";
    signup.style.display = "none";
    home.style.display = "none";
    menubar.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//medicine class
var MedicineIncrement = 0;
var tablebody = document.querySelector("#data tbody");
//default data
// let medicineList: Array<MedicineInfo> = new Array<MedicineInfo>;
// medicineList.push(new MedicineInfo("Paracetomel",8,10,"20/10/2024"));
// medicineList.push(new MedicineInfo("Colpal",5,8,"22/04/2024"));
// medicineList.push(new MedicineInfo("Stepsil",10,5,"11/05/2024"));
var renderTable = function () { return __awaiter(_this, void 0, void 0, function () {
    var medicineList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchMedicine()];
            case 1:
                medicineList = _a.sent();
                tablebody.innerHTML = "";
                medicineList.forEach(function (item) {
                    var row = document.createElement("tr");
                    row.innerHTML = "\n      <td>".concat(item.medicineName, "</td>\n      <td>").concat(item.medicinePrice, "</td>\n      <td>").concat(item.medicineCount, "</td>\n      <td>").concat(item.expiryDate, "</td>\n      <td><button onclick=\"edit(").concat(item.medicineID, ")\">Edit</button>\n      <button onclick=\"deleteMedicine(").concat(item.medicineID, ")\">Delete</button></td>\n    ");
                    tablebody.appendChild(row);
                });
                MedicineTable(); // to show the details
                return [2 /*return*/];
        }
    });
}); };
function MedicineTable() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "block";
    topupform.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    list.style.display = "none";
    purchase_table.style.display = "none";
}
function SignOut() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "block";
    signup.style.display = "none";
    menubar.style.display = "none";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    list.style.display = "none";
    purchase_table.style.display = "none";
}
function TopUp() {
    var balance = document.getElementById("amount").value;
    user.walletBalance += Number(balance);
    updateUser(user.userID, user);
    //updateAmount(user.userID,Number(balance));
    alert("your current Balance is: " + user.walletBalance);
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var topupform = document.getElementById("topup_form");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var purchase_table = document.getElementById("purchase_table");
    var list = document.getElementById("list");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    purchase_table.style.display = "none";
    list.style.display = "none";
}
function TopupForm() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var purchase_table = document.getElementById("purchase_table");
    var list = document.getElementById("list");
    topupform.style.display = "block";
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
    purchase_table.style.display = "none";
    list.style.display = "none";
}
function Balance() {
    //updateUser(user.userID,user);
    //alert("Balance " + Number(CurrentUserBalance));
    alert("Balance" + user.walletBalance);
    alert(user.userName);
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "none";
    cancel_table.style.display = "none";
}
//
var oID = 2000;
// let orderCart: Array<purchase>=new Array<purchase>;
var purchasebody = document.querySelector("#purchase-list tbody");
/*const Add = () => {
  
  let medicine=document.getElementById("medicine_list") as HTMLSelectElement;
  let medicineName = medicine[medicine.selectedIndex].innerHTML;
  let medicinecount=(document.getElementById("count") as HTMLInputElement).value;
  
  for(let i=0;i<medicineList.length;i++)
  {
      if(medicineName==medicineList[i].MedicineName)
      {
        if(+medicinecount < medicineList[i].MedicineCount)
          {
            orderCart.push(new purchase(CurrentUserID,medicineList[i].MedicineID,medicineName,+medicinecount,medicineList[i].MedicinePrice* +medicinecount,"Ordered"));
          }
        
      }
              
  }
  //orderCart.push(new purchase(medicineName,+medicinecount));
  purchasebody.innerHTML = "";
  orderCart.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      
      <td>${item.Medicinename}</td>
      <td>${item.Quantity}</td>
      <td>
      <button onclick="edit()">Edit</button>
      <button onclick="remove()">Delete</button>
      </td>
      <td>
      <button onclick="Buy()">Buy</button>
      </td>
    `;
    purchasebody.appendChild(row);
  });
  
};*/
/*function Buy()
{
  let medicine=document.getElementById("medicine_list") as HTMLSelectElement;
    let medicineName = medicine[medicine.selectedIndex].innerHTML;
    let medicinecount=(document.getElementById("count") as HTMLInputElement).value;
    //let flag:boolean=true;
  for (let i = 0; i < medicineList.length; i++) {

    if (medicineList[i].MedicineName == medicineName) {

        
        if (medicineList[i].MedicineCount > 0) {

            if((medicineList[i].MedicineCount >+medicinecount))
            {
              //flag:false;
              if(CurrentUserBalance>medicineList[i].MedicinePrice* +medicinecount)
              {
                alert("Purchased Successfully");
                medicineList[i].MedicineCount-=+medicinecount;
                CurrentUserBalance-=medicineList[i].MedicinePrice* +medicinecount;
                alert(CurrentUserBalance);
                alert(medicineList[i].MedicineCount);
                break;
              }
            }
          }
      }
      
  }
}

function Purchase()
{
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let purchasing=(document.getElementById("purchasing") as HTMLDivElement);
  let medicine_list=(document.getElementById("medicine_list") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="block";
  medicine_list.style.display="block";
  order_table.style.display="none";
  cancel_table.style.display="none";
}*/
var orderbody = document.querySelector("#orders tbody");
function Orders() {
    return __awaiter(this, void 0, void 0, function () {
        var orderCart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Ordertable();
                    return [4 /*yield*/, fetchOrder()];
                case 1:
                    orderCart = _a.sent();
                    orderbody.innerHTML = "";
                    orderCart.forEach(function (item) {
                        var row = document.createElement("tr");
                        row.innerHTML = "\n        <td>".concat(item.userID, "</td>\n        <td>").concat(item.medicineID, "</td>\n        <td>").concat(item.medicineName, "</td>\n        <td>").concat(item.quantity, "</td>\n        <td>").concat(item.orderPrice, "</td>\n        <td>").concat(item.orderStatus, "</td>\n        ");
                        orderbody.appendChild(row);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function Ordertable() {
    var button = document.getElementById("buttons");
    var signin = document.getElementById("signin-page");
    var signup = document.getElementById("signup-page");
    var home = document.getElementById("home-page");
    var menubar = document.getElementById("menubar");
    var medicines = document.getElementById("table");
    var topupform = document.getElementById("topup_form");
    var purchasing = document.getElementById("purchasing");
    var medicine_list = document.getElementById("medicine_list");
    var order_table = document.getElementById("order_table");
    var cancel_table = document.getElementById("cancel_table");
    var list = document.getElementById("list");
    var purchase_table = document.getElementById("purchase_table");
    signin.style.display = "none";
    button.style.display = "none";
    signup.style.display = "none";
    menubar.style.display = "block";
    home.style.display = "none";
    medicines.style.display = "none";
    topupform.style.display = "none";
    purchasing.style.display = "none";
    medicine_list.style.display = "none";
    order_table.style.display = "block";
    cancel_table.style.display = "none";
    list.style.display = "none";
    purchase_table.style.display = "none";
}
var cancelBody = document.querySelector("#cancel_order tbody");
function Cancel() {
    return __awaiter(this, void 0, void 0, function () {
        var orderCart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    CancelTable();
                    return [4 /*yield*/, fetchOrder()];
                case 1:
                    orderCart = _a.sent();
                    cancelBody.innerHTML = "";
                    orderCart.forEach(function (item) {
                        if (item.userID == user.userID && item.orderStatus == "Ordered") {
                            var row = document.createElement("tr");
                            row.innerHTML = "\n          <td>".concat(item.userID, "</td>\n          <td>").concat(item.medicineID, "</td>\n          <td>").concat(item.medicineName, "</td>\n          <td>").concat(item.quantity, "</td>\n          <td>").concat(item.orderPrice, "</td>\n          <td>").concat(item.orderStatus, "</td>\n          <input type=\"button\" onclick=\"Cancelitem(").concat(item.orderID, ")\" value=\"Remove\">\n        \n        ");
                            cancelBody.appendChild(row);
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
;
function CancelTable() {
    return __awaiter(this, void 0, void 0, function () {
        var orderCart, button, signin, signup, home, menubar, medicines, topupform, purchasing, medicine_list, order_table, cancel_table, list, purchase_table;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchOrder()];
                case 1:
                    orderCart = _a.sent();
                    button = document.getElementById("buttons");
                    signin = document.getElementById("signin-page");
                    signup = document.getElementById("signup-page");
                    home = document.getElementById("home-page");
                    menubar = document.getElementById("menubar");
                    medicines = document.getElementById("table");
                    topupform = document.getElementById("topup_form");
                    purchasing = document.getElementById("purchasing");
                    medicine_list = document.getElementById("medicine_list");
                    order_table = document.getElementById("order_table");
                    cancel_table = document.getElementById("cancel_table");
                    list = document.getElementById("list");
                    purchase_table = document.getElementById("purchase_table");
                    signin.style.display = "none";
                    button.style.display = "none";
                    signup.style.display = "none";
                    menubar.style.display = "block";
                    home.style.display = "none";
                    medicines.style.display = "none";
                    topupform.style.display = "none";
                    // purchasing.style.display="none";
                    //medicine_list.style.display="none";
                    cancel_table.style.display = "block";
                    list.style.display = "none";
                    purchase_table.style.display = "none";
                    return [2 /*return*/];
            }
        });
    });
}
var Cancelitem = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var orderCart, medicineList, i, j;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchOrder()];
            case 1:
                orderCart = _a.sent();
                return [4 /*yield*/, fetchMedicine()];
            case 2:
                medicineList = _a.sent();
                for (i = 0; i < orderCart.length; i++) {
                    if (id == orderCart[i].orderID && orderCart[i].orderStatus == "Ordered") {
                        for (j = 0; j < medicineList.length; j++) {
                            if (orderCart[i].medicineID == medicineList[j].medicineID && CurrentUserID == orderCart[i].userID) {
                                orderCart[i].orderStatus = "Cancelled";
                                updateOrder(orderCart[i].orderID, orderCart[i]);
                                user.walletBalance += orderCart[i].orderPrice;
                                updateUser(user.userID, user);
                                alert("balance" + user.walletBalance);
                                medicineList[j].medicineCount += orderCart[i].quantity;
                                updateMedicine(medicineID, medicineList[j]);
                                alert("current quantity" + medicineList[j].medicineCount);
                            }
                        }
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
//newly added
var body = document.querySelector("#purchasedata tbody");
var PurchaseTable = function () { return __awaiter(_this, void 0, void 0, function () {
    var medicineList, button, signin, signup, home, menubar, medicines, topupform, medicine_list, order_table, cancel_table, purchase_table;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchMedicine()];
            case 1:
                medicineList = _a.sent();
                body.innerHTML = "";
                medicineList.forEach(function (item) {
                    var row = document.createElement("tr");
                    row.innerHTML = "\n        <td>".concat(item.medicineName, "</td>\n        <td>").concat(item.medicinePrice, "</td>\n        <td>").concat(item.medicineCount, "</td>\n        <td>").concat(item.expiryDate, "</td>\n        <td><button onclick=\"displayGetCountForm(").concat(item.medicineID, ")\">Buy</button></td>\n        \n      ");
                    body.appendChild(row);
                });
                button = document.getElementById("buttons");
                signin = document.getElementById("signin-page");
                signup = document.getElementById("signup-page");
                home = document.getElementById("home-page");
                menubar = document.getElementById("menubar");
                medicines = document.getElementById("table");
                topupform = document.getElementById("topup_form");
                medicine_list = document.getElementById("medicine_list");
                order_table = document.getElementById("order_table");
                cancel_table = document.getElementById("cancel_table");
                purchase_table = document.getElementById("purchase_table");
                signin.style.display = "none";
                button.style.display = "none";
                signup.style.display = "none";
                menubar.style.display = "block";
                home.style.display = "none";
                medicines.style.display = "none";
                topupform.style.display = "none";
                medicine_list.style.display = "none";
                order_table.style.display = "none";
                cancel_table.style.display = "none";
                purchase_table.style.display = "block";
                return [2 /*return*/];
        }
    });
}); };
var medicineID;
function BuyMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var medicineList, quantity, i, order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchMedicine()];
                case 1:
                    medicineList = _a.sent();
                    quantity = document.getElementById("quantity").value;
                    for (i = 0; i < medicineList.length; i++) {
                        if (medicineList[i].medicineID == medicineID) {
                            if (medicineList[i].medicineCount > 0) {
                                if ((medicineList[i].medicineCount > +quantity)) {
                                    if (CurrentUserBalance > medicineList[i].medicinePrice * +quantity) {
                                        order = {
                                            orderID: 0,
                                            userID: CurrentUserID,
                                            medicineID: medicineList[i].medicineID,
                                            medicineName: medicineList[i].medicineName,
                                            quantity: +quantity,
                                            orderPrice: medicineList[i].medicinePrice * +quantity,
                                            orderStatus: "Ordered"
                                        };
                                        addOrder(order);
                                        alert("Purchased Successfully");
                                        medicineList[i].medicineCount -= +quantity;
                                        updateMedicine(medicineID, medicineList[i]);
                                        user.walletBalance -= medicineList[i].medicinePrice * +quantity;
                                        updateUser(user.userID, user);
                                        alert("your current balance: " + user.walletBalance);
                                        alert("Stock remaining: " + medicineList[i].medicineCount);
                                        break;
                                    }
                                    else {
                                        alert("Insufficient balance");
                                    }
                                }
                                else {
                                    alert("Out of stock");
                                }
                            }
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function displayGetCountForm(id) {
    return __awaiter(this, void 0, void 0, function () {
        var medicineList, i, button, signin, signup, home, menubar, medicines, topupform, purchasing, medicine_list, order_table, cancel_table, list, purchase_table;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchMedicine()];
                case 1:
                    medicineList = _a.sent();
                    for (i = 0; i < medicineList.length; i++) {
                        if (medicineList[i].medicineID == id) {
                            medicineID = medicineList[i].medicineID;
                        }
                    }
                    button = document.getElementById("buttons");
                    signin = document.getElementById("signin-page");
                    signup = document.getElementById("signup-page");
                    home = document.getElementById("home-page");
                    menubar = document.getElementById("menubar");
                    medicines = document.getElementById("table");
                    topupform = document.getElementById("topup_form");
                    purchasing = document.getElementById("purchasing");
                    medicine_list = document.getElementById("medicine_list");
                    order_table = document.getElementById("order_table");
                    cancel_table = document.getElementById("cancel_table");
                    list = document.getElementById("list");
                    purchase_table = document.getElementById("purchase_table");
                    signin.style.display = "none";
                    button.style.display = "none";
                    signup.style.display = "none";
                    menubar.style.display = "block";
                    home.style.display = "none";
                    medicines.style.display = "none";
                    topupform.style.display = "none";
                    purchasing.style.display = "none";
                    medicine_list.style.display = "none";
                    order_table.style.display = "none";
                    cancel_table.style.display = "none";
                    list.style.display = "block";
                    purchase_table.style.display = "block";
                    return [2 /*return*/];
            }
        });
    });
}
//add new medicine
function AddMed() {
    var newmed = document.getElementById("newmedicine");
    newmed.style.display = "block";
}
var medname = document.getElementById("medname");
var medcount = document.getElementById("medcount");
var medprice = document.getElementById("medprice");
function SubmitMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var name, medicineprice, medicinecount, medicineList, med, med;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = medname.value;
                    medicineprice = parseInt(medprice.value);
                    medicinecount = parseInt(medcount.value);
                    return [4 /*yield*/, fetchMedicine()];
                case 1:
                    medicineList = _a.sent();
                    if (editingID !== null) {
                        alert("submit");
                        med = {
                            medicineID: editingID,
                            medicineName: name,
                            medicinePrice: medicineprice,
                            medicineCount: medicinecount,
                            expiryDate: new Date()
                        };
                        updateMedicine(editingID, med);
                    }
                    else {
                        alert("new medicine");
                        med = {
                            medicineID: undefined,
                            medicineName: name,
                            medicinePrice: medicineprice,
                            medicineCount: medicinecount,
                            expiryDate: new Date()
                        };
                        addMedicine(med);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//renderTable();
//edit medicine
var edit = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var medicineList, newmed, item;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchMedicine()];
            case 1:
                medicineList = _a.sent();
                newmed = document.getElementById("newmedicine");
                newmed.style.display = "block";
                editingID = id;
                item = medicineList.find(function (item) { return item.medicineID === id; });
                if (item) {
                    medcount.value = String(item.medicineCount);
                    medprice.value = String(item.medicinePrice);
                    medname.value = item.medicineName;
                }
                return [2 /*return*/];
        }
    });
}); };
//adding user
function addUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5139/api/UserInfo', {
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
//fetching user
//adding medicine
function addMedicine(medicine) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5139/api/MedicineInfo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(medicine)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add medicine');
                    }
                    renderTable();
                    return [2 /*return*/];
            }
        });
    });
}
//adding orders
function addOrder(order) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:5139/api/Purchase', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to add order');
                    }
                    PurchaseTable();
                    return [2 /*return*/];
            }
        });
    });
}
//updating order
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5139/api/Purchase/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(order)
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
//update user
function updateUser(id, users) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5139/api/UserInfo/".concat(id), {
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
//update medicine
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5139/api/MedicineInfo/".concat(id), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(medicine)
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to update medicine');
                    }
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//update balance
function updateAmount(id, amount) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:5139/api/UserInfo/".concat(id, "/").concat(amount), {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(amount)
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
                    apiUrl = 'http://localhost:5139/api/UserInfo';
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
//medicine class -fetch
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5139/api/MedicineInfo';
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
//purchase class-fetch
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = 'http://localhost:5139/api/Purchase';
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
//delete
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (fetch("http://localhost:5139/api/MedicineInfo/".concat(id), {
                        method: 'DELETE'
                    }))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to delete ');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
