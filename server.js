
const http = require("http");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Azure Web App Lab</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 60px 20px;
            background: #f0f6ff;
          }
          h1 { color: #0078d4; }
          .card {
            background: white;
            padding: 30px;
            border-radius: 12px;
            max-width: 600px;
            margin: auto;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Azure Web App Deployment Lab</h1>
          <h2>Application is running!</h2>
          <p>Successfully deployed using GitHub and Azure App Service.</p>
          <p>Task: Web App Deployment and Capacity Management</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
