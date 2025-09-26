# Use an official Node.js image from Docker Hub
FROM node:18

# ENV TURBOPACK=1
# ENV NEXT_TELEMETRY_DISABLED=1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container(to cache dependencies)
COPY package*.json ./

# Install the dependencies
RUN npm install

# The COPY . . command will copy everything (including your node_modules and .next directories) into /src/app. You might not want this because it could conflict with volumes in docker-compose.yml. You'd want to avoid copying node_modules and .next into the container from the host.ADD a .dockerignore file to exclude these directories.
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to start the Next.js app
CMD ["npm", "run", "dev"]
