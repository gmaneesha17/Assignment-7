const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route for the index page
router.get('/', async (req, res, next) => {
    try {
        // Fetching airport data from the Aviation Stack API
        const response = await axios.get('http://api.aviationstack.com/v1/airports', {
            params: {
                access_key: '0af1b6ed18bf3960f589ba63f0417954',
            },
        });

        // Filter for Australian airports
        const airports = response.data.data.filter(airport => airport.country_iso2 === 'AU');

        // Render the index view with airports data
        res.render('index', { 
            airports,
            userId: req.session.userId,
        });
    } catch (error) {
        console.error('Error fetching from Aviation Stack API:', error);
        try {
            // Fallback to local JSON file
            const jsonUrl = 'http://localhost:9000/data/airports'; // Replace with your local server URL
            const jsonResponse = await axios.get(jsonUrl);
            const airports = jsonResponse.data.data.filter(airport => airport.country_iso2 === 'IN');

            // Render the index view with fallback airports data
            res.render('index', { 
                airports,
                userId: req.session.userId,
            });
        } catch (fileError) {
            console.error('Error fetching local JSON:', fileError);
            const err = new Error('Error reading user data or fetching local JSON file');
            err.status = 500;
            return next(err); // Forward to error-handling middleware        
        }    
    }
});

module.exports = router;
