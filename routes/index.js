var express = require('express');
var router = express.Router();
const documents = require("../models/documents.js");

router.get('/', (req, res) => {
    const data = {
        data: {
            msg: "An application programming interface for creating, reading and updating documents."
        }
    };
    res.json(data);
});

// Create new document.
router.post('/docs/create', (req, res) => {
    documents.create(res, req.body.text, req.body.title)
});

// Read all documents.
router.get('/docs', (req, res) => {
    documents.readAll(res)
});

// Read one document.
router.get('/docs/:id', (req, res) => {
    documents.read(res, req.params.id);
});

// Update existing document.
router.put('/docs/update', (req, res) => {
    documents.update(res, req.body.id, req.body.text, req.body.title)
});

module.exports = router;
