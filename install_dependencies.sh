#!/bin/bash

# Navigate to the app directory
cd /var/www/react-app

# Install the Node.js dependencies for the React app
npm install

# Build the React app for production (this will create the build folder)
npm run build

# Copy the built files to the Nginx web directory
sudo cp -r build/* /var/www/html/

# Restart Nginx to serve the updated app
sudo systemctl restart nginx
