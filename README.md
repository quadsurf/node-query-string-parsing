# Parsing Query String Parameters

Please read through this entire document first, then return to the beginning to complete the exercise.

## Setting the stage (What and Why)

The goal of this exercise is something that seems simple, but has some latent complexity; parsing URLs. As previously mentioned, HTTP is a String-based protocol, so this lesson will challenge you to work with strings using all of your previous acquired tools/skills.

Why is parsing an HTTP request useful? This is great practice with understanding where some of the complexity of the web lies. After completing this exercise you will have exposure to a subset of the problems around URL parsing, this will give you greater appreciation for the [`url`](https://www.npmjs.com/package/url) npm module.

## Educational Objectives

- Describe what a path is and how one would extract it from the request string
- Describe how to send query parameters in a URL (?foo=bar&baz=foo)
- Describe how to interact with url-encoded parameters

## Key terms:

- `http` npm module
- path
- query string

## Educational Activities

Before proceeding, `npm install -g nodemon`.

Much of this activity will be done via experimentation, so the "coding task" is inline here. A [`server.js`](server.js) file has been provided for you to conduct the experiments in. To run the file, use `nodemon server.js`.

As you complete each phase of this experiment, make a commit before continuing onwards:

  1. Begin by using `res.end` to see the value of [`req.url`](https://nodejs.org/api/http.html#http_message_url) when requesting various URLs, perhaps `localhost:8000/foo` and `localhost:8000/bar`. Replace the string in `res.end` inside of `server.js` with the `req.url` with the leading slash removed. Make a commit with this new output. You will be able to see the output by refreshing the page in the browser.
  1. Next, try a URL that has a [query string parameter](https://en.wikipedia.org/wiki/Query_string). Here are the test cases you should try: `localhost:8000/test?testingIsFun=true`, `localhost:8000/report?coldWeather=yes`. Replace the string you were `console.log`-ing in the previous step and instead log an object with the query string parameters. Your code should not use anything beyond `req.url` and should instead rely on parsing data _from_ the `req.url` string.

    For the first example it would look like `{testingIsFun: 'true'}` (do not worry about data types for now). Make a commit with this.
  1. Next, try a more complex query string, here is the test cases, can you construct other similar ones? Be sure to copy and paste them into chrome as they appear here (the spaces matter!):

    * `localhost:8000/test?testingIsFun=Sometimes not always`
    * `localhost:8000/test?testingIsFun=Spaces are <so cool>`

    remember to commit the result before moving on.

  1. Next, try a more complex query string, here is the test cases, can you construct other similar ones? Be sure to copy and paste them into chrome as they appear here (the spaces matter!):

    * `localhost:8000/test?testingIsFun=Sometimes not always&skiingIsFun=Always` with output: `{testingIsFun: "Sometimes not always", skiingIsFun: "Always"}`

    remember to commit before moving on.

  1. Read about [`url.parse`](https://nodejs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost) and refactor your code to use it. You may need to search beyond the documentation to get a good understanding of how to use this. Commit this.

As mentioned before, HTTP is a String-based protocol. Due to this, an [encoding](https://en.wikipedia.org/wiki/Percent-encoding) strategy is required so that the machines can properly handle special characters that may otherwise be used in the protocol specification. The exercise you just completed handles the other side of the coin; URL decoding.

#### The next level

If you want to take this exercise to the next level, make the URL parser developed in the first 4 experiments work with data types.

## Reflect: Self-asses

Go to the "Objectives" section of this README. Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README. For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1. 
1. 
1. 
1. 