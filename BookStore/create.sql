DROP TABLE Orders;
DROP TABLE BooksPublish;
DROP TABLE BookAuthor;
DROP TABLE Login;
DROP TABLE Inventory;
DROP TABLE Author;
DROP TABLE Publisher;
DROP TABLE Employee;
DROP TABLE Book;

CREATE TABLE Book ( 
    Isbn int PRIMARY KEY,
    Title varchar NOT NULL,
    Year int NOT NULL,
    Genre varchar,
    Price int NOT NULL,
    Version int
);

CREATE TABLE Employee (
    EmpId varchar PRIMARY KEY,
    Name varchar NOT NULL,
    Phone varchar UNIQUE,
    Address varchar NOT NULL,
    Email varchar UNIQUE,
    Job varchar NOT NULL,
    Salary int NOT NULL
);

CREATE TABLE Publisher (
    PubId varchar PRIMARY KEY,
    Name varchar NOT NULL,
    Phone varchar UNIQUE,
    Email varchar UNIQUE
);

CREATE TABLE Author (
    AuthId varchar PRIMARY KEY,
    Name varchar NOT NULL,
    Phone varchar UNIQUE,
    Email varchar UNIQUE
);

CREATE TABLE Inventory (
    InvId varchar PRIMARY KEY,
    Isbn int UNIQUE NOT NULL,
    Stock int NOT NULL,
    FOREIGN KEY (Isbn) REFERENCES Book(Isbn) ON DELETE CASCADE
);

CREATE TABLE Login (
    EmpId varchar,
    Username varchar,
    Password varchar UNIQUE NOT NULL,
    PRIMARY KEY (EmpId, Username),
    FOREIGN KEY (EmpId) REFERENCES Employee(EmpId) ON DELETE CASCADE
);

CREATE TABLE BookAuthor (
    AuthId varchar,
    Isbn int,
    PRIMARY KEY (AuthId, Isbn),
    FOREIGN KEY (AuthId) REFERENCES Author(AuthId) ON DELETE CASCADE,
    FOREIGN KEY (Isbn) REFERENCES Book(Isbn) ON DELETE CASCADE
);

CREATE TABLE BooksPublish (
    PubId varchar,
    Isbn int,
    PRIMARY KEY (PubId, Isbn),
    FOREIGN KEY (PubId) REFERENCES Publisher(PubId) ON DELETE CASCADE,
    FOREIGN KEY (Isbn) REFERENCES Book(Isbn) ON DELETE CASCADE
);

CREATE TABLE Orders (
    OrderId varchar PRIMARY KEY,
    Isbn int NOT NULL,
    Qty int NOT NULL,
    Amount int NOT NULL,
    FOREIGN KEY (Isbn) REFERENCES Book(Isbn) ON DELETE CASCADE
);

CREATE INDEX BOOK_ISBN ON Book(isbn);
CREATE INDEX EMP_ID ON Employee(empid);
CREATE INDEX PUB_ID ON Publisher(pubid);
CREATE INDEX AUTH_ID ON Author(authid);
CREATE INDEX INV_ID ON Inventory(invid);
CREATE INDEX LOGIN_EMPID ON Login(empid);
CREATE INDEX BA_ISBN ON BookAuthor(isbn);
CREATE INDEX BA_AUTHID ON BookAuthor(authid);
CREATE INDEX BP_ISBN ON BooksPublish(isbn);
CREATE INDEX BP_PUBID ON BooksPublish(pubid);
CREATE INDEX ORDER_ID ON Orders(orderid);