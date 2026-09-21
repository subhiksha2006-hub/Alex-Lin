/**
 * Express Backend Server for Alex Lin's Student Portfolio Website
 * Provides RESTful APIs for profile data, projects, coursework, and contact dispatch submissions.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Data directory and paths
const DATA_DIR = path.join(__dirname, 'data');
const PORTFOLIO_DATA_FILE = path.join(DATA_DIR, 'portfolio-data.json');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

// Ensure data directory and initial files exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf-8');
}

// Helpers for data reading and writing
function readPortfolioData() {
  try {
    if (fs.existsSync(PORTFOLIO_DATA_FILE)) {
      const content = fs.readFileSync(PORTFOLIO_DATA_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('[Error] Failed to read portfolio-data.json:', err.message);
  }
  return { profile: {}, coursework: [], experience: [], projects: [] };
}

function readMessages() {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const content = fs.readFileSync(MESSAGES_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('[Error] Failed to read messages.json:', err.message);
  }
  return [];
}

function saveMessages(messages) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('[Error] Failed to write messages.json:', err.message);
    return false;
  }
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
});

// Serve Static Files from the root folder
app.use(express.static(__dirname));

/* -------------------------------------------------------------
 * API Routes
 * ------------------------------------------------------------- */

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// Profile Data
app.get('/api/profile', (req, res) => {
  const data = readPortfolioData();
  res.json({ success: true, data: data.profile });
});

// Projects
app.get('/api/projects', (req, res) => {
  const data = readPortfolioData();
  res.json({ success: true, count: data.projects?.length || 0, data: data.projects });
});

// Coursework
app.get('/api/coursework', (req, res) => {
  const data = readPortfolioData();
  res.json({ success: true, count: data.coursework?.length || 0, data: data.coursework });
});

// Experience
app.get('/api/experience', (req, res) => {
  const data = readPortfolioData();
  res.json({ success: true, count: data.experience?.length || 0, data: data.experience });
});

// Contact / Dispatch Submission
app.post('/api/contact', (req, res) => {
  const { name, email, topic, message } = req.body;

  // Validation
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ success: false, error: 'Name is required' });
  }

  if (!email || typeof email !== 'string' || !email.trim()) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  // Basic email pattern validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ success: false, error: 'Invalid email address format' });
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, error: 'Message content cannot be empty' });
  }

  // Create new dispatch entry
  const newDispatch = {
    id: 'disp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    name: name.trim(),
    email: email.trim(),
    topic: (topic || 'General Inquiry').trim(),
    message: message.trim(),
    timestamp: new Date().toISOString(),
    ip: req.ip || req.headers['x-forwarded-for'] || '127.0.0.1',
    read: false
  };

  const messages = readMessages();
  messages.unshift(newDispatch);

  if (saveMessages(messages)) {
    console.log(`[Dispatch] Received new message from ${newDispatch.name} <${newDispatch.email}>: "${newDispatch.topic}"`);
    return res.status(201).json({
      success: true,
      message: 'Dispatch received and queued successfully',
      dispatchId: newDispatch.id,
      timestamp: newDispatch.timestamp
    });
  } else {
    return res.status(500).json({ success: false, error: 'Failed to persist dispatch to storage' });
  }
});

// Alias for contact endpoint: /api/dispatch
app.post('/api/dispatch', (req, res) => {
  req.url = '/api/contact';
  app.handle(req, res);
});

// Retrieve all submitted messages (Admin/Dashboard)
app.get('/api/messages', (req, res) => {
  const messages = readMessages();
  res.json({
    success: true,
    total: messages.length,
    data: messages
  });
});

// Delete a message by ID
app.delete('/api/messages/:id', (req, res) => {
  const { id } = req.params;
  const messages = readMessages();
  const initialLength = messages.length;
  const filtered = messages.filter((msg) => msg.id !== id);

  if (filtered.length === initialLength) {
    return res.status(404).json({ success: false, error: 'Message not found' });
  }

  saveMessages(filtered);
  res.json({ success: true, message: `Message ${id} deleted successfully` });
});

// Fallback to index.html or code.html for root navigation
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  const codePath = path.join(__dirname, 'code.html');

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else if (fs.existsSync(codePath)) {
    res.sendFile(codePath);
  } else {
    res.status(404).send('No frontend HTML entrypoint found');
  }
});

// 404 Handler for undefined API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[Unhandled Error]', err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Portfolio Backend Server running on http://localhost:${PORT}`);
  console.log(`📡 Health Check:  http://localhost:${PORT}/api/health`);
  console.log(`📬 API Dispatch:  POST http://localhost:${PORT}/api/contact`);
  console.log(`📋 API Messages:  GET http://localhost:${PORT}/api/messages`);
  console.log(`======================================================\n`);
});
