# 💕 Valentine's Day Website for Sneha

A cute, interactive, and playful Valentine's Day website built with React, CSS3 animations, and interactive features.

## 🌟 Features

### Interactive Elements
- 🎯 **Click the Heart Button** - Click the large heart button to create floating hearts and reveal the special message
  - Click twice to unlock the "I LOVE YOU" message
- 💫 **Floating Hearts** - Continuously animated hearts float upward with smooth animations
- ⭐ **Twinkling Stars** - Beautiful starfield background with twinkling effects
- 🌹 **Dancing Roses** - Rose emojis that bob up and down gracefully

### Visual Design
- 🎨 **Gradient Background** - Animated gradient that shifts through pink and purple tones
- ✨ **Glass-Morphism Card** - Modern frosted glass effect for the main content
- 🎪 **Responsive Design** - Works smoothly on desktop and mobile devices
- 💝 **Smooth Animations** - Multiple layers of CSS animations for a polished feel

### Interactive Features
- 🎯 **Message Reveal** - Typing animation that reveals "I LOVE YOU, SNEHA" with a glowing effect
- 🎨 **Color-Changing Buttons** - 8 interactive buttons with different loving messages
- 💬 **Floating Messages** - Click buttons to see loving phrases float upward
- 📱 **Responsive Layout** - Adapts beautifully to all screen sizes

## 🚀 How to Use

### Starting the Website

1. System Requirements:
   - Node.js v14+ and npm installed

2. To start the development server:
```bash
npm install  # (Already done)
npm run dev
```

3. The website will open at: **http://localhost:5174**

### Interactive Gameplay

1. **Click the Heart Button (💕)**
   - First click: Creates floating hearts
   - Second click: Reveals the special message with typing animation

2. **Click the Color Buttons**
   - Click any of the 8 emoji buttons to create floating love messages
   - Each button shows a different loving sentiment
   - Watch the messages float upward!

3. **Enjoy the Animations**
   - Hearts continuously float around the background
   - Stars twinkle in the background
   - Roses dance at the bottom
   - Everything is optimized for a smooth, delightful experience

## 🎨 Project Structure

```
valentine/
├── src/
│   ├── App.jsx              # Main React component
│   ├── App.css              # Main styling with gradients and animations
│   ├── index.css            # Global styles
│   ├── main.jsx             # React entry point
│   └── components/
│       ├── FloatingHearts.jsx        # Animated floating hearts
│       ├── FloatingHearts.css        # Hearts animation styles
│       ├── MessageReveal.jsx         # "I LOVE YOU" typing animation
│       ├── MessageReveal.css         # Message styling
│       ├── InteractiveButtons.jsx    # Color buttons component
│       └── InteractiveButtons.css    # Button styling
├── public/                  # Static assets
├── index.html              # HTML entry point
├── package.json            # Project dependencies
└── vite.config.js          # Vite configuration
```

## 🛠️ Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

## 💻 Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool
- **CSS3** - Animations, gradients, and styling
- **JavaScript ES6+** - Interactive functionality

## 🎯 Customization Ideas

### Change the Name
Edit the subtitle in `src/App.jsx`:
```jsx
<p className="subtitle">For my sweet [Name] ❤️</p>
```

### Change Colors
Edit the gradient colors in `src/App.css` in the `.app` selector:
```css
background: linear-gradient(
  -45deg,
  #your-color1 0%,
  #your-color2 25%,
  ...
);
```

### Change Messages
Edit the phrases in `src/components/InteractiveButtons.jsx`:
```jsx
const phrases = [
  '😍 Your custom message',
  '💖 Another message',
  ...
];
```

### Change the Main Message
Edit in `src/components/MessageReveal.jsx`:
```jsx
const fullMessage = 'YOUR CUSTOM MESSAGE ❤️';
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to your repository

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ❤️ Special Notes

This website was created with love for Valentine's Day 2026. Feel free to customize it and make it your own!

Made with 💕 by your coding assistant

---

**Created on:** February 6, 2026  
**For:** Sneha  
**Occasion:** Valentine's Day  
**Status:** Active & Ready! 🎉
