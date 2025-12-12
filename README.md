# 🚀 Kunal Rathore's Digital Playground

> **Where Code Meets Creativity** – A developer portfolio that talks back (literally 🤖)

Welcome to my corner of the internet! This isn't just another portfolio site. It's an **interactive experience** powered by AI, built with cutting-edge tech, and sprinkled with smooth animations that won't bore you to tears.

**→ [Visit kunalx1.is-a.dev](https://kunalx1.is-a.dev)**

---

## 🎯 What's Inside?

### 💬 AI-Powered Chatbot
Got questions? The floating chatbot (powered by **Google Gemini**) is your personal portfolio assistant. Ask about my projects, skills, or even what I had for breakfast (just kidding... maybe 😄).

### 🌓 Dark Mode That Won't Blind You
Beautiful dark theme + smooth light mode transition. Your eyes will thank you at 3 AM while you're scrolling through my projects.

### ✨ Animations That Feel Natural
Powered by **Framer Motion** and **Lenis smooth scrolling** – everything glides like butter. No jank, no janky jumps. Pure smooth vibes.

### 📱 Works Everywhere
Desktop, tablet, phone – your experience stays crispy on all devices.

---

## 🛠️ Built With Modern Magic

### Frontend Arsenal
```
React 18 → Vite → Tailwind CSS 4 → Framer Motion → React Router
```
- **React Markdown** for dynamic content
- **Lucide React** for sleek icons

### Backend Power
```
Express.js → Google Gemini API → Rate-Limited Streaming
```
- Real-time streaming responses
- Smart rate limiting (no bot abuse here 🛡️)
- CORS-protected API endpoints

### Deployment Ready
- Frontend: **Vercel** (lightning fast)
- Backend: API-ready for any cloud provider
- Environment-based configuration

---

## 🎪 The Projects Showcase

| Project | What It Does | Stack |
|---------|-------------|-------|
| **Research Paper Copilot** | AI discovers & analyzes academic papers | React, Gemini, arXiv API, MongoDB |
| **Dark-Dev-Theme** | Sleek VS Code theme for developers | JSON, VS Code, Git |
| **Expensify** | Full-stack expense tracker | React, Express, MongoDB, Postman |
| **Todo App** | Task management with authentication | HTML/CSS/JS, Node, MongoDB |

---

## 🚀 Quick Start (Copy-Paste Edition)

### Setup
```bash
# Clone & install
git clone <repo>
cd Portfolio
npm install

# Backend setup
cd server && npm install && cd ..

# Create your secrets file
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env
echo "PORT=5000" >> .env
echo "CORS_ORIGIN=http://localhost:5173" >> .env
```

### Run
```bash
# Terminal 1: Frontend (port 5173)
npm run dev

# Terminal 2: Backend (port 5000)
cd server && npm start
```

Visit `http://localhost:5173` and chat with the bot in the bottom-right corner! 🤖

### Deploy
```bash
npm run build
# Upload dist/ to Vercel, Netlify, or any static host
```

---

## 📂 Project Layout

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Main-Pages/       # Home, About, Projects, Reads
│   │   ├── Header-Nav/       # Navigation & sidebar
│   │   ├── ChatBubble.jsx    # The chatbot widget
│   │   └── ui/               # Reusable UI components
│   ├── config/chatConfig.js  # Chatbot personality & content
│   ├── constants/            # Projects, skills, social links
│   ├── hooks/                # useDarkMode, useScrollTo, etc.
│   ├── context/              # ScrollContext, NavToggleContext
│   ├── lib/                  # Utils & animations
│   └── App.jsx               # Main entry point
│
├── server/
│   ├── server.js             # Express + Gemini integration
│   └── package.json
│
└── .env                       # Your secrets (never commit!)
```

---

## ⚙️ Configuration Secrets

### Chatbot Personality (`src/config/chatConfig.js`)
This file controls what the AI knows about you:
- Your name, avatar, and skills
- Experience & achievements
- Project descriptions
- Contact information

Edit this, and the bot becomes your perfect spokesperson!

### Environment Variables
```env
VITE_GEMINI_API_KEY=sk-...           # Google Gemini API key (required)
PORT=5000                             # Backend port
CORS_ORIGIN=http://localhost:5173    # Frontend URL
SYSTEM_PROMPT=custom_system_message   # Override bot personality
RATE_LIMIT_MAX_REQUESTS=8            # Requests per window
RATE_LIMIT_WINDOW_MS=60000           # Time window in ms
```

---

## 🤖 How the Chatbot Works

```
┌─────────────────────────────────────────────────┐
│  User types message in floating chat widget     │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  Frontend validates & POSTs to /api/chat        │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  Backend checks rate limits & sanitizes input   │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  Express calls Google Gemini API with context   │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  Response streams back as NDJSON (real-time)    │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│  Frontend displays message character by char     │
└─────────────────────────────────────────────────┘
```

---

## 🎨 Customize It

### Add Your Projects
Edit `src/constants/projects.js`:
```javascript
{
  topicName: 'Your Project',
  description: 'What it does',
  techStack: ['React', 'Node', 'MongoDB'],
  deployLink: 'https://live-link.com',
  github: 'https://github.com/...'
}
```

### Change Colors
Tailwind CSS is your playground. Edit component classes or modify the theme in `tailwind.config.js`.

### Update Bot Personality
Edit `server/server.js` → `SYSTEM_PROMPT` to change how the AI behaves. Want it funny? Formal? Laid-back? You control it.

---

## 🚢 Deploy to the World

### Frontend (Vercel - Recommended)
```bash
npm run build
# Connect your GitHub repo to Vercel → Auto-deploys on push
```

### Backend (Vercel, Railway, Render, Heroku, etc.)
```bash
cd server
# Deploy with your .env secrets
```

**Pro Tip:** Use Vercel for both frontend AND serverless backend functions. No separate server needed!

---

## 🔒 Security Features

- **CORS Protection** – Only allow requests from your domain
- **Rate Limiting** – Prevent bot abuse (8 requests/min)
- **Input Sanitization** – All user input cleaned before processing
- **Trust Proxy** – Works behind reverse proxies safely
- **No credentials logged** – API keys stay secure in .env

---

## 📊 Tech Deep Dive

| Layer | Technology | Why |
|-------|-----------|-----|
| **UI Framework** | React 18 | Component-based, fast, industry standard |
| **Build Tool** | Vite | Lightning-fast builds & dev server |
| **Styling** | Tailwind CSS 4 | Utility-first, highly customizable |
| **Animations** | Framer Motion | Smooth, performant motion primitives |
| **Server** | Express.js | Lightweight, mature, perfect for APIs |
| **AI** | Google Gemini | State-of-the-art, streaming responses |
| **Deployment** | Vercel | Built for Next.js/React, serverless ready |

---

## 🎯 Features at a Glance

- ✅ Interactive AI chatbot assistant
- ✅ Dark/light mode toggle
- ✅ Smooth scroll animations
- ✅ Responsive design (mobile-first)
- ✅ Project showcase with live links
- ✅ Skills & tech stack display
- ✅ Social media links
- ✅ Rate-limited API endpoints
- ✅ Production-ready code
- ✅ Easy to customize

---

## 📚 Learn More

- **Gemini API:** [google.com/generativeai](https://google.com/generativeai)
- **Vite Docs:** [vitejs.dev](https://vitejs.dev)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)

---

## 🤝 Contributing

Found a bug? Want to suggest something? Feel free to open an issue or reach out through the chatbot!

---

## 📜 License

This project is open-source and personal. Use it as inspiration for your own portfolio!

---

<div align="center">

### Made by Kunal Rathore

**Have questions? Chat with the AI bot on the site! or feel free to contact**

[Live Site](https://kunalx1.is-a.dev) • [GitHub](https://github.com/kunal-rathore-111) • [Email](mailto:kunalx1@gmail.com)

</div>
