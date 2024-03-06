Simple Example of `app` directory with an `api`

Go to `http://localhost:3000/publication/{publication_id}`, ie. `http://localhost:3000/publication/1`:
    - we dynamically get the query params for that route, and make a GET request to our api using those params,
      which return a payload of data, which we then render