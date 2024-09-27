# Step 1: Use a Node.js image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code to the container
COPY . .

# Step 6: Expose the port the app runs on (optional, if you need a local server)
EXPOSE 8081

# Step 7: Define the command to run the app
CMD ["npm", "start"]
