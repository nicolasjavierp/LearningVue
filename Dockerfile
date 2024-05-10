# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Install Vue CLI globally
RUN npm install -g @vue/cli

# Expose the port that the development server will use (usually 8080)
EXPOSE 8080

# Start the development server
CMD ["vue", "ui", "--headless", "--host", "0.0.0.0"]