1. If favoriteFoods is defined and is an array
All entries must be strings

2. add .forEach() or .filter() where appropriate
Suggestion: Create individual checks for each condition that you need to account for

3. Using query params in the GET /all and GET /single routes, implement the ability to only return certain fields on the blogPost
Hint: Array.map() can be used to edit all entries in an array in a single call


4. Introduce express route error handling
Add try/catch blocks to all functions

5. Refactor user post route to handle errors and test with throw Error

6. Add status codes to all res.json() method calls appropriate for the success or error being sent in the response
E.G. A successful response would have a status code of 200, an internal server error would respond with 500
Suggestion: I would google 'ExpressJS set status code'
