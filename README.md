# Conversation Starter
## A simple JavaScript App which spits out cringe pickup lines

I wanted to put myself out there and try my luck with dating.
Thought it would be funny to actually use an API and make a silly App.

## Details

API used - [Pickup Lines](https://getpickuplines.herokuapp.com/lines)

Retrieved data using the fetch API. [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API]

Followed this article to solve issues for using a free API -(Medium Article)[https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9]

Used Heruko to implement a fix for CORS issues. CORS is truly dreadful. 
Apparently, the free API did not send proper headers. Therefore ran into crazy errors.

Rob--W saved many lives [https://github.com/Rob--W/cors-anywhere]
I added this with the free API url to solve the CORS issue.


