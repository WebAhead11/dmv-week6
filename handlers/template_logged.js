function template_logged(content, owner) {
  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Learn Express</title>
            <link rel="stylesheet" href="./style.css">
          </head>
          <body>
          <div class="container">
          <div><h1>D.M.V System</h1></div>
          <h2>welcome back ${owner}</h2>
          <div><a href='/logout'>Logout</a> | <a href='/UpdateAcount'>Update acount</a> | <a href='/DeleteAcount'>Remove acount</a></div>
             ${content}
          </div>
          <script src="./functions.js" type="text/javascript"></script>
          </body>
        </html>
      `;
}

module.exports = template_logged;
