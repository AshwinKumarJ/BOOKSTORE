\COPY Book FROM '/Users/ashwin/Desktop/BookStore/Data/Books.csv' DELIMITER ',' CSV HEADER;
\COPY Employee FROM '/Users/ashwin/Desktop/BookStore/Data/Employees.csv' DELIMITER ',' CSV HEADER;
\COPY Publisher FROM '/Users/ashwin/Desktop/BookStore/Data/Publishers.csv' DELIMITER ',' CSV HEADER;
\COPY Author FROM '/Users/ashwin/Desktop/BookStore/Data/Authors.csv' DELIMITER ',' CSV HEADER;
\COPY Inventory FROM '/Users/ashwin/Desktop/BookStore/Data/Inventory.csv' DELIMITER ',' CSV HEADER;
\COPY Login FROM '/Users/ashwin/Desktop/BookStore/Data/Login.csv' DELIMITER ',' CSV HEADER;
\COPY BooksPublish FROM '/Users/ashwin/Desktop/BookStore/Data/BooksPublishers.csv' DELIMITER ',' CSV HEADER;
\COPY BookAuthor FROM '/Users/ashwin/Desktop/BookStore/Data/BookAuthors.csv' DELIMITER ',' CSV HEADER;
\COPY Orders FROM '/Users/ashwin/Desktop/BookStore/Data/Orders.csv' DELIMITER ',' CSV HEADER;