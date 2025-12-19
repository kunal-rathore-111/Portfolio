// API Configuration
// In development: uses localhost:5000
// In production: uses VITE_API_URL from environment

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
