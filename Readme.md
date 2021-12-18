## How to run this project

- npm install
- node index.js / npm run dev / npm start

  https://stackoverflow.com/questions/24845374/nginx-conf-permission-to-write-denied-how-do-i-fix-this

  server {
  listen 8082;
  server_name localhost;

  location / {
  proxy_pass http://127.0.0.1:6500;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass Upgrade $http_upgrade;
  }
  }
