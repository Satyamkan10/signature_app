# Use the official NGINX image as the base
FROM nginx:latest

# Copy the contents of the app directory to the NGINX html directory
COPY app/ /usr/share/nginx/html

# Expose port 80 to make the app accessible outside the container
EXPOSE 80
