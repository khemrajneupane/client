FROM node:alpine

# Set the working directory to /api
WORKDIR /app

# copy package.json into the container at /api
COPY package*.json /app/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
COPY . /app/

# Make port 80 available to the world outside this container


# Run the app when the container launches
CMD ["npm", "run", "start"]