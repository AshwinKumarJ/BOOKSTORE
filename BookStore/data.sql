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

\COPY Book FROM '/Users/ashwin/Desktop/BookStore/Data/Books.csv' DELIMITER ',' CSV HEADER;
\COPY Employee FROM '/Users/ashwin/Desktop/BookStore/Data/Employees.csv' DELIMITER ',' CSV HEADER;
\COPY Publisher FROM '/Users/ashwin/Desktop/BookStore/Data/Publishers.csv' DELIMITER ',' CSV HEADER;
\COPY Author FROM '/Users/ashwin/Desktop/BookStore/Data/Authors.csv' DELIMITER ',' CSV HEADER;
\COPY Inventory FROM '/Users/ashwin/Desktop/BookStore/Data/Inventory.csv' DELIMITER ',' CSV HEADER;
\COPY Login FROM '/Users/ashwin/Desktop/BookStore/Data/Login.csv' DELIMITER ',' CSV HEADER;
\COPY BooksPublish FROM '/Users/ashwin/Desktop/BookStore/Data/BooksPublishers.csv' DELIMITER ',' CSV HEADER;
\COPY BookAuthor FROM '/Users/ashwin/Desktop/BookStore/Data/BookAuthors.csv' DELIMITER ',' CSV HEADER;
\COPY Orders FROM '/Users/ashwin/Desktop/BookStore/Data/Orders.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM Book;
SELECT * FROM Employee;
SELECT * FROM Publisher;
SELECT * FROM Author;
SELECT * FROM Inventory;
SELECT * FROM Login;
SELECT * FROM BookAuthor;
SELECT * FROM BooksPublish;
SELECT * FROM Orders;

-- SQL Queries

SELECT Title, Price
FROM Book
WHERE Price > (
    SELECT AVG(Price)
    FROM Book)
ORDER BY Price DESC;

SELECT A.authid, A.name
FROM Author A
WHERE A.authid IN (
    SELECT authid
    FROM BookAuthor
    WHERE isbn IN (
        SELECT isbn
        FROM Book
        WHERE year = 1925
    )
);

SELECT P.name, COUNT(*) AS books
FROM Publisher P
    JOIN BooksPublish pa ON P.pubid = pa.pubid
    JOIN Inventory i ON i.isbn = pa.isbn
        WHERE i.stock > 0
    GROUP BY P.name
    ORDER BY books DESC;
    
SELECT E1.Name, E1.Job, E1.Salary
FROM Employee E1
INNER JOIN (
    SELECT Job, MAX(Salary) AS MaxSalary
    FROM Employee
    GROUP BY Job
) E2 ON E1.Job = E2.Job AND E1.Salary = E2.MaxSalary
ORDER BY Salary DESC;

INSERT INTO Book VALUES (101, 'Sherlock Holmes', 2023, 'Adventure', 100, 1);

INSERT INTO Inventory VALUES ('i101', 101, 50);

UPDATE Employee SET Salary = 25000 WHERE Job = 'Cashier';

UPDATE Book SET Price = 20 WHERE Year = 1597;

DELETE FROM Author WHERE Authid = 'auth30';

DELETE FROM Publisher WHERE Pubid = 'pub20';

-- SQL Query Analysis

-- 1. EMPLOYEE WITH HIGHEST SALARY IN EACH JOB

SELECT E1.Name, E1.Job, E1.Salary
FROM Employee E1
INNER JOIN (
    SELECT Job, MAX(Salary) AS MaxSalary
    FROM Employee
    GROUP BY Job
) E2 ON E1.Job = E2.Job AND E1.Salary = E2.MaxSalary
ORDER BY Salary DESC;

SELECT Name, Job, Salary
FROM (
    SELECT 
        Name, 
        Job, 
        Salary,
        ROW_NUMBER() OVER (PARTITION BY Job ORDER BY Salary DESC) AS Rank
    FROM Employee
) AS Ranked
WHERE Rank = 1
ORDER BY Salary DESC;


-- 2. ORDER INFORMATION : BOOK TTILE, AUTHOR NAME, PUBLISHER NAME AND AMOUNT

SELECT 
    Orders.OrderId,
    Book.Title,
    Author.Name AS AuthorName,
    Publisher.Name AS PublisherName,
    Orders.Amount
FROM Orders
    JOIN Book ON Orders.Isbn = Book.Isbn
    JOIN BookAuthor ON Book.Isbn = BookAuthor.Isbn
    JOIN Author ON BookAuthor.AuthId = Author.AuthId
    JOIN BooksPublish ON Book.Isbn = BooksPublish.Isbn
    JOIN Publisher ON BooksPublish.PubId = Publisher.PubId
WHERE Orders.OrderId = 'ord1';

-- 3. TOTAL SALES AMOUNT OF EACH PUBLISHER BASED ON BOOK ORDERS

SELECT
    Publisher.PubId,
    Publisher.Name,
    COALESCE(SUM(Orders.Amount), 0) AS TotalSalesAmount
FROM Publisher
    LEFT JOIN BooksPublish ON Publisher.PubId = BooksPublish.PubId
    LEFT JOIN Book ON BooksPublish.Isbn = Book.Isbn
    LEFT JOIN Orders ON Book.Isbn = Orders.Isbn
GROUP BY Publisher.PubId, Publisher.Name
ORDER BY TotalSalesAmount DESC;

-- PROBLEMATIC QUERIES

SELECT *
FROM Book b
WHERE EXISTS (SELECT isbn 
              FROM Orders o
              WHERE b.isbn = o.isbn);
              
SELECT * 
FROM Book
    WHERE isbn IN (
        SELECT isbn
        FROM Inventory
        WHERE stock < 50);
        
SELECT E1.Name, E1.Job, E1.Salary
FROM Employee E1
INNER JOIN (
    SELECT Job, MAX(Salary) AS MaxSalary
    FROM Employee
    GROUP BY Job
) E2 ON E1.Job = E2.Job AND E1.Salary = E2.MaxSalary
ORDER BY Salary DESC;