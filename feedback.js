const formName = document.getElementById("Aromatic_Bar");
const divClass = document.querySelector(".Customer")
const Name = formName["custName"];
const Email = formName["custEmail"];
const Phone = formName["custPhone"];
const Q1 = formName["Q1"];
const Q2 = formName["Q2"];
const Q3 = formName["Q3"];
const Q4 = formName["Q4"];

const customer = JSON.parse(localStorage.getItem("customer"))|| [];

const addCustomer = (name,email,phone,q1,q2,q3,q4) => {
    customer.push({
        name,
        email,
        phone,
        q1,
        q2,
        q3,
        q4
    });
    localStorage.setItem("customer",JSON.stringify("customer"));
    return {name,email,phone,q1,q2,q3,q4};
};

const createCustomer = ({name,email,phone,q1,q2,q3,q4}) => {
    const custDiv = document.createElement("div");
    const custName = document.createElement("h2");
    const custEmail = document.createElement("p");
    const custPhone = document.createElement("p");
    const custQ1 = document.createElement("p");
    const custQ2 = document.createElement("p");
    const custQ3 = document.createElement("p");
    const custQ4 = document.createElement("p");

    custName.innerText = "Customer Name:"+name;
    custEmail.innerText = "Customer Email:"+email;
    custPhone.innerText = "Customer Phone:"+phone;
    custQ1.innerText = "Please rate the quality of the service you received from your host:"+q1;
    custQ2.innerText = "Please rate the quality of your beverage:"+q2;
    custQ3.innerText = "Was our restaurant clean?:"+q3;
    custQ4.innerText = "Please rate your overall dining experience:"+q4;
    

    custDiv.append(custName,custEmail,custPhone,custQ1,custQ2,custQ3,custQ4);
    divClass.appendChild(custDiv);

    divClass.style.display = customer.length === 0 ? "none" : "flex";
};

divClass.style.display = customer.length === 0 ? "none" : "flex";

customer.forEach(createCustomer);

formName.onsubmit = e =>{
    e.preventDefault();

    const newCustomer = addCustomer(
        Name.value,
        Email.value,
        Phone.value,
        Q1.value,
        Q2.value,
        Q3.value,
        Q4.value
    );

    createCustomer(newCustomer);

    Name.value = "";
    Email.value = "";
    Phone.value = "";
    Q1.value = "";
    Q2.value = "";
    Q3.value = "";
    Q4.value = "";
};