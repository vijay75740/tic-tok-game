#!/usr/bin/env node
const open = require('open');
const path = require('path');
const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, '../dist');

// Create dist/ if missing & copy files
if (!fs.existsSync(DIST_PATH)) fs.mkdirSync(DIST_PATH);
['game.html', 'game.css', 'game.js'].forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(DIST_PATH, file.replace('game.', ''));
  if (fs.existsSync(src)) fs.copyFileSync(src, dest);
});

// Start server
http.createServer((req, res) => {
  const filePath = path.join(DIST_PATH, req.url === '/' ? 'index.html' : req.url);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }
    const contentType = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript'
    }[path.extname(filePath)] || 'text/plain';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Game running at http://localhost:${PORT}`);
  open(`http://localhost:${PORT}`);
});