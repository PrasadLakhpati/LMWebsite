const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('./js/database');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// API Routes
// Books
app.get('/api/books', async (req, res) => {
    try {
        const books = await Database.getBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/books', async (req, res) => {
    try {
        const book = await Database.addBook(req.body);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/books/:id', async (req, res) => {
    try {
        const book = await Database.updateBook(parseInt(req.params.id), req.body);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/books/:id', async (req, res) => {
    try {
        await Database.deleteBook(parseInt(req.params.id));
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Members
app.get('/api/members', async (req, res) => {
    try {
        const members = await Database.getMembers();
        res.json(members);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/members', async (req, res) => {
    try {
        const member = await Database.addMember(req.body);
        res.json(member);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/members/:id', async (req, res) => {
    try {
        const member = await Database.updateMember(parseInt(req.params.id), req.body);
        res.json(member);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/members/:id', async (req, res) => {
    try {
        await Database.deleteMember(parseInt(req.params.id));
        res.json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Transactions
app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await Database.getTransactions();
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/transactions', async (req, res) => {
    try {
        const transaction = await Database.addTransaction(req.body);
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/transactions/:id/return', async (req, res) => {
    try {
        const transaction = await Database.returnBook(parseInt(req.params.id));
        res.json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    Database.connect();
}); 