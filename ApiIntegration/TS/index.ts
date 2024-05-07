let CurrentUserID:number;
let CurrentUserName:string;
let CurrentUserBalance:number;
let user:UserInfo;
let editingID:number|null = null;
function SignInbutton()
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
  signin.style.display="block";
  button.style.display="none";
  signup.style.display="none";
  home.style.display="none";
  menubar.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}
async function SignIn()
{
  
  let existing=(document.getElementById("existinguserid") as HTMLInputElement).value;
  const userList=await fetchUser();
  let regex=/^\d{4}$/;
  //if(regex.test(existing))
    //{
      for(let i=0;i<userList.length;i++)
        {
          if(userList[i].userID==Number(existing))
            {
              CurrentUserID=userList[i].userID;
              CurrentUserName=userList[i].userName;
              CurrentUserBalance=userList[i].walletBalance;
              user=userList[i];
              alert("logged in successfully");
              AfterSignin();
              
            }
        }
    //}
}
interface UserInfo
{
  userID:any;
  userName:string;
  password:string;
  phone:string;
  walletBalance:number;

  // constructor(userName:string,password:string,phone:string,walletBalance:number)
  // {
  //   this.UserID="UI"+uID++;
  //   this.UserName=userName;
  //   this.Password=password;
  //   this.Phone=phone;
  //   this.walletBalance=walletBalance;
  // }
}
//displaying After sign in
function AfterSignin()
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
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";

}

//displaying Home
function Home()
{
  let greet=document.getElementById("greet") as HTMLLabelElement;
  greet.innerHTML = `<h3>Hello ${CurrentUserName}</h3>`;
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
  home.style.display="block";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}


function SignUpbutton()
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
  signup.style.display="block";
  home.style.display="none";
  menubar.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}


//let userList: Array<UserInfo> = new Array<UserInfo>;
function SignUp()
{
  
  let username=(document.getElementById("name") as HTMLInputElement).value;
  let password=(document.getElementById("pwd") as HTMLInputElement).value;
  let phone=(document.getElementById("number") as HTMLInputElement).value;
  let balance=(document.getElementById("balance") as HTMLInputElement).value;
  //userList.push(new UserInfo(username,password,phone,+balance));
  const user:UserInfo=
  {
    userID:-1,
    userName:username,
    password:password,
    phone:phone,
    walletBalance:Number(balance)

  };
  addUser(user);
  alert("success");
  AfterSignup();
}


function AfterSignup()
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
  button.style.display="block";
  signup.style.display="none";
  home.style.display="none";
  menubar.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
}

//medicine class
let MedicineIncrement=0;
const tablebody=document.querySelector("#data tbody") as HTMLTableSectionElement;
interface MedicineInfo
{
    medicineID:any;
    medicineName:string;
    medicinePrice:number;
    medicineCount:number;
    expiryDate:Date;

    // constructor(medicineName:string,medicinePrice:number,medicineCount:number,expiryDate:string)
    // {
    //     this.MedicineID=MedicineIncrement++;
    //     this.MedicineName=medicineName;
    //     this.MedicinePrice=medicinePrice;
    //     this.MedicineCount=medicineCount;
    //     this.ExpiryDate=expiryDate;

    // }

}
//default data
// let medicineList: Array<MedicineInfo> = new Array<MedicineInfo>;
// medicineList.push(new MedicineInfo("Paracetomel",8,10,"20/10/2024"));
// medicineList.push(new MedicineInfo("Colpal",5,8,"22/04/2024"));
// medicineList.push(new MedicineInfo("Stepsil",10,5,"11/05/2024"));


const renderTable = async () => {
  const medicineList=await fetchMedicine();
  tablebody.innerHTML = "";
  medicineList.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.medicineName}</td>
      <td>${item.medicinePrice}</td>
      <td>${item.medicineCount}</td>
      <td>${item.expiryDate}</td>
      <td><button onclick="edit(${item.medicineID})">Edit</button>
      <button onclick="deleteMedicine(${item.medicineID})">Delete</button></td>
    `;
    tablebody.appendChild(row);
  });
  MedicineTable();// to show the details
};

function MedicineTable()
{
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="block";
  topupform.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  list.style.display="none";
  purchase_table.style.display="none";
}



function SignOut()
{
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="block";
  signup.style.display="none";
  menubar.style.display="none";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  list.style.display="none";
  purchase_table.style.display="none";
}

function TopUp()
{
  
  let balance=(document.getElementById("amount") as HTMLInputElement).value;
 
  user.walletBalance+= Number(balance);
  updateUser(user.userID,user);
  //updateAmount(user.userID,Number(balance));
  alert("your current Balance is: "+ user.walletBalance);
  let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let purchasing=(document.getElementById("purchasing") as HTMLDivElement);
  let medicine_list=(document.getElementById("medicine_list") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  let list=document.getElementById("list") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  purchase_table.style.display="none";
  list.style.display="none";
 
}

function TopupForm()
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
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  let list=document.getElementById("list") as HTMLDivElement;
  topupform.style.display="block";
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  purchase_table.style.display="none";
  list.style.display="none";
}


function Balance()
{
  //updateUser(user.userID,user);
  //alert("Balance " + Number(CurrentUserBalance));
  alert("Balance" + user.walletBalance);
  alert(user.userName);
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
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";

}

//
let oID=2000;
interface Purchase
{
  orderID:any;
  userID:number;
  
  medicineID:number;
  medicineName:string;
  quantity:number;
  orderPrice:number;
  orderStatus:string;
  // constructor(userID:string,medicineID:number,medicinename:string,quantity:number,price:number,orderstatus:string)
  // {
  //   this.OrderID=+oID++;
  //   this.UserID=userID;
  //   this.MedicineID=medicineID;
  //   this.Medicinename=medicinename;
  //   this.Quantity=quantity;
  //   this.OrderPrice=price;
  //   this.OrderStatus=orderstatus;
  // }

}


// let orderCart: Array<purchase>=new Array<purchase>;
const purchasebody=(document.querySelector("#purchase-list tbody") as HTMLTableSectionElement);

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

const orderbody=document.querySelector("#orders tbody") as HTMLTableSectionElement;
async function Orders()
{
  Ordertable();
  const orderCart=await fetchOrder();
  orderbody.innerHTML = "";
    orderCart.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.userID}</td>
        <td>${item.medicineID}</td>
        <td>${item.medicineName}</td>
        <td>${item.quantity}</td>
        <td>${item.orderPrice}</td>
        <td>${item.orderStatus}</td>
        `;
        orderbody.appendChild(row);
      });
}

function Ordertable()
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
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="block";
  cancel_table.style.display="none";
  list.style.display="none";
  purchase_table.style.display="none";
}

const cancelBody=document.querySelector("#cancel_order tbody") as HTMLSelectElement;
async function Cancel()
{
  CancelTable();
  const orderCart=await fetchOrder();
  cancelBody.innerHTML = "";
    orderCart.forEach((item) => {
      if(item.userID==user.userID && item.orderStatus=="Ordered")
        {
          const row = document.createElement("tr");
          row.innerHTML = `
          <td>${item.userID}</td>
          <td>${item.medicineID}</td>
          <td>${item.medicineName}</td>
          <td>${item.quantity}</td>
          <td>${item.orderPrice}</td>
          <td>${item.orderStatus}</td>
          <input type="button" onclick="Cancelitem(${item.orderID})" value="Remove">
        
        `;
        cancelBody.appendChild(row);
        }
    });
     
  };

async function CancelTable()
{
  const orderCart=await fetchOrder();
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
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  // purchasing.style.display="none";
  //medicine_list.style.display="none";
  
  cancel_table.style.display="block";
  list.style.display="none";
  purchase_table.style.display="none";
}
const Cancelitem=async (id:number)=>
  {
      const orderCart=await fetchOrder();
      const medicineList=await fetchMedicine();
      for(let i=0;i<orderCart.length;i++)
        {
          if(id==orderCart[i].orderID && orderCart[i].orderStatus=="Ordered")
          {
            for(let j=0;j<medicineList.length;j++)
              {
                if(orderCart[i].medicineID==medicineList[j].medicineID && CurrentUserID==orderCart[i].userID)
                  {
                    orderCart[i].orderStatus="Cancelled";
                    updateOrder(orderCart[i].orderID,orderCart[i]);
                    user.walletBalance+=orderCart[i].orderPrice;
                    updateUser(user.userID,user);
                    alert("balance" + user.walletBalance);
                    medicineList[j].medicineCount+=orderCart[i].quantity;
                    updateMedicine(medicineID,medicineList[j]);
                    alert("current quantity" + medicineList[j].medicineCount);
                  }
              }
          }
        }
  }

  //newly added
  const body=document.querySelector("#purchasedata tbody") as HTMLTableSectionElement;
  const PurchaseTable = async () => {
    //displaying
    const medicineList=await fetchMedicine();
    body.innerHTML = "";
    medicineList.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.medicineName}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.medicineCount}</td>
        <td>${item.expiryDate}</td>
        <td><button onclick="displayGetCountForm(${item.medicineID})">Buy</button></td>
        
      `;
      body.appendChild(row);
    });
      let button=document.getElementById("buttons") as HTMLDivElement;
  let signin=(document.getElementById("signin-page") as HTMLDivElement);
  let signup=(document.getElementById("signup-page") as HTMLDivElement);
  let home=(document.getElementById("home-page") as HTMLDivElement);
  let menubar=(document.getElementById("menubar") as HTMLDivElement);
  let medicines=(document.getElementById("table") as HTMLDivElement);
  let topupform=(document.getElementById("topup_form") as HTMLDivElement);
  let medicine_list=(document.getElementById("medicine_list") as HTMLDivElement);
  let order_table=(document.getElementById("order_table") as HTMLDivElement);
  let cancel_table=(document.getElementById("cancel_table") as HTMLDivElement);
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  purchase_table.style.display="block";
  };


let medicineID:number;
async function BuyMedicine()
{
    const medicineList=await fetchMedicine();
    let quantity=(document.getElementById("quantity") as HTMLInputElement).value;
    
    for (let i = 0; i < medicineList.length; i++) {
      if (medicineList[i].medicineID == medicineID) {
          if (medicineList[i].medicineCount > 0) {
  
              if((medicineList[i].medicineCount >+quantity))
              {
                if(CurrentUserBalance>medicineList[i].medicinePrice* +quantity)
                {
                  //orderCart.push(new purchase(CurrentUserID,medicineList[i].MedicineID,medicineList[i].MedicineName,+quantity,medicineList[i].MedicinePrice* +quantity,"Ordered"));
                  const order:Purchase={
                    orderID: 0,
                    userID: CurrentUserID,
                    medicineID: medicineList[i].medicineID,
                    medicineName: medicineList[i].medicineName,
                    quantity: +quantity,
                    orderPrice: medicineList[i].medicinePrice* +quantity,
                    orderStatus: "Ordered"
                  };
                  addOrder(order);
                  alert("Purchased Successfully");
                  medicineList[i].medicineCount-=+quantity;
                  updateMedicine(medicineID,medicineList[i])
                  user.walletBalance-=medicineList[i].medicinePrice* +quantity;
                  updateUser(user.userID,user);
                  alert("your current balance: "+ user.walletBalance);
                  alert("Stock remaining: "+ medicineList[i].medicineCount);
                  break;
                }
                else{
                  alert("Insufficient balance");
                }
              }
              else{
                alert("Out of stock");
              }
            }
        }
        
    }
}

async function displayGetCountForm(id:number)
{
  const medicineList=await fetchMedicine();
  for(let i=0;i<medicineList.length;i++)
    {
      if(medicineList[i].medicineID==id)
        {
          medicineID=medicineList[i].medicineID;
        }
    }
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
  let list=document.getElementById("list") as HTMLDivElement;
  let purchase_table=document.getElementById("purchase_table") as HTMLDivElement;
  signin.style.display="none";
  button.style.display="none";
  signup.style.display="none";
  menubar.style.display="block";
  home.style.display="none";
  medicines.style.display="none";
  topupform.style.display="none";
  purchasing.style.display="none";
  medicine_list.style.display="none";
  order_table.style.display="none";
  cancel_table.style.display="none";
  list.style.display="block";
  purchase_table.style.display="block";
  
}

//add new medicine
function AddMed()
{
  let newmed=document.getElementById("newmedicine") as HTMLDivElement;
  newmed.style.display="block";
}

let medname=(document.getElementById("medname") as HTMLInputElement);
let medcount=(document.getElementById("medcount") as HTMLInputElement);
let medprice=(document.getElementById("medprice") as HTMLInputElement);
async function SubmitMedicine()
{
  
  let name=medname.value;
  let medicineprice=parseInt(medprice.value);
  let medicinecount=parseInt(medcount.value);
  const medicineList=await fetchMedicine();
  if(editingID!==null)
    {
      alert("submit");
      const med:MedicineInfo=
      {
        
        medicineID: editingID,
        medicineName: name,
        medicinePrice: medicineprice,
        medicineCount: medicinecount,
        expiryDate: new Date()
      }
      updateMedicine(editingID,med);
    }
    else{
      alert("new medicine");
      const med:MedicineInfo=
      {
        medicineID: undefined,
        medicineName: name,
        medicinePrice: medicineprice,
        medicineCount: medicinecount,
        expiryDate: new Date()
      }
      addMedicine(med);
    }
  
}
  
  //renderTable();


//edit medicine

const edit = async (id: number) => {
  const medicineList=await fetchMedicine();
  let newmed=document.getElementById("newmedicine") as HTMLDivElement;
  newmed.style.display="block";
  editingID = id;
  const item = medicineList.find((item) => item.medicineID === id);
  if (item) {
    medcount.value=String(item.medicineCount);
    medprice.value=String(item.medicinePrice);
    medname.value=item.medicineName;

  }
};
 
//adding user
async function addUser(user: UserInfo):Promise<void>
{
  const response=await fetch('http://localhost:5139/api/UserInfo',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    });
    if(!response.ok)
      {
        throw new Error('Failed to add user');
      }
}

//fetching user


//adding medicine
async function addMedicine(medicine: MedicineInfo):Promise<void>
{
  const response=await fetch('http://localhost:5139/api/MedicineInfo',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(medicine)
    });
    if(!response.ok)
      {
        throw new Error('Failed to add medicine');
      }
      renderTable();
}

//adding orders
async function addOrder(order: Purchase):Promise<void>
{
  const response=await fetch('http://localhost:5139/api/Purchase',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(order)
    });
    if(!response.ok)
      {
        throw new Error('Failed to add order');
      }
      PurchaseTable();
}

//updating order
async function updateOrder(id:number,order:Purchase):Promise<void>
{
  const response=await fetch (`http://localhost:5139/api/Purchase/${id}`,{
  method:'PUT' ,
  headers:
  {
    'Content-Type':'application/json'
  } ,
  body:JSON.stringify(order)

  });
  if(!response.ok)
    {
      throw new Error('Failed to update order');
    }
    return await response.json();
}
//update user
async function updateUser(id:number,users:UserInfo):Promise<void>
{
  const response=await fetch (`http://localhost:5139/api/UserInfo/${id}`,{
  method:'PUT' ,
  headers:
  {
    'Content-Type':'application/json'
  } ,
  body:JSON.stringify(users)

  });
  if(!response.ok)
    {
      throw new Error('Failed to update order');
    }
    return await response.json();
}

//update medicine
async function updateMedicine(id:number,medicine:MedicineInfo):Promise<void>
{
  const response=await fetch(`http://localhost:5139/api/MedicineInfo/${id}`,
    {
      method:'PUT',
      headers:
  {
    'Content-Type':'application/json'
  } ,
  body:JSON.stringify(medicine)

  });
  if(!response.ok)
    {
      throw new Error('Failed to update medicine');
    }
    return await response.json();
    }
  
//update balance
async function updateAmount(id:number,amount:number):Promise<void>
{
  const response=await fetch (`http://localhost:5139/api/UserInfo/${id}/${amount}`,{
  method:'PUT' ,
  headers:
  {
    'Content-Type':'application/json'
  } ,
  body:JSON.stringify(amount)

  });
  if(!response.ok)
    {
      throw new Error('Failed to update order');
    }
    return await response.json();
}



//user class- fetch
async function fetchUser(): Promise<UserInfo[]>
{
  const apiUrl='http://localhost:5139/api/UserInfo';
  const response=await fetch(apiUrl);
  if(!response.ok)
    {
      throw new Error('Failed to fetch User');
      
    }
    return await response.json();
}

//medicine class -fetch
async function fetchMedicine(): Promise<MedicineInfo[]>
{
  const apiUrl='http://localhost:5139/api/MedicineInfo';
  const response=await fetch(apiUrl);
  if(!response.ok)
    {
      throw new Error('Failed to fetch Medicine');
      
    }
    return await response.json();
}

//purchase class-fetch
async function fetchOrder(): Promise<Purchase[]>
{
  const apiUrl='http://localhost:5139/api/Purchase';
  const response=await fetch(apiUrl);
  if(!response.ok)
    {
      throw new Error('Failed to fetch order');
      
    }
    return await response.json();
}

//delete
async function deleteMedicine(id:number):Promise<void>
{
  const response=await(fetch(`http://localhost:5139/api/MedicineInfo/${id}`,
    {
      method:'DELETE'
    }
  ));
  if(!response.ok)
    {
      throw new Error('Failed to delete ');
    }
}

