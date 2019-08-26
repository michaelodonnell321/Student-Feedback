const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all reviews that have been placed
router.get('/', (req, res) => {
    // Return all reviews from feedback DB
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET', error);
        res.sendStatus(500);
    });
})

// POST a new order
router.post('/', (req, res) => {
    const newFeedback = req.body;
    console.log(newFeedback);
    const sqlText = `INSERT into feedback ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `;
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
        console.log('back from DB post', result);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('error in DB post', error);
        res.sendStatus(500);
    })
})

module.exports = router;