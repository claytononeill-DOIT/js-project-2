# JavaScript Project 2

The second JavaScript project is an extension on the first with the intention of continuing to
expand upon the core fundamentals of web development.

This project will include fetching and displaying data from a public API using an API key, the creation
of DOM elements, applying sorting logic to groups of objects, and additional styling updates that focus
on spacing and alignment, to name a few.

You will also be working with GitHub to clone the project repository and work on your local machine.
Remember to branch off of the `development` branch and commit your work often. When you complete a significant
milestone in your project requirements, it may be a good idea to open up a pull request that can be reviewed.

**Remember:** This may seem like a ton of new and dense information. Take your time to break it down into
smaller, manageable chunks and try and plan and document your approach before you jump into the code.

Even if you don't complete every single piece of functionality outlined, the time spent researching and
practicing is still valuable and will help you later on!

## The wire frame:

![Wire Frame](./project-2-wireframe.jpg)

## Project outline and goals:

### Including an input:

Working with user inputs is a common task for web developers. This project requires you to add in an input
element and a button that, whn clicked, will take that user input and use that in the API call.

### The API:

An overview on what an API is: https://developer.mozilla.org/en-US/docs/Glossary/API

The API that you will need to use for this project is the OMDb API: https://www.omdbapi.com/
You will need to read the documentation and acquire an API key. There is a lot to learn and understand
about how to use HTTP methods to fetch data from an API, so don't be afraid to reach out for help.

There are resources out there that would be good to investigate that will allow you to test your
API calls outside of the browser such as Postman: https://www.postman.com/. This tool may already be installed
on your work laptop, but if not, we can work with IT to have that set up.

### Working with the data:

The data that is returned from the API

## A few considerations for this project

- The API key that will be required to use the API should not be exposed in the same script file where the
  API call is made. Additionally, the API key should not be checked into source control so a `.gitignore` will
  need to be implemented.

- Avoid using `positioning: absolute` to space your elements around the page. This type of styling is not
  considered a best practice, so alternative methods should be employed.
