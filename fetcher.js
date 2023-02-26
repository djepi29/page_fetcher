const request = require('request');
const fs = require('fs');

// Get the command line arguments
const [,, url, path] = process.argv;

// Make the HTTP request and write the file
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error downloading file: ${error}`);
    return;
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.error(`Error writing file: ${error}`);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});