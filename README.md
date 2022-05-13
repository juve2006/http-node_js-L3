1)Create server with 2 routes: POST and GET.
- Save body data from POST request into text file (using streams)
- GET request: send file in response using streams
- *Additional GET-route to zip on the fly and send existing file (using streams and nodejs zlib module)
- **Send zipped file via email(nodemailer npm) to specified(query param in url) email
  fs.createReadStream(filePath).pipe(response);
2) Authentication exercises
- POST https://trollauthapp.herokuapp.com/users/new - create new user endpoint, not secured
  body:
  {
  "email": "troll1@gmail.com",
  "password": "Red12345",
  "username": "troll1",
  "role": 1
  }
- POST https://trollauthapp.herokuapp.com/auth/login - login enpoint, returns auth token
  body:
  {
  "password": "Red12345",
  "username": "troll1"
  }
- GET https://trollauthapp.herokuapp.com/users - list of all registered users, secured by jwt
  needs 'Authorization' header,
  Authorization: 'Bearer ' + token 