
let CardnumberIncrement=1000;
interface UserInfo
{
    cardNumber:number;
    userName:string;
    phone:string;
    balance:number;

   
}
let user:UserInfo;
//user list--default data
// let userList:Array<UserInfo>=new Array<UserInfo>;
// userList.push(new UserInfo("Ravi","987654321",1000));
// userList.push(new UserInfo("Baskaran","1234567890",1000));


let TicketIDIncrement=2000;

interface TicketFair
{
    ticketID:number;
    fromLocation:string;
    toLocation:string;
    fair:number;

    
}
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
let TravelIDIncrement=3000;
interface Travel{
    travelID:number;
    cardNumber:number;
    fromLocation:string;
    toLocation:string;
    travelCost:number;
    status:string;
    date:Date;

    // constructor(cardNumber:string,fromLocation:string,toLocation:string,travelCost:number,status:string,date:string)
    // {
    //     this.TravelID=TravelIDIncrement++;
    //     this.CardNumber=cardNumber;
    //     this.FromLocation=fromLocation;
    //     this.ToLocation=toLocation;
    //     this.TravelCost=travelCost;
    //     this.Status=status;
    //     this.Date=date;
    // }
}
//let travelList:Array<Travel>=new Array<Travel>;

let CurrentUser:number;
let CurrentUserBalance:number;
let CurrentUserName:string;

function SigninButton()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="block";
    signup_page.style.display="none";
    menubar.style.display="none";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";


}

async function SignIn()
{
    let flag:boolean=true;
    let cardnumber=(document.getElementById("cardNumber") as HTMLInputElement).value;
    let regex=/^CMRL\d{4}$/;
    const userList=await fetchUser()
    // if(regex.test(cardnumber))
    //     {
            for(let i=0;i<userList.length;i++)
                {
                    if(userList[i].cardNumber==Number(cardnumber))
                    {
                        flag=false;
                        alert("Logged In Successfully");
                        CurrentUser=userList[i].cardNumber;
                        CurrentUserBalance=userList[i].balance;
                        CurrentUserName=userList[i].userName;
                        user=userList[i];
                        AfterSignin();
                    }
                }
                if(flag)
                    {
                        alert("Invalid Card Number");
                    }
        }

    
//} 
function AfterSignin()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
}

function SignUpbutton()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="block";
    menubar.style.display="none";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
}

async function SignUp()
{
    const userList=await fetchUser()
    //let email=(document.getElementById("") as HTMLInputElement).value;
    let username=(document.getElementById("name") as HTMLInputElement).value;
    let passsword=(document.getElementById("pwd") as HTMLInputElement).value;
    let phone=(document.getElementById("phone") as HTMLInputElement).value;
    let balanceAmount=(document.getElementById("balance") as HTMLInputElement).value;
    //userList.push(new UserInfo(username,phone,parseInt(BalanceAmount)));
    const user:UserInfo=
    {
        cardNumber: -1,
        userName: username,
        phone: phone,
        balance: Number(balanceAmount)
    }
    addUser(user);
    Aftersignup();
}

function Aftersignup()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="block";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="none";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="none";
        history.style.display="none";
        count.style.display="none";
}
function Home()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="block";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    let greet=document.getElementById("greet") as HTMLLabelElement;
    greet.innerHTML=`<h2>Welcome ${CurrentUserName} </h2>`;

}

function Balance()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    //alert("your Current Balance is: "+CurrentUserBalance);
    alert(user.balance);
}

function RechargeFormDisplay()
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="block";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    
}
function Recharge()
{
    let topupamount=(document.getElementById("top_up") as HTMLInputElement).value;
    //CurrentUserBalance=CurrentUserBalance+ +topupamount;
    user.balance=user.balance+ Number(topupamount);
    updateUser(user.cardNumber,user);
    alert(user.balance);
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="none";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
}

let fairTableBody=document.querySelector("#fair tbody") as HTMLTableSectionElement;
const FairDetails = async ()=>
{
    let buttons=document.getElementById("buttons") as HTMLDivElement;
    let signin_page=document.getElementById("signin_page") as HTMLDivElement;
    let signup_page=document.getElementById("signup_page") as HTMLDivElement;
    let menubar=document.getElementById("menubar") as HTMLDivElement;
    let home=document.getElementById("home") as HTMLDivElement;
    let topup=document.getElementById("topup") as HTMLDivElement;
    let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
    let travel=document.getElementById("travel") as HTMLDivElement;
    let history=document.getElementById("history") as HTMLDivElement;
    let count=document.getElementById("count") as HTMLDivElement;
    buttons.style.display="none";
    signin_page.style.display="none";
    signup_page.style.display="none";
    menubar.style.display="block";
    home.style.display="none";
    topup.style.display="none";
    FairDetails.style.display="block";
    travel.style.display="none";
    history.style.display="none";
    count.style.display="none";
    fairTableBody.innerHTML = "";


    const ticketFairList=await fetchTicket();
    ticketFairList.forEach((item) => {
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${item.fromLocation}</td>
        <td>${item.toLocation}</td>
        <td>${item.fair}</td>
        `;
        fairTableBody.appendChild(row);
    });
    
};

let travelBody=document.querySelector("#makeTravel tbody") as HTMLTableSectionElement;
const Travelbtn =async ()=>
{
    const ticketFairList=await fetchTicket();
    travelBody.innerHTML = "";
    ticketFairList.forEach((item)=>
        {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${item.fromLocation}</td>
            <td>${item.toLocation}</td>
            <td>${item.fair}</td>
            <td><input type="button" onclick="DisplayCountForm('${item.fromLocation}','${item.toLocation}')" value="BuyTickets"></td>
            `;
            travelBody.appendChild(row);
        });
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="none";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="block";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="block";
        history.style.display="none";
        count.style.display="none";
        
    
};

let fromLocation;
let toLocation;
async function confirmTravel()
{
    const ticketFairList=await fetchTicket();
    let quantity=(document.getElementById("getcount") as HTMLInputElement).value;
    for(let i=0;i<ticketFairList.length;i++)
        {
            if(ticketFairList[i].fromLocation==fromLocation && ticketFairList[i].toLocation==toLocation)
            {
                let price=ticketFairList[i].fair * +quantity;
                if(CurrentUserBalance>=price)
                    {
                        let date=new Date();
                        let day=date.getDate();
                        let month=date.getMonth();
                        let year=date.getFullYear();
                        let currentDate=day +'/'+month+'/'+year;
                        const travel:Travel=
                        {
                            travelID: 0,
                            cardNumber: CurrentUser,
                            fromLocation: ticketFairList[i].fromLocation,
                            toLocation: ticketFairList[i].toLocation,
                            travelCost: price,
                            status: "Booked",
                            date: new Date()
                        }
                        addTravel(travel);
                        //CurrentUserBalance=CurrentUserBalance-price;
                        
                        user.balance=user.balance-price;
                        updateUser(user.cardNumber,user);
                        alert("Tickets Booked");
                        alert(user.balance);
                        
                        //travelList.push(new Travel(CurrentUser,ticketFairList[i].FromLocation,ticketFairList[i].ToLocation,ticketFairList[i].Fair,"Booked",currentDate));
                    }
            }
        }
}

async function DisplayCountForm(from : string,to:string)
{
    const ticketFairList=await fetchTicket()
    for(let i=0;i<ticketFairList.length;i++)
        {
            if(ticketFairList[i].fromLocation==from && ticketFairList[i].toLocation==to)
                {
                    fromLocation=ticketFairList[i].fromLocation;
                    toLocation=ticketFairList[i].toLocation;
                }
        }
        // let form=document.getElementById("count") as HTMLDivElement;
        // form.style.display="block";
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="none";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="block";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="block";
        history.style.display="none";
        count.style.display="block";
    

}

let historybody=document.querySelector("#travelHistory tbody") as HTMLTableSectionElement;
const TravelDetails =async ()=>
    {
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="none";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="block";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="none";
        history.style.display="block";
        count.style.display="none";


        const travelList=await fetchTravel();
        historybody.innerHTML="";
        travelList.forEach((item)=>
        {
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${item.fromLocation}</td>
            <td>${item.toLocation}</td>
            <td>${item.travelCost}</td>
            <td>${item.date}</td>
            <td>${item.status}</td>
            `;
            historybody.appendChild(row);
        });
    };

    function Signout()
    {
        let buttons=document.getElementById("buttons") as HTMLDivElement;
        let signin_page=document.getElementById("signin_page") as HTMLDivElement;
        let signup_page=document.getElementById("signup_page") as HTMLDivElement;
        let menubar=document.getElementById("menubar") as HTMLDivElement;
        let home=document.getElementById("home") as HTMLDivElement;
        let topup=document.getElementById("topup") as HTMLDivElement;
        let FairDetails=document.getElementById("FairDetails") as HTMLDivElement;
        let travel=document.getElementById("travel") as HTMLDivElement;
        let history=document.getElementById("history") as HTMLDivElement;
        let count=document.getElementById("count") as HTMLDivElement;
        buttons.style.display="block";
        signin_page.style.display="none";
        signup_page.style.display="none";
        menubar.style.display="none";
        home.style.display="none";
        topup.style.display="none";
        FairDetails.style.display="none";
        travel.style.display="none";
        history.style.display="none";
        count.style.display="none";
    }


//adding user
async function addUser(user: UserInfo):Promise<void>
{
  const response=await fetch('http://localhost:5241/api/userInfo',
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

//adding Travel
async function addTravel(travel: Travel):Promise<void>
{
  const response=await fetch('http://localhost:5241/api/Travel',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(travel)
    });
    if(!response.ok)
      {
        throw new Error('Failed to add order');
      }
      //PurchaseTable();
}

//update user
async function updateUser(id:number,users:UserInfo):Promise<void>
{
  const response=await fetch (`http://localhost:5241/api/userInfo/${id}`,{
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

//updating balance
async function updateBalance(id:number,amount:number):Promise<void> {
    const response=await fetch(`http://localhost:5241/api/UserInfo/${id}${amount}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(amount)
    });
    if(!response.ok)
        {
            throw new Error('Failed to update Balance');
        }
    
}

//updating Travel
async function updateTravel(id:number,travel:Travel):Promise<void>
{
  const response=await fetch (`http://localhost:5241/api/Travel/${id}`,{
  method:'PUT' ,
  headers:
  {
    'Content-Type':'application/json'
  } ,
  body:JSON.stringify(travel)

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
  const apiUrl='http://localhost:5241/api/userInfo';
  const response=await fetch(apiUrl);
  if(!response.ok)
    {
      throw new Error('Failed to fetch User');
      
    }
    return await response.json();
}

//Travel class -fetch
async function fetchTravel(): Promise<Travel[]>
{
  const apiUrl='http://localhost:5241/api/Travel';
  const response=await fetch(apiUrl);
  if(!response.ok)
    {
      throw new Error('Failed to fetch Medicine');
      
    }
    return await response.json();
}

//TicketFair class-fetch
async function fetchTicket(): Promise<TicketFair[]>
{
  const apiUrl='http://localhost:5241/api/TicketFair';
  const response=await fetch(apiUrl);
  if(!response.ok)
    {
      throw new Error('Failed to fetch order');
      
    }
    return await response.json();
}