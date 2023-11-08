# Job Marketplace Web App

This MERN (MongoDB, Express, React, Node.js) stack web application is designed to serve as a job marketplace similar to online marketplaces. Users can post and bid on job listings in various categories, making it a versatile platform for job seekers and employers.

![App Screenshot](<Add an image or screenshot here if you have one>)

## Live Demo

Check out the live version of the app [here](https://taskhub-7bbe0.web.app).

## Features

1. **User Authentication:**
   - Users can register and log in with email/password-based authentication.
   - Implement social login for convenience.

2. **Home Page:**
   - A welcoming home page with a banner to introduce the platform.
   - Users can browse job listings by category.

3. **Browse By Category:**
   - Categorize jobs into web development, digital marketing, and graphics design.
   - Tab-based system to navigate and view listings.

4. **Adding and Bidding on Jobs:**
   - Users can post job listings.
   - Bidders can bid on the listed jobs.
   - Prevent employers from bidding on their own jobs.
   - When bidding, data is stored in a MongoDB database.
   - Toast notifications for successful actions.
   - Redirect users to the "My Bids" page after bidding.

5. **My Posted Jobs:**
   - Users can view, update, and delete their posted jobs.

6. **My Bids:**
   - Users can see the jobs they have bid on.
   - Users can manage bid requests.

7. **404 Page:**
   - A custom 404 page for handling not-found errors.

8. **Private Routes:**
   - Implement private routes with JWT for access control.
   - Private route pages include My Bids, Add Job, My Posted Jobs, Bid Request, and Job Detail.

9. **Environment Variables:**
   - Securely store Firebase configuration keys and MongoDB credentials using environment variables.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd job-marketplace-app

