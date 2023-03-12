let date = document.getElementById('date');

let company = document.getElementById('company');

let amount = document.getElementById('amount');

const add = document.getElementById('add');



add.addEventListener('click', (e) => {

    let data = {

        date: date.value,
        company: company.value,
        amount: amount.value,

    }

const li = document.createElement('li');
const del = document.createElement('button');
del.className = 'delete';
del.innerHTML = 'X';


                        

del.addEventListener('click', (e) => {
    
    e.target.parentElement.remove();

});

li.innerHTML = `<span>${data.date}<span></span>  <span>${data.company} <span ></span> <span>  </span>  <span>${data.amount}$ </span> `;
document.getElementById('list').appendChild(li);
li.appendChild(del);
li.appendChild(edt);

})

// store the data in the local storage and how to retrieve it from the local storage when the page is refreshed



//login page logdic

// Path: login.js

const login = document.getElementById('login');

const email = document.getElementById('email');





