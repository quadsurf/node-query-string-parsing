# node-url-parsing
Parsing URLs is a fundamental process of web servers. In regards to Node.js, you have the option to manually parse a URL with `req.url` or Node's [`url`](https://www.npmjs.com/package/url) module. For this exercise, we're going to use the former appraoch first; then we'll refactor our code to use the latter.

## Setup
This exercise will require your HTTP server to be frequently restarted. Rather than manually doing this, we're going to automate this process with [`nodemon`](https://www.npmjs.com/package/nodemon).

To install nodemon, type the following command into your terminal:

```bash
npm install -g nodemon
```

## Instructions
A lot of experimentation will be performed during this exercise. Since the focus of the exercise is URLs and not creating an HTTP server, the code for a basic server has been written for you in [`server.js`](server.js). To start the server, type the following command: 

```bash
nodemon server.js
```

Then open your browser to [localhost:8000](http://localhost:8000/).

As you complete each of the following steps, add and commit your work to Github.

#### Step 1: `pathname`
The first step is to experiment with the path of a URL. In [`server.js`](server.js), pass [`req.url`](https://nodejs.org/api/http.html#http_message_url) as an argument of `res.end()`.

- Change the URL in your browser's address to a different URL, such as `localhost:8000/foo`. 
- Notice that the text in your browser has changed from `/` to `/foo`. 
- Navigate to another URL and add a query string to that URL.
- In `server.js`, create an object named `url-two` and add a property named `pathname`.
- Replace `res.end(req.url)` with `res.end(url-two.pathname)`
- Assign to `url-two.pathname` just the path in `req.url`. For instance, `req.url` would return `/bar?name=batman` in `localhost:8000/bar?name=batman`. Your implementation of `url-two.pathname` should return just `/bar`.
- Add and commit to Github your changes in `server.js`.

#### Step 2: `query`
The second step is to experiment with the [query string](https://en.wikipedia.org/wiki/Query_string) of a URL.

- Open a browser to [`localhost:8000/report?happy=yes`](http://localhost:8000/report?happy=yes). 
- Notice that your browser displays the string `/?happy=yes`
- Inside of `server.js`, replace `res.end(req.url)` with `res.end(url-two.query)`
- The property `url-two.query` doesn't exist, and you'll have to implement it to do the following: Return an object with the query string name as a key and its value as the corresponding value. In other words, we want to view `{happy: yes}`.
- Once you've solved this problem, re-implement your solution to handle a query string with more than one pair of names and values, such as `?city=philly&state=pa`.
- Add and commit your work.

#### Step 3: `query` with encoded URL 
The third step is to experiment with an encoded URL and query strings. 

- In server.js, replace `url-two.pathname` with `req.url`.
- Open your browser to [`localhost:8000/test?testingIsFun=Sometimes not always&skiingIsFun=Always`](`http://localhost:8000/test?testingIsFun=Sometimes not always&skiingIsFun=Always`). Notice how the URL changed in the address bar. Also, there's some encoding happening in the URL.
- Define `url-two.query` and have it be assigned to an object with the query string names as keys and values as values. Here's an example output: `{testingIsFun: "Sometimes not always", skiingIsFun: "Always"}`.
- Add and commit your work. 

#### Step 4: `url.parse`
The fourth step is refactor your work with the [`url`](https://www.npmjs.com/package/url) module. You'lll need to require it in `server.js` and then install it with `npm`. Also, focus your attention on the property [`url.parse`](https://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost).

- Add and commit your work.
