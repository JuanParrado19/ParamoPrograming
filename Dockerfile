FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Set environment variable to production
ENV NODE_ENV=production

# Build the Vite app (outputs to dist, not build)
RUN npm run build && ls -la /app/dist

# Step 2: Use Nginx to serve the Vite build files
FROM nginx:latest

# Set working directory inside Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built Vite app from the builder stage
COPY --from=builder /app/dist ./

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]