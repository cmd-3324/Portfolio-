# Stage 1: Build/Serve static files with Nginx
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy your HTML, CSS, JS files
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY main.js /usr/share/nginx/html/
COPY i18n.js /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/

# Copy assets (images, fonts, favicon)
COPY assets /usr/share/nginx/html/assets/

# Copy custom Nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
