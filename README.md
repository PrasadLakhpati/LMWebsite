# Library Management System

A simple web-based library management system built with HTML, CSS, JavaScript, and Oracle database integration.

## Features

- Dashboard with key statistics
- Book management (add, edit, delete, search)
- Member management (add, edit, delete, search)
- Transaction management (borrow, return, search)
- Responsive design for all devices
- Real-time Oracle database integration

## Prerequisites

1. Oracle Database (XE or higher) installed on your system
2. Node.js and npm (Download from https://nodejs.org/)
3. Oracle Instant Client (Download from https://www.oracle.com/database/technologies/instant-client/downloads.html)
4. Web browser with JavaScript enabled

## Setup Instructions

1. **Oracle Instant Client Setup**
   - Download and install Oracle Instant Client
   - Add Oracle Instant Client to your system PATH
   - Set environment variables:
     ```
     ORACLE_HOME=C:\path\to\instant_client
     PATH=%PATH%;%ORACLE_HOME%
     ```

2. **Database Setup**
   - Open SQL*Plus or Oracle SQL Developer
   - Connect as system user:
     ```sql
     sqlplus system/prasad@XE
     ```
   - Run the following SQL commands:
     ```sql
     CREATE TABLE books (
         id NUMBER PRIMARY KEY,
         title VARCHAR2(100) NOT NULL,
         author VARCHAR2(100) NOT NULL,
         category VARCHAR2(50) NOT NULL,
         status VARCHAR2(20) DEFAULT 'Available'
     );

     CREATE TABLE members (
         id NUMBER PRIMARY KEY,
         name VARCHAR2(100) NOT NULL,
         email VARCHAR2(100) UNIQUE NOT NULL,
         phone VARCHAR2(20) NOT NULL
     );

     CREATE TABLE transactions (
         id NUMBER PRIMARY KEY,
         book_id NUMBER REFERENCES books(id),
         member_id NUMBER REFERENCES members(id),
         issue_date DATE DEFAULT SYSDATE,
         due_date DATE NOT NULL,
         return_date DATE,
         status VARCHAR2(20) DEFAULT 'Borrowed'
     );

     CREATE SEQUENCE books_seq START WITH 1;
     CREATE SEQUENCE members_seq START WITH 1;
     CREATE SEQUENCE transactions_seq START WITH 1;
     ```

3. **Application Setup**
   - Clone or download this repository
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - Update the database connection settings in `js/database.js` if needed:
     ```javascript
     const dbConfig = {
         user: "system",
         password: "prasad",
         connectString: "localhost:1521/XE"
     };
     ```
   - Start the application:
     ```bash
     npm start
     ```
   - Open your browser and navigate to http://localhost:3000

## Usage

1. **Managing Books**
   - Click on "Books" in the navigation menu
   - Use the "Add New Book" button to add books
   - Search books using the search bar
   - Edit or delete books using the action buttons

2. **Managing Members**
   - Click on "Members" in the navigation menu
   - Use the "Add New Member" button to add members
   - Search members using the search bar
   - Edit or delete members using the action buttons

3. **Managing Transactions**
   - Click on "Transactions" in the navigation menu
   - Use the "New Transaction" button to create a borrowing transaction
   - Return books using the "Return" button
   - View transaction history and current status

## Security Considerations

1. Never store database credentials in plain text in production
2. Implement proper authentication and authorization
3. Use prepared statements to prevent SQL injection (already implemented)
4. Validate all input data
5. Implement proper error handling
6. Use environment variables for sensitive data
7. Keep Oracle Instant Client and Node.js packages updated

## Troubleshooting

1. **Database Connection Issues**
   - Verify Oracle Database is running
   - Check database credentials
   - Ensure Oracle Instant Client is properly installed
   - Verify environment variables are set correctly

2. **Node.js Issues**
   - Verify Node.js and npm are installed correctly
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and run `npm install` again

3. **Application Issues**
   - Check browser console for errors
   - Verify all tables and sequences are created
   - Check server logs for backend errors

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 