# Use the official Node.js image
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install the necessary packages
RUN npm install express mongoose

# Expose the application port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
