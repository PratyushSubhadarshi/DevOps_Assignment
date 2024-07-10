# Use the official Node.js 14 image
FROM node:14

# Set a non-root user with limited privileges
RUN useradd -m -r pratyush

# Set working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --unsafe-perm

# Copy the rest of the application code to the working directory
COPY . .

# Change ownership of the working directory to the non-root user
RUN chown -R pratyush /server

# Expose the port that the app runs on (3000 by default in your Node.js app)
EXPOSE 3000

# Switch to the non-root user
USER pratyush

# Command to run the application
CMD ["node", "server.js"]
