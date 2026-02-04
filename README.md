# Supervisor Research Recommender - Frontend

A beautiful, Apple-inspired React frontend for the Supervisor Research Recommender system.

## Features

✨ **Apple-Inspired Design**
- Clean, minimal aesthetic with glass morphism effects
- Smooth animations and transitions
- Gradient accents and modern typography

📱 **Fully Responsive**
- Mobile-first approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interface elements

🎨 **Modern UI Components**
- Elegant search interface
- Recommendation cards with visual ranking
- Loading states and error handling
- Match score visualization

⚡ **Performance**
- Built with Vite for fast development
- Optimized production builds
- Smooth performance on all devices

## Prerequisites

- Node.js 16+ 
- npm or yarn
- Backend running on http://localhost:8000

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

API requests to `http://localhost:8000` are automatically proxied.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── SearchSection.jsx    # Search input and controls
│   │   ├── RecommendationsGrid.jsx  # Results display
│   │   └── LoadingSpinner.jsx   # Loading indicator
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **PostCSS & Autoprefixer** - CSS processing

## API Integration

The frontend communicates with the backend via the `/recommend` endpoint:

**Request:**
```javascript
POST /recommend
{
  "proposal_text": "Your research proposal here..."
}
```

**Response:**
```javascript
{
  "proposal": "Your research proposal here...",
  "recommendations": [
    "Supervisor Name 1",
    "Supervisor Name 2",
    // ... up to 5 recommendations
  ]
}
```

## Customization

### Colors
Modify `tailwind.config.js` to change the color scheme. The app uses:
- Primary: `#0071E3` (Apple Blue)
- Secondary: `#F5F5F7` (Apple Light Gray)

### Fonts
System fonts are used by default (San Francisco on Mac). Modify the `fontFamily` in `tailwind.config.js` to use custom fonts.

### Content
Edit components in `src/components/` to customize text, messages, and UI elements.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is part of the Supervisor Research Recommender system.
