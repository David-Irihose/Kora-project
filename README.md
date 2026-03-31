# Kora - Remote Jobs 

A real-time remote job search application built with pure HTML, CSS, and JavaScript. This platform connects users to the latest remote work opportunities worldwide, sourced directly from the Remotive API.

## Demo video
---
[Link to the video:](https://www.loom.com/share/66fd8738b60b4c45a463d161df11fcb7) (https://www.loom.com/share/66fd8738b60b4c45a463d161df11fcb7)

The video demonstrates how the application works and looks, including remote job search functionality, real-time API integration, filtering options, and the responsive layout.

It highlights how users can efficiently find remote work opportunities through an intuitive and structured interface. The demo also showcases the application's clean design and seamless navigation.

## Features

- Home Page: Landing page with hero search and categories
- Live Job Search: Fetch real-time job listings using API
- Dynamic Filters: Filter by company and sort results
- Category Tags: Quick access to job types (Frontend, Data Science, etc.)
- Responsive Design: Works on mobile, tablet, and desktop
- Sticky Footer: Professional layout design
- Contact Form: User feedback section

## API Details

This project integrates the **Remotive API**, a public API that provides real-time remote job listings.

- **API Endpoint**: https://remotive.com/api/remote-jobs  
- **Type**: REST API (No authentication required)  
- **Data Source**: Remote job listings from global companies  
- **Usage**: The application fetches data dynamically based on user search input  

This API was chosen because it is free, reliable, and provides comprehensive job data without requiring an API key.


## Technologies Used

-**HTML**: Semantic structure and page layouts.
-**CSS**: Custom styling, flexbox layouts, and interactive animations.
-**JavaScript**: Core logic, asynchronous API fetching (`async/await`), and dynamic DOM manipulation.

## Project Structure

-   `index.html`: The main structural file containing all application pages (SPA-style).
-   `style.css`: The styling logic for the entire application.
-   `script.js`: Handles navigation, API integration, and search/filter logic.

## How to Run Locally

1. **Clone this repository**:
   ```bash
   git clone https://github.com/David-Irihose/Kora-project.git
   ```

2. **Navigate into the project folder**:
   ```bash
   cd Kora-project
   ```

3. **Open index.html in your browser**:
   - Double click `index.html` OR
   - Use **Live Server** extension in VS Code.

4. **Start Searching**:
   - Type a job role (e.g., "Frontend Developer", "Data Analyst") or click a category tag to search live jobs!

> [!NOTE]
> No API key is needed. The Remotive API is completely free and publicly accessible, so you'll just need an internet connection to fetch the live job data.

## Deployment

This application is deployed on two web servers behind 
a load balancer using Nginx.

### Architecture
- **Web Server 1 (web-01):** Serves the application
- **Web Server 2 (web-02):** Serves the application  
- **Load Balancer (lb-01):** Distributes traffic between 
  both servers using Round Robin algorithm

### Web Server Setup (Web01 & Web02)

1. **Clone the repository on each server**:
   ```bash
   git clone https://github.com/David-Irihose/Kora-project.git
   ```

2. **Copy files to Nginx web root**:
   ```bash
   sudo rm -rf /var/www/html/*
   sudo cp -r Kora-project/* /var/www/html/
   ```

3. **Set correct permissions**:
   ```bash
   sudo chmod 644 /var/www/html/*
   sudo chmod 755 /var/www/html/
   ```

4. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

### Load Balancer Configuration
The load balancer uses Nginx as a reverse proxy to distribute traffic between Web01 and Web02.

## Learning Purpose

This project was developed to demonstrate API integration using JavaScript, including asynchronous data fetching, error handling, and dynamic UI updates.

**Built for a School Project — API Integration Assignment.**
*2026 Irihose David*
