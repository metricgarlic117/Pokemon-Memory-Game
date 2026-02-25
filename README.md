# 🎮 Pokemon Memory Game

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](#)
[![License](https://img.shields.io/badge/license-MIT-green)](#)

## 📖 Description
Pokemon Memory Game is a dynamic, web-based memory card game built with React. The objective of the game is simple: earn points by clicking on different Pokemon cards, but avoid clicking on any card more than once. The game pulls live data from the [PokéAPI](https://pokeapi.co/), populating the board with a fresh set of Pokémon every time to ensure no two games feel exactly the same!

## 🎮 Live Demo
Play the game live here: **[Pokemon Memory Game](https://metricgarlic17.github.io/Pokemon-Memory-Game/)**

## ✨ Features
- **Dynamic Data Fetching**: Retrieves random Pokémon data and sprites on load via PokéAPI.
- **Score Tracking**: Keeps track of your current score and your highest score across attempts.
- **Card Shuffling**: The board automatically scrambles after every valid click to challenge your memory.
- **Win/Loss Conditions**: Win the game by successfully clicking 10 unique Pokémon. Click a duplicate, and you lose!

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite
- **Styling**: Vanilla CSS
- **API**: PokéAPI
- **Package Manager**: Bun

## 🚀 Installation Instructions

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/metricgarlic17/Pokemon-Memory-Game.git
   cd Pokemon-Memory-Game
   ```

2. **Install dependencies:**
   *(Note: This project uses Bun as the package manager due to the presence of `bun.lock`)*
   ```bash
   bun install
   ```
   *(Alternatively, you can use `npm install` or `yarn install`)*

## 🕹️ Usage

To start the development server:

```bash
bun run dev
```

Open your browser and navigate to `http://localhost:5173` to play the game!

## 📁 Project Structure

```text
Pokemon-Memory-Game/
├── public/               # Public assets
├── src/
│   ├── assets/           # Application assets
│   ├── components/       # Reusable React components (e.g., Card)
│   ├── App.css           # Component styles
│   ├── App.jsx           # Main application logic and state
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
├── bun.lock              # Bun lockfile
├── eslint.config.js      # ESLint configuration
├── package.json          # Project metadata and dependencies
└── vite.config.js        # Vite configuration
```

## ⚙️ Configuration
No additional configuration is required to run this project. It connects directly to the public PokéAPI out of the box.

## 🔑 Environment Variables
No environment variables are needed for this project.

## 📡 API Endpoints
This project utilizes the [PokéAPI](https://pokeapi.co/):
- **Endpoint Used**: `GET https://pokeapi.co/api/v2/pokemon/{id}`
- **Data Fetched**: Pokémon ID, Name, and Sprite Image (front_default).

## 🧪 Running Tests
Currently, there are no automated tests configured for this project. You are welcome to add Jest or Vitest for testing your components!

## 📦 Deployment
You can easily build this Vite application using services like Vercel, Netlify, or GitHub Pages.

To create an optimized production build:
```bash
bun run build
```
This will generate a `dist/` directory ready for deployment.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/metricgarlic17/Pokemon-Memory-Game/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

## 👤 Author
**metricgarlic17**
- GitHub: [@metricgarlic17](https://github.com/metricgarlic17)
