# Giphy Search Web

A React + TypeScript web app that allows users to search and browse GIFs using the Giphy API.
The app features infinite scroll grid of results, a modal for viewing GIFs in detail, and toast notifications for user actions.

---

# Tech Stack

- **Frontend:** React, TypeScript, CSS
- **API Requests:** Axios
- **Deployment:** AWS S3 + CloudFront using Serverless

# Installation & Setup

1. Clone the repository:
- `git clone https://github.com/LongR1ver/Giphy-Search-Web.git`
- `cd giphy-search`

2. Install dependencies:
- `npm install`

3. Create a .env file in the root directory and go to Giphy Developer to create an API Key, then add:
- `REACT_APP_GIPHY_API_KEY=your_giphy_api_key`

4. Run the project locally:
- `npm start`
- The app will run on http://localhost:3000 by default

# Deployment

Currently the web is deployed at https://d2a6sxa6iwao1y.cloudfront.net