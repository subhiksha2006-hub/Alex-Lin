# Portfolio Backend & Web Application

Modern, minimalist portfolio backend service for Alex Lin, built with **Node.js** and **Express**.

## Features

- **Static Frontend Serving**: Serves the high-performance portfolio UI directly at `http://localhost:3000`.
- **Contact Dispatch API**: Handles incoming messages from the contact form with validation, sanitization, and persistent JSON storage.
- **RESTful Endpoints**: Provides structured JSON endpoints for Profile, Projects, Academic Coursework, and Experience.
- **Admin Message Queue**: Review or delete submitted inquiries at `/api/messages`.
- **Zero-Config Database**: File-based storage in `data/messages.json` with auto-creation.

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Server
```bash
# Start in production mode
npm start

# Or start in live reload development mode
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

---

## API Documentation

### `POST /api/contact` (or `/api/dispatch`)
Submit an inquiry via the portfolio contact form.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "topic": "Full-Time Engineering / Design Opportunity (2025)",
  "message": "We would love to discuss a product engineering role with you!"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Dispatch received and queued successfully",
  "dispatchId": "disp_1726935200000_a1b2c",
  "timestamp": "2026-09-21T16:15:00.000Z"
}
```

### `GET /api/messages`
Retrieve all stored contact form dispatches.

**Response (200 OK):**
```json
{
  "success": true,
  "total": 1,
  "data": [
    {
      "id": "disp_1726935200000_a1b2c",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "topic": "Full-Time Engineering / Design Opportunity (2025)",
      "message": "...",
      "timestamp": "2026-09-21T16:15:00.000Z",
      "ip": "127.0.0.1",
      "read": false
    }
  ]
}
```

### `GET /api/profile`
Retrieve portfolio owner's bio, education stats, and socials.

### `GET /api/projects`
Retrieve curated portfolio projects.

### `GET /api/coursework`
Retrieve UC Berkeley coursework and syllabus breakdown.

### `GET /api/health`
Check server health and uptime.

---

## Project Structure

```
├── .env                  # Environment variables
├── .env.example          # Sample environment config
├── code.html             # Original student portfolio mockup
├── index.html            # Primary entrypoint connected to the backend API
├── package.json          # Node.js dependencies and run scripts
├── server.js             # Express backend server and REST APIs
├── data/
│   ├── portfolio-data.json # Profile, coursework, projects data
│   └── messages.json     # Stored contact dispatches
└── DESIGN.md             # Design tokens and aesthetic guidelines
```
