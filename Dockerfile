# Stage 1: Compile and Build angular codebase
FROM node:14.17.0-alpine as build 
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

# Stage 2: Serve app with nginx server
FROM nginx:latest
COPY --from=build /usr/local/app/dist/shark-timer /usr/share/nginx/html

# Expose port 80
EXPOSE 80