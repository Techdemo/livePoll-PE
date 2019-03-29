# live poll - PE
The assignment was to make a Live Poll with Progressive Enhancement in mind.
In a poll, users can cast their vote on a question asked by one person.
Voting results are to be displayed on a central page. The results live update on the page. although that one is not a core functionality.

![Front screen of the app]("https://raw.githubusercontent.com/Techdemo/livePoll-PE/master/assets/screen.png")

## Achievements
This list displays the inner workings on my way of working on this application.

### Form submit
I had grown accustomed to handeling every user input with only javascript. After some research I've found out that handeling a text input with only JS is not the PE way. So I used the good ol'  ` <form></form>` form html tag for this.
In this form tag are three radio buttons in which users can select their vote and click on "submit". The form then does a post request to the server.

### Server side
When the user casts a vote the server then handles the form submit as a post request. I've created a datamodel that gets place in the database.

```
exports.question_vote = function (req, res, next) {
    io.emit('vote casted')(castvote);
    let data = req.body
    let dataOpt = data.opt
    Question.findByIdAndUpdate(req.body._id, {
        $inc: { [dataOpt]: 1 } },
        { new: true },
            function (err, response) {
                if (err) return next(err)
                res.render('submitted', {
                    title: 'thnx for your submission',
                    data: dataOpt,
                    response: response
            })
        });
    };
```

This function fires when a user casts a vote. It takes the value of the post request and the looks up the question in the database. It then increments the specified answer in the datamodel with +1.

### MongoDB
To store votes and questions on the server, I used mongoose with a mongoDB database. The idea of this choice was to be able to make the votepoints accesible on every device after deployment of this application.
It also makes it easer to find, store and update votes.

### No script tag
When JS is disabled its main functionality also has to work. So when on te results page I used to no script tag to expose the `<meta http-equiv="refresh" content="5;url=http://localhost:3000/teacher/overview"` meta tag. This meta tag refreshes the page on every 5 seconds. When the page is refreshed the server makes a fetch request and pulls in all the data from the mongo database.

```
exports.question_overview = (req, res, next) => {
    try {
        fetch('http://localhost:3000/question/5c98dd88a2d6bccb5df225a3')
            .then(res => {return res.json()})
            .then(data => {
                res.render('chart', {
                    title: "dit zijn de uitslagen tot nu toe",
                    data: data,
                    tag: "javascript staat uit"
                })
            })
        }
    catch(err) {
       return next(err)
    }
}
```

In the res object, I pass in the tag: 'javascript staat uit'.
This tag does not get display on the page!
Its a helper for the Handlebars template to display the meta tag that refreshes the page.

## Progressive enhancements
This assignment was made with PE in mind. The challenge is to make a progressive webapp in which its main functionalities work on (almost) every browser and even on the slowest of connections. You will notice that some enhanced functionalities don't work when JS is disabled. But the core idea of the app still functions.

- When JS is disabled, the vote results do not automatically refresh. So I've used a `noscript tag` to expose a meta tag to the page.
- If the meta tag does not work, users can manually refresh the page to fetch the vote results.
- When everything is working. Users get to see a full blown data chart in which the votes get pushed realtime.

## Mistakes I've made
- Did not started with wireframes. Write this sentence down in a tile in your bathroom: "Think first, code after"
- focused too much on making EVERYTHING SERVER SIDE. This way of thinking is not making your app progressive enhanced. It's just showing off.
- I have to rethink the datamodel in the database. The way I store and update information in Mongo is great. But the Model schema is not very efficient and it made development in some ways, somewhat harder.
- Don't just import libraries and packages. Think about what you really need and how much of it you can make yourself.
- Because I was so focussed on making everything server side I forgot to implement some decent feature detection in my css and js.

## Things I've discovered
- HTML on itself can be strong foundation for your application
- Progressive enhancement is more of a conceptual way of thinking. Not just technically.


