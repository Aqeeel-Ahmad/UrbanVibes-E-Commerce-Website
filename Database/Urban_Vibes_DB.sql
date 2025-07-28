Create Database DB_UrbanVibes

Use DB_UrbanVibes

Create TABle tbl_users(
id varchar(100) Not Null Primary Key,
name varchar(30) Not Null,
email nvarchar(30) Not Null,
password nvarchar(20) NOt Null
)

Insert Into tbl_users(id, name, email, password) Values('1','Aqeel Ahmad', 'aqeel@gmail.com', '1234')

Select * From tbl_users