const express = require('express');
const app = express();
// const port = process.env.PORT || 5013;
const port = 5013;
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch');

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());


let communities;
class HTTPResponseError extends Error {
    constructor(response, ...args) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`, ...args);
        this.response = response;
    }
}
// ^Helper functions for fetching and checking HTTP responses v
const checkStatus = response => {
    if (response.ok) {
        // response.status >= 200 && response.status < 300
        return response;
    } else {
        throw new HTTPResponseError(response);
    }
}

const getCommunities = async () => {
    const response = await fetch('https://api.covey.io/communities?limit=5');
    try {
        checkStatus(response);
    } catch (error) {
        console.error(error);
        const errorBody = await error.response.text();
        console.error(`Error body: ${errorBody}`);
    }
    const body = await response.json();
    // console.log(body.communities); //debug
    communities = body.communities;
}


app.get('/communities', async (req, res) => {
    getCommunities().then(() => {
        // console.log(communities); //debug
        res.send(communities);
    }).catch(error => {
        console.error(error);
    });
})

// app.post("/communities", async (req, res) => {
//     await getCommunities()
//         .then(() => {
//             // console.log(communities);
//             // res.send(communities);
//         }).catch(err => console.error(err));
// });


app.get("/", (req, res) => {

});







app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
    res.send({ message: "Connected to Proxy!" })
    console.log("connected to proxy")
});