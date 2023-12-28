const express = require('express');
const path = require('path');
const { Client } = require('pg');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

const con = 'postgresql://postgres:abcd1234@localhost:5432/BookStore';

const client = new Client({
  connectionString : con,
});

async function connect() {
  try{
    await mongoose.connect(uri).then(() => console.log('Connected to MongoDB!'));
  }
  catch (error) {
    console.log(error);
  }
}

client.connect() .then(() => {
    console.log('BookStore DB !!');
  }).catch(err => console.error('Error Connecting !!', err));

app.listen(port, function() {
    console.log('App connected on port 3000!');
});

app.post("/newbook", async function(req, res) {
  try{
    const book = {
      title: req.body.title,
      isbn: req.body.isbn, 
      year: req.body.year,
      genre: req.body.genre,
      price: req.body.price,
      version: req.body.version,   
    }

    const query = 'INSERT INTO Book VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [book.isbn, book.title, book.year, book.genre, book.price, book.version];

    result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Book Inserted into DB !!");
  }
  catch(error) {
     console.error('Book Insertion Error !', error.detail);
  }

})

app.post("/newemployee", async function(req, res) {
  try{
    const emp = {
      empid: req.body.empid,
      name: req.body.name, 
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      job: req.body.job, 
      salary: req.body.salary,   
    }

    const query = 'INSERT INTO Employee VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const values = [emp.empid, emp.name, emp.phone, emp.address, emp.email, emp.job, emp.salary];

    result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Employee Inserted into DB !!");
  }
  catch(error) {
     console.error('Employee Insertion Error !', error.detail);
  }

})

app.post("/newpublisher", async function(req, res) {
  try{
    const pub = {
      pubid: req.body.pubid,
      name: req.body.name, 
      phone: req.body.phone,
      email: req.body.email,
    }

    const query = 'INSERT INTO Publisher VALUES ($1, $2, $3, $4)';
    const values = [pub.pubid, pub.name, pub.phone, pub.email];

    result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Publisher Inserted into DB !!");
  }
  catch(error) {
     console.error('Publisher Insertion Error !', error.detail);
  }

})

app.post("/newauthor", async function(req, res) {
  try{
    const author = {
      authid: req.body.authid,
      name: req.body.name, 
      phone: req.body.phone,
      email: req.body.email,
    }

    const query = 'INSERT INTO Author VALUES ($1, $2, $3, $4)';
    const values = [author.authid, author.name, author.phone, author.email];

    result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Author Inserted into DB !!");
  }
  catch(error) {
     console.error('Author Insertion Error !', error.detail);
  }

})

app.post("/neworder", async function(req, res) {
  try {
    const order = {
      orderid: req.body.orderid,
      isbn: req.body.isbn,
      qty: req.body.qty,
      amount: 0,
    }

    const queryprice = 'SELECT price FROM Book WHERE isbn = $1';
    const pricevalues = [order.isbn];

    const result = await client.query(queryprice, pricevalues);

    const data = result.rows;
    order.amount = order.qty * data[0]['price'];

    const query = 'INSERT INTO Orders VALUES ($1, $2, $3, $4)';
    const values = [order.orderid, order.isbn, order.qty, order.amount];

    const results = await client.query(query, values);
    const senddata = {};

    res.status(200).json(senddata);
    console.log("Order Inserted into DB !!");

  } catch (error) {
    console.error('Order Insertion Error !', error.detail);
  }
});

app.post("/newinventory", async function(req, res) {
  try {
    const order = {
      invid: req.body.invid,
      isbn: req.body.isbn,
      stock: req.body.stock,
    }

    const query = 'INSERT INTO Inventory VALUES ($1, $2, $3)';
    const values = [order.invid, order.isbn, order.stock];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Inventory Inserted into DB !!");

  } catch (error) {
    console.error('Inventory Insertion Error !', error.detail);
  }
});

app.post("/newbookauthor", async function(req, res) {
  try {
    const bookauthor = {
      isbn: req.body.isbn,
      authid: req.body.authid,
    }

    const query = 'INSERT INTO BookAuthor VALUES ($1, $2)';
    const values = [bookauthor.authid, bookauthor.isbn];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Book Author Inserted into DB !!");

  } catch (error) {
    console.error('Book Author Insertion Error !', error.detail);
  }
});

app.post("/newbookpublisher", async function(req, res) {
  try {
    const bookpublisher = {
      isbn: req.body.isbn,
      pubid: req.body.pubid,
    }

    const query = 'INSERT INTO BooksPublish VALUES ($1, $2)';
    const values = [bookpublisher.pubid, bookpublisher.isbn];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Book Publisher Inserted into DB !!");

  } catch (error) {
    console.error('Book Publisher Insertion Error !', error.detail);
  }
});

app.post("/newlogin", async function(req, res) {
  try {
    const login = {
      empid: req.body.empid,
      username: req.body.username,
      pwd: req.body.pwd,
    }

    const query = 'INSERT INTO Login VALUES ($1, $2, $3)';
    const values = [login.empid, login.username, login.pwd];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Login Inserted into DB !!");

  } catch (error) {
    console.error('Login Insertion Error !', error.detail);
  }
});

app.post("/deletebook", async function(req, res) {
  try {
    const book = {
      isbn: req.body.isbn,
    }

    const query = 'DELETE FROM Book WHERE isbn = $1';
    const values = [book.isbn];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Book Deleted from DB !!");

  } catch (error) {
    console.error('Book Deletion Error !', error.detail);
  }
});

app.post("/deleteemployee", async function(req, res) {
  try {
    const emp = {
      empid: req.body.empid,
    }

    const query = 'DELETE FROM Employee WHERE empid = $1';
    const values = [emp.empid];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Employee Deleted from DB !!");

  } catch (error) {
    console.error('Employee Deletion Error !', error.detail);
  }
});

app.post("/deletepublisher", async function(req, res) {
  try {
    const pub = {
      pubid: req.body.pubid,
    }

    const query = 'DELETE FROM Publisher WHERE pubid = $1';
    const values = [pub.pubid];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Publisher Deleted from DB !!");

  } catch (error) {
    console.error('Publisher Deletion Error !', error.detail);
  }
});

app.post("/deleteauthor", async function(req, res) {
  try {
    const author = {
      authid: req.body.authid,
    }

    const query = 'DELETE FROM Author WHERE authid = $1';
    const values = [author.authid];

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log("Author Deleted from DB !!");

  } catch (error) {
    console.error('Author Deletion Error !', error.detail);
  }
});

app.post("/searchbook", async function(req, res) {
  try {
    const book = {
      isbn: req.body.isbn,
    }

    const query = 'SELECT * FROM Book WHERE isbn = $1';
    const values = [book.isbn];

    const result = await client.query(query, values);
    const data = result.rows;
    console.log(data);

    res.status(200).json(data);
    console.log('Book Search from DB !!')

  } catch (error) {
    console.error('Book Search Error !', error.detail);
  }
});

app.post("/searchemployee", async function(req, res) {
  try {
    const emp = {
      empid: req.body.empid,
    }

    const query = 'SELECT * FROM Employee WHERE empid = $1';
    const values = [emp.empid];

    const result = await client.query(query, values);
    const data = result.rows;
    console.log(data);

    res.status(200).json(data);
    console.log('Employee Search from DB !!')

  } catch (error) {
    console.error('Employee Search Error !', error.detail);
  }
});

app.post("/searchpublisher", async function(req, res) {
  try {
    const pub = {
      pubid: req.body.pubid,
    }

    const query = 'SELECT * FROM Publisher WHERE pubid = $1';
    const values = [pub.pubid];

    const result = await client.query(query, values);
    const data = result.rows;
    console.log(data);

    res.status(200).json(data);
    console.log('Publisher Search from DB !!')

  } catch (error) {
    console.error('Publisher Search Error !', error.detail);
  }
});

app.post("/searchauthor", async function(req, res) {
  try {
    const author = {
      authid: req.body.authid,
    }

    const query = 'SELECT * FROM Author WHERE authid = $1';
    const values = [author.authid];

    const result = await client.query(query, values);
    const data = result.rows;
    console.log(data);

    res.status(200).json(data);
    console.log('Author Search from DB !!')

  } catch (error) {
    console.error('Author Search Error !', error.detail);
  }
});

app.post("/searchorder", async function(req, res) {
  try {
    const order = {
      orderid: req.body.orderid,
    }

    const query = 'SELECT * FROM Orders WHERE orderid = $1';
    const values = [order.orderid];

    const result = await client.query(query, values);
    const data = result.rows;
    console.log(data);

    res.status(200).json(data);
    console.log('Order Search from DB !!')

  } catch (error) {
    console.error('Order Search Error !', error.detail);
  }
});

app.post("/searchinventory", async function(req, res) {
  try {
    const inv = {
      invid: req.body.invid,
    }

    const query = 'SELECT * FROM Inventory WHERE invid = $1';
    const values = [inv.invid];

    const result = await client.query(query, values);
    const data = result.rows;
    console.log(data);

    res.status(200).json(data);
    console.log('Inventory Search from DB !!')

  } catch (error) {
    console.error('Inventory Search Error !', error.detail);
  }
});

app.post("/searchbookauthor", async function(req, res) {
  try {
    const bookauth = {
      isbn: req.body.isbn,
    }

    const query = 'SELECT authid FROM BookAuthor WHERE isbn = $1';
    const values = [bookauth.isbn];

    const result = await client.query(query, values);
    const data = result.rows;

    const namequery = 'SELECT name FROM Author WHERE authid = $1';
    const namevalues = [data[0]['authid']];

    const nameresult = await client.query(namequery, namevalues);
    const namedata = nameresult.rows;

    resdata = [{authid: data[0]['authid'], authname: namedata[0]['name']}];
    console.log(resdata);

    res.status(200).json(resdata);
    console.log('Book Author Search from DB !!')

  } catch (error) {
    console.error('Book Author Search Error !', error.detail);
  }
});

app.post("/searchbookpublisher", async function(req, res) {
  try {
    const bookpub = {
      isbn: req.body.isbn,
    }

    const query = 'SELECT pubid FROM BooksPublish WHERE isbn = $1';
    const values = [bookpub.isbn];

    const result = await client.query(query, values);
    const data = result.rows;

    const namequery = 'SELECT name FROM Publisher WHERE pubid = $1';
    const namevalues = [data[0]['pubid']];

    const nameresult = await client.query(namequery, namevalues);
    const namedata = nameresult.rows;

    resdata = [{pubid: data[0]['pubid'], pubname: namedata[0]['name']}];
    console.log(resdata);

    res.status(200).json(resdata);
    console.log('Book Publisher Search from DB !!')

  } catch (error) {
    console.error('Book Publisher Search Error !', error.detail);
  }
});

app.post("/updatebook", async function(req, res) {
  try {
    const book = {
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      price: req.body.price,
      version: req.body.version,   
    }

    const setClause = Object.keys(book)
      .filter(key => book[key] !== "") 
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');

    const values = Object.values(book).filter(value => value != "");
    values.push(req.body.isbn);

    const query = `UPDATE Book SET ${setClause} WHERE isbn = $${values.length}`;

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Book Updated in DB !!');
  } catch (error) {
    console.error('Book Update Error !', error.detail);
  }
});

app.post("/updateemployee", async function(req, res) {
  try {
    const emp = {
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      job: req.body.job,   
      salary: req.body.salary,
    }

    const setClause = Object.keys(emp)
      .filter(key => emp[key] !== "") 
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');

    const values = Object.values(emp).filter(value => value != "");
    values.push(req.body.empid);

    const query = `UPDATE Employee SET ${setClause} WHERE empid = $${values.length}`;

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Employee Updated in DB !!');
  } catch (error) {
    console.error('Employee Update Error !', error.detail);
  }
});

app.post("/updatepublisher", async function(req, res) {
  try {
    const pub = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    }

    const setClause = Object.keys(pub)
      .filter(key => pub[key] !== "") 
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');

    const values = Object.values(pub).filter(value => value != "");
    values.push(req.body.pubid);

    const query = `UPDATE Publisher SET ${setClause} WHERE pubid = $${values.length}`;

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Publisher Updated in DB !!');
  } catch (error) {
    console.error('Publisher Update Error !', error.detail);
  }
});

app.post("/updateauthor", async function(req, res) {
  try {
    const auth = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    }

    const setClause = Object.keys(auth)
      .filter(key => auth[key] !== "") 
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');

    const values = Object.values(auth).filter(value => value != "");
    values.push(req.body.authid);

    const query = `UPDATE Author SET ${setClause} WHERE authid = $${values.length}`;

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Author Updated in DB !!');
  } catch (error) {
    console.error('Author Update Error !', error.detail);
  }
});

app.post("/updateorder", async function(req, res) {
  try {
    const order = {
      orderid: req.body.orderid,
      qty: req.body.qty,
      amount: 0,
    }

    const queryisbn = 'SELECT isbn FROM Orders WHERE orderid = $1';
    const isbnvalues = [order.orderid];

    const isbnresult = await client.query(queryisbn, isbnvalues);
    const isbndata = isbnresult.rows;

    const queryprice = 'SELECT price FROM Book WHERE isbn = $1';
    const pricevalues = [isbndata[0]['isbn']];

    const priceresult = await client.query(queryprice, pricevalues);
    const pricedata = priceresult.rows;

    order.amount = order.qty * pricedata[0]['price'];

    const query = `UPDATE Orders SET qty = $1, amount = $2 WHERE orderid = $3`;
    const values = [order.qty, order.amount, order.orderid];

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Order Updated in DB !!');
  } catch (error) {
    console.error('Order Update Error !', error.detail);
  }
});

app.post("/updateinventory", async function(req, res) {
  try {
    const inv = {
      stock: req.body.stock,
    }

    const setClause = Object.keys(inv)
      .filter(key => inv[key] !== "") 
      .map((key, index) => `${key} = $${index + 1}`)
      .join(', ');

    const values = Object.values(inv).filter(value => value != "");
    values.push(req.body.invid);

    const query = `UPDATE Inventory SET ${setClause} WHERE invid = $${values.length}`;

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Inventory Updated in DB !!');
  } catch (error) {
    console.error('Inventory Update Error !', error.detail);
  }
});

app.post("/updatebookauthor", async function(req, res) {
  try {
    const bookauthor = {
      isbn: req.body.isbn,
      authid: req.body.authid,
    }

    const query = `UPDATE BookAuthor SET authid = $1 WHERE isbn = $2`;
    const values = [bookauthor.authid, bookauthor.isbn];

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Book Author Updated in DB !!');
  } catch (error) {
    console.error('Book Author Update Error !', error.detail);
  }
});

app.post("/updatebookpublisher", async function(req, res) {
  try {
    const bookpublisher = {
      isbn: req.body.isbn,
      pubid: req.body.pubid,
    }

    const query = `UPDATE BooksPublish SET pubid = $1 WHERE isbn = $2`;
    const values = [bookpublisher.pubid, bookpublisher.isbn];

    console.log(query);
    console.log(values);

    const result = await client.query(query, values);
    const data = {};

    res.status(200).json(data);
    console.log('Book Publisher Updated in DB !!');
  } catch (error) {
    console.error('Book Publisher Update Error !', error.detail);
  }
});