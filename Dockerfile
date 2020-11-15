FROM node:alpine

# Set the working directory to /api
#WORKDIR /app

# copy package.json into the container at /api
#COPY package*.json yarn.lock /app/

# install dependencies
RUN yarn install

# Copy the current directory contents into the container at /api
COPY . /app/

# Make port 80 available to the world outside this container
#EXPOSE 3000

# Run the app when the container launches
CMD ["yarn", "run", "start"]