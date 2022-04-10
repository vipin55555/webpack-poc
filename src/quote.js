import axios from "axios";

const randomQuotes = () => {
    const options = {
        method: 'GET',
        url: 'https://icanhazdadjoke.com',
        headers: {
            Accept: 'application/json'
        }
    };

    var quoteTag = document.getElementById('quote-content');

    axios.request(options).then((response) => {
        if (response?.data?.joke) {
            quoteTag.innerText = response.data.joke;
        } else {
            quoteTag.innerText = 'Quote not found';
        }
    }).catch(() => {
        quoteTag.innerText = 'Quote not found';
    });

}

export { randomQuotes };