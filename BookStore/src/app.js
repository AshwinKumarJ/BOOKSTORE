dropdown = document.querySelectorAll('.dropdown-item');
forms = document.querySelectorAll('.forms');

dropdown.forEach(function(item) {
  item.addEventListener('click', function() {
    
    forms.forEach(function(form) {
      form.style.display = "none";
    })

    showform = document.getElementById(this.id + 'form');
    showform.style.display = "block";
  });
})

function clearInputs() {
    var inputElements = document.querySelectorAll('input');

    inputElements.forEach(function (element) {
        element.value = '';
    });
}

var App = {

  init: function() {
    return App.BindEvents();
  },

  SendPostRequest: async function(endpoint, method, data){
    let response = await fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    let res = await response.json();
    return res; 
  },

  BindEvents: function() {
    try{
      document.getElementById("bookinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewBook();
      });
    }
    catch{

    }

    try{
      document.getElementById("empinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewEmployee();
      });
    }
    catch{

    }

    try{
      document.getElementById("pubinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewPublisher();
      });
    }
    catch{

    }

    try{
      document.getElementById("authorinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("orderinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewOrder();
      });
    }
    catch{

    }

    try{
      document.getElementById("invinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewInventory();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookauthorinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewBookAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookpublisherinsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewBookPublisher();
      });
    }
    catch{

    }

    try{
      document.getElementById("logininsertform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.NewLogin();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookdeleteform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.DeleteBook();
      });
    }
    catch{

    }

    try{
      document.getElementById("empdeleteform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.DeleteEmployee();
      });
    }
    catch{

    }

    try{
      document.getElementById("pubdeleteform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.DeletePublisher();
      });
    }
    catch{

    }

    try{
      document.getElementById("authordeleteform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.DeleteAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("booksearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchBook();
      });
    }
    catch{

    }

    try{
      document.getElementById("empsearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchEmployee();
      });
    }
    catch{

    }

    try{
      document.getElementById("pubsearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchPublisher();
      });
    }
    catch{

    }

    try{
      document.getElementById("authorsearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("ordersearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchOrder();
      });
    }
    catch{

    }

    try{
      document.getElementById("invsearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchInventory();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookauthorsearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchBookAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookpublishersearchform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.SearchBookPublisher();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateBook();
      });
    }
    catch{

    }

    try{
      document.getElementById("empupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateEmployee();
      });
    }
    catch{

    }

    try{
      document.getElementById("pubupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdatePublisher();
      });
    }
    catch{

    }

    try{
      document.getElementById("authorupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("orderupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateOrder();
      });
    }
    catch{

    }

    try{
      document.getElementById("invupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateInventory();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookauthorupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateBookAuthor();
      });
    }
    catch{

    }

    try{
      document.getElementById("bookpublisherupdateform").addEventListener("submit", function(event) {
        event.preventDefault();

        return App.UpdateBookPublisher();
      });
    }
    catch{

    }
  },

  NewBook: async function() {

    var form = document.querySelector("#bookinsertform");
    const formdata = new FormData(form);

    const data = {
      title: formdata.get("title"),
      isbn: formdata.get("isbn"), 
      year: formdata.get("year"),
      genre: formdata.get("genre"),
      price: formdata.get("price"),
      version: formdata.get("version"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newbook";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Book Insert Success !!");
  },

  NewEmployee: async function() {

    var form = document.querySelector("#empinsertform");
    const formdata = new FormData(form);

    const data = {
      empid: formdata.get("empid"),
      name: formdata.get("name"), 
      phone: formdata.get("phone"),
      address: formdata.get("address"),
      email: formdata.get("email"),
      job: formdata.get("job"),
      salary: formdata.get("salary"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newemployee";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Employee Insert Success !!");
  },

  NewPublisher: async function() {

    var form = document.querySelector("#pubinsertform");
    const formdata = new FormData(form);

    const data = {
      pubid: formdata.get("pubid"),
      name: formdata.get("name"), 
      phone: formdata.get("phone"),
      email: formdata.get("email"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newpublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Publisher Insert Success !!");
  },

  NewAuthor: async function() {

    var form = document.querySelector("#authorinsertform");
    const formdata = new FormData(form);

    const data = {
      authid: formdata.get("authid"),
      name: formdata.get("name"), 
      phone: formdata.get("phone"),
      email: formdata.get("email"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Author Insert Success !!");
  },

  NewOrder: async function() {

    var form = document.querySelector("#orderinsertform");
    const formdata = new FormData(form);

    const data = {
      orderid: formdata.get("orderid"),
      isbn: formdata.get("isbn"), 
      qty: formdata.get("qty"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/neworder";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Order Insert Success !!");
  },

  NewInventory: async function() {

    var form = document.querySelector("#invinsertform");
    const formdata = new FormData(form);

    const data = {
      invid: formdata.get("invid"),
      isbn: formdata.get("isbn"), 
      stock: formdata.get("stock"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newinventory";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Inventory Insert Success !!");
  },
  
  NewBookAuthor: async function() {

    var form = document.querySelector("#bookauthorinsertform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"), 
      authid: formdata.get("authid"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newbookauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Book Author Insert Success !!");
  },

  NewBookPublisher: async function() {

    var form = document.querySelector("#bookpublisherinsertform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"), 
      pubid: formdata.get("pubid"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newbookpublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Book Publisher Insert Success !!");
  },

  NewLogin: async function() {

    var form = document.querySelector("#logininsertform");
    const formdata = new FormData(form);

    const data = {
      empid: formdata.get("empid"), 
      username: formdata.get("username"),
      pwd: formdata.get("pwd"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/newlogin";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Login Insert Success !!");
  },

  DeleteBook: async function() {

    var form = document.querySelector("#bookdeleteform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/deletebook";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Book Delete Success !!");
  },

  DeleteEmployee: async function() {

    var form = document.querySelector("#empdeleteform");
    const formdata = new FormData(form);

    const data = {
      empid: formdata.get("empid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/deleteemployee";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Employee Delete Success !!");
  },

  DeletePublisher: async function() {

    var form = document.querySelector("#pubdeleteform");
    const formdata = new FormData(form);

    const data = {
      pubid: formdata.get("pubid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/deletepublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Publisher Delete Success !!");
  },

  DeleteAuthor: async function() {

    var form = document.querySelector("#authordeleteform");
    const formdata = new FormData(form);

    const data = {
      authid: formdata.get("authid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/deleteauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    alert("Author Delete Success !!");
  },

  SearchBook: async function() {

    var form = document.querySelector("#booksearchform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchbook";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("isbns").value = data.isbn;
    document.getElementById("titles").value = resdata[0]['title'];
    document.getElementById("years").value = resdata[0]['year'];
    document.getElementById("genres").value = resdata[0]['genre'];
    document.getElementById("prices").value = resdata[0]['price'];
    document.getElementById("versions").value = resdata[0]['version'];

    await alert("Book Search Success !!");
  },

  SearchEmployee: async function() {

    var form = document.querySelector("#empsearchform");
    const formdata = new FormData(form);

    const data = {
      empid: formdata.get("empid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchemployee";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("empid").value = data.empid;
    document.getElementById("empname").value = resdata[0]['name'];
    document.getElementById("empphone").value = resdata[0]['phone'];
    document.getElementById("empaddress").value = resdata[0]['address'];
    document.getElementById("empemail").value = resdata[0]['email'];
    document.getElementById("empjob").value = resdata[0]['job'];
    document.getElementById("empsalary").value = resdata[0]['salary'];

    await alert("Employee Search Success !!");
  },

  SearchPublisher: async function() {

    var form = document.querySelector("#pubsearchform");
    const formdata = new FormData(form);

    const data = {
      pubid: formdata.get("pubid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchpublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("pubid").value = data.pubid;
    document.getElementById("pubname").value = resdata[0]['name'];
    document.getElementById("pubphone").value = resdata[0]['phone'];
    document.getElementById("pubemail").value = resdata[0]['email'];

    await alert("Publisher Search Success !!");
  },

  SearchAuthor: async function() {

    var form = document.querySelector("#authorsearchform");
    const formdata = new FormData(form);

    const data = {
      authid: formdata.get("authid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("authid").value = data.authid;
    document.getElementById("authname").value = resdata[0]['name'];
    document.getElementById("authphone").value = resdata[0]['phone'];
    document.getElementById("authemail").value = resdata[0]['email'];

    await alert("Author Search Success !!");
  },

  SearchOrder: async function() {

    var form = document.querySelector("#ordersearchform");
    const formdata = new FormData(form);

    const data = {
      orderid: formdata.get("orderid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchorder";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("orderid").value = data.orderid;
    document.getElementById("orderisbn").value = resdata[0]['isbn'];
    document.getElementById("orderqty").value = resdata[0]['qty'];
    document.getElementById("orderamount").value = resdata[0]['amount'];

    await alert("Order Search Success !!");
  },

  SearchInventory: async function() {

    var form = document.querySelector("#invsearchform");
    const formdata = new FormData(form);

    const data = {
      invid: formdata.get("invid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchinventory";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("invid").value = data.invid;
    document.getElementById("invisbn").value = resdata[0]['isbn'];
    document.getElementById("invstock").value = resdata[0]['stock'];

    await alert("Inventory Search Success !!");
  },

  SearchBookAuthor: async function() {

    var form = document.querySelector("#bookauthorsearchform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchbookauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("baisbn").value = data.isbn;
    document.getElementById("bookauthid").value = resdata[0]['authid'];
    document.getElementById("bookauthname").value = resdata[0]['authname'];

    await alert("Book Author Search Success !!");
  },

  SearchBookPublisher: async function() {

    var form = document.querySelector("#bookpublishersearchform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/searchbookpublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    console.log(resdata);

    document.getElementById("bpisbn").value = data.isbn;
    document.getElementById("bookpubid").value = resdata[0]['pubid'];
    document.getElementById("bookpubname").value = resdata[0]['pubname'];

    await alert("Book Publisher Search Success !!");
  },

  UpdateBook: async function() {

    var form = document.querySelector("#bookupdateform");
    const formdata = new FormData(form);

    const data = {
      title: formdata.get("title"),
      isbn: formdata.get("isbn"), 
      year: formdata.get("year"),
      genre: formdata.get("genre"),
      price: formdata.get("price"),
      version: formdata.get("version"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/updatebook";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Book Update Success !!");
  },

  UpdateEmployee: async function() {

    var form = document.querySelector("#empupdateform");
    const formdata = new FormData(form);

    const data = {
      empid: formdata.get("empid"),
      name: formdata.get("empname"),
      phone: formdata.get("empphone"), 
      address: formdata.get("empaddress"),
      email: formdata.get("empemail"),
      job: formdata.get("empjob"),
      salary: formdata.get("empsalary"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/updateemployee";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Employee Update Success !!");
  },

  UpdatePublisher: async function() {

    var form = document.querySelector("#pubupdateform");
    const formdata = new FormData(form);

    const data = {
      pubid: formdata.get("pubid"),
      name: formdata.get("pubname"),
      phone: formdata.get("pubphone"), 
      email: formdata.get("pubemail"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/updatepublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Publisher Update Success !!");
  },

  UpdateAuthor: async function() {

    var form = document.querySelector("#authorupdateform");
    const formdata = new FormData(form);

    const data = {
      authid: formdata.get("authid"),
      name: formdata.get("authname"),
      phone: formdata.get("authphone"), 
      email: formdata.get("authemail"),
    };

    console.log(data);
    clearInputs();

    endpoint = "/updateauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Author Update Success !!");
  },

  UpdateOrder: async function() {

    var form = document.querySelector("#orderupdateform");
    const formdata = new FormData(form);

    const data = {
      orderid: formdata.get("orderid"),
      qty: formdata.get("qty"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/updateorder";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Order Update Success !!");
  },

  UpdateInventory: async function() {

    var form = document.querySelector("#invupdateform");
    const formdata = new FormData(form);

    const data = {
      invid: formdata.get("invid"),
      stock: formdata.get("stock"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/updateinventory";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Inventory Update Success !!");
  },

  UpdateBookAuthor: async function() {

    var form = document.querySelector("#bookauthorupdateform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"),
      authid: formdata.get("authid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/updatebookauthor";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Book Author Update Success !!");
  },

  UpdateBookPublisher: async function() {

    var form = document.querySelector("#bookpublisherupdateform");
    const formdata = new FormData(form);

    const data = {
      isbn: formdata.get("isbn"),
      pubid: formdata.get("pubid"), 
    };

    console.log(data);
    clearInputs();

    endpoint = "/updatebookpublisher";
    method = "POST"

    let resdata = await App.SendPostRequest(endpoint, method, data);
    await alert("Book Publisher Update Success !!");
  }
}

App.init();