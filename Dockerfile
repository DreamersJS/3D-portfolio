# Use an official Node.js image from Docker Hub
FROM node:18

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to start the Next.js app
CMD ["npm", "run", "dev"]
