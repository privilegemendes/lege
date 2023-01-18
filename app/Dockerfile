# Stage 1, initialize the build stage based on the Node.js image and compile the frontend
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install && npm install react-scripts@5.0.0 -gz

# Add private NPM repository to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Take care of env variables


# Stage 2 - Create with Ngix

# Set up build
COPY . /app
RUN echo "REACT_APP_CLIENT_NAME=Lege Client 0.1" > .env

RUN cat .env
RUN npm run build \
  && rm -rf node_modules \
  && rmm src

# Stage 3 - Create the production image with Nginx \
# based on the previous image, where the static files were generated

FROM nginx:1.19.0-alpine
COPY --from=build /app/build /usr/share/nginx/html