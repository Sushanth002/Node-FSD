-- Create a database :    ShoppingCartDb

CREATE DATABASE ShoppingCartDb;

USE ShoppingCartDb;

-- 1.   Create the following tables: 

-- a. Create a table :   Products

CREATE TABLE Products(
ProductId INT PRIMARY KEY,
Name VARCHAR(255) NOT NULL,
QuantityInStock INT NOT NULL,
UnitPrice INT NOT NULL CHECK(UnitPrice>0),
Category VARCHAR(255) NOT NULL
);

-- b.  Create a table :   Users

CREATE TABLE Users(
UserId INT PRIMARY KEY,
UserName VARCHAR(255),
Password VARCHAR(255),
ContactNumber VARCHAR(20),
Address VARCHAR(255)
);

-- c. Create a table :  Cart

CREATE TABLE Cart(
CartId INT PRIMARY KEY,
ProductId INT,
Quantity INT NOT NULL CHECK(Quantity>0),
UserId INT,
FOREIGN KEY(ProductId) REFERENCES Products(ProductId) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(UserId) REFERENCES Users(UserId) ON DELETE CASCADE ON UPDATE CASCADE
);


-- d.   Create a table :  Orders

CREATE TABLE Orders(
OrderId INT PRIMARY KEY,
CartId INT NOT NULL,
OrderDate DATE,
UserId INT,
FOREIGN KEY(UserId) REFERENCES Users(UserId) ON DELETE CASCADE ON UPDATE CASCADE
);


/* 
2.  Insert 5  records in each table. 
	 
	a.  Try to insert valid and invalid records in the above tables. 
	b.  Try to verify with delete cascade and without delete cascade. 
	c.  Verify that all constrains are working properly. 
    */
    
INSERT INTO Products (ProductId, Name, QuantityInStock, UnitPrice, Category) VALUES
(1, 'Laptop', 10, 100000, 'Electronics'),
(2, 'Mobile', 20, 50000, 'Electronics'),
(3, 'Shirt', 15, 1000, 'Fashion'),
(4, 'Pant', 25, 2000, 'Fashion'),
(5, 'Shoes', 30, 5000, 'Fashion');

-- checking check constrant by making unit price as 0
Insert into Products values(6,'mouse',0,0,'Electronics');

INSERT INTO Users (UserId, UserName, Password, ContactNumber, Address) VALUES
(1, 'Sushanth', 'Sush@123', '1234567890', 'Andhra Pradesh'),
(2, 'Dhoni', 'Dho@123', '2345678901', 'Chennai'),
(3, 'Prabhas', 'Pra@123', '3456789012', 'Hyderabad'),
(4, 'Mahesh', 'Mah@123', '4567890123', 'Vizag'),
(5, 'Ram Charan', 'Ram@123', '5678901234', 'Pune');

INSERT INTO Cart (CartId, ProductId, Quantity, UserId) VALUES
(101, 1, 2, 1),
(102, 2, 1, 2),
(103, 3, 3, 3),
(104, 4, 4, 4),
(105, 5, 5, 5);

INSERT INTO Orders (OrderId, CartId, OrderDate, UserId) VALUES
(1, 101, '2024-04-03', 1),
(2, 102, '2024-04-04', 2),
(3, 103, '2024-04-05', 3),
(4, 104, '2024-04-06', 4),
(5, 105, '2024-04-07', 5);


-- deleting to check on delete cascade for foreign keys 

DELETE FROM Products WHERE ProductId=1;

-- 3

-- a Display all Products

SELECT * FROM Products;

-- b  Display Products belongs to particular Category

SELECT * FROM Products WHERE Category = 'Electronics';

-- c Display out of stock products (means quantity is zero)

SELECT * FROM Products WHERE QuantityInStock = 0;

-- d Display the products which price between 1000 to 10000

SELECT * FROM Products WHERE UnitPrice BETWEEN 1000 AND 10000;

-- e Display the product details based on the ProductId

SELECT * FROM Products WHERE ProductId = 5;


-- ii  On Cart Table:

-- a Display data based on the given CartId

SELECT * FROM Cart WHERE CartId = 103;

-- b Check is there any products added in Cart based on the ProductId

SELECT * FROM Cart WHERE ProductId = 2;


-- iii.  On Orders table

-- a.  Display OrderDetails based on OrderId

SELECT * FROM Orders WHERE OrderId = 4;

-- b.  Display OrderDetails based on UserId

SELECT * FROM Orders WHERE UserId = 2;

-- c.  Display OrderDetails based on OrderDate

SELECT * FROM Orders WHERE OrderDate = '2024-04-06';

