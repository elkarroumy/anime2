const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch and return HTML of a given URL
async function fetchHTML(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching the URL:', error);
        return 'Error fetching the URL';
    }
}

// Example usage
const url = 'https://google.com'; // Replace with the URL you want to scrape

fetchHTML(url).then(html => {
    console.log(html);
});
