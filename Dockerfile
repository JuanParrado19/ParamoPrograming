# Use Node.js to build the React app
FROM node:18 AS builder
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:latest
WORKDIR /usr/share/nginx/html

# Remove default Nginx files and copy the built React app
RUN rm -rf ./*
COPY --from=builder /app/build .

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]