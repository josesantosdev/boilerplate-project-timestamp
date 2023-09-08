const express = require('express');
const router = express.Router();
const DateService = require('../services/dateService');


router.get('/:date?', (req, res) => {
    const { date } = req.params;

    if (!date) {
        const currentDate = DateService.getDateInfo(new Date().toUTCString());
        return res.json(currentDate);
    }

    const dateInfo = DateService.getDateInfo(date);
    res.json(dateInfo);
});

module.exports = router;


