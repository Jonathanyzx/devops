# Use the lightweight Nginx web server image
FROM nginx:alpine

# Copy the HTML file into the Nginx web directory
COPY index.html /usr/share/nginx/html/index.html

# Expose port 80 inside the container
EXPOSE 80
