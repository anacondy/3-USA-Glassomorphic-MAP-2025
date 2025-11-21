# 🇺🇸 US Political Dashboard 2025

**🔗 Live Demo:** [https://anacondy.github.io/3-USA-Glassomorphic-MAP-2025/](https://anacondy.github.io/3-USA-Glassomorphic-MAP-2025/)

---

> *"For God and country - Geronimo"* - Zero Dark Thirty

**Created by Puppy Pilot & Anacondy**

---

## 📖 Overview

An interactive USA political governance map with a sleek dark theme. This web application visualizes all 50 states plus Washington D.C. with political party coloring (Democrat/Republican), interactive state selection, and legislative composition data. Fully optimized for mobile devices with 16:9 and 20:9 aspect ratios.

## ✨ Features

- **🗳️ Political Map**: Dark-themed USA map with Democrat (blue) and Republican (red) state coloring
- **📱 Mobile Optimized**: Perfect display on 16:9 and 20:9 aspect ratio phones
- **🖱️ Interactive**: Click any state to view governor, capital, and legislature information
- **📊 Legislative Data**: View political composition for each state
- **🔒 Security Protected**: CSP headers, input sanitization, and XSS prevention
- **♿ Accessible**: Keyboard navigation and screen reader support
- **🌈 Responsive**: Adapts seamlessly to all screen sizes
- **⚡ Smooth Interactions**: Hardware-accelerated transitions

## 🖼️ Screenshots

### Desktop View - Dark Theme
![Desktop View](https://github.com/user-attachments/assets/924fb111-1dd3-45f1-a4ff-c7da3e72efeb)

### Interactive State Selection
![State Selected](https://github.com/user-attachments/assets/70ddbded-e19f-47d6-bd0d-65ee30673a1c)

### Mobile View (16:9)
![Mobile 16:9](https://github.com/user-attachments/assets/b3c6ada1-0907-4ad2-b545-949a03b9790b)

### Mobile View (20:9)
![Mobile 20:9](https://github.com/user-attachments/assets/7d530cb8-f9f0-4296-a177-31f51f1c3893)

## 🚀 Getting Started

### Quick Start

Simply open the `index.html` file in a modern web browser:

```bash
# Clone the repository
git clone https://github.com/anacondy/3-USA-Glassomorphic-MAP-2025.git

# Navigate to the directory
cd 3-USA-Glassomorphic-MAP-2025

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Local Development Server

For testing with a local server:

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Node.js (with http-server)
npx http-server -p 8080
```

Then visit `http://localhost:8080` in your browser.

## 📱 Mobile Optimization

### Supported Aspect Ratios

- ✅ **16:9** - Most common smartphone aspect ratio (360x640, 414x736, etc.)
- ✅ **20:9** - Modern tall phones (360x740, 412x824, etc.)
- ✅ **Portrait & Landscape** - Automatic orientation detection
- ✅ **Tablets** - Optimized for iPad and Android tablets
- ✅ **Desktop** - Full responsive support up to 4K displays

### Mobile Features

- **Touch Optimized**: Large tap targets and smooth touch interactions
- **No Zoom**: Prevents double-tap zoom for better UX
- **Haptic Feedback**: Vibration on state selection (if supported)
- **Smooth Scrolling**: Auto-scroll to info panel on mobile
- **Fast Loading**: Minimal dependencies, pure vanilla JavaScript

## 🔒 Security Features

This application implements multiple security measures:

1. **Content Security Policy (CSP)**: Prevents XSS attacks via meta tags
2. **X-Frame-Options**: Prevents clickjacking attacks
3. **Input Sanitization**: All user data is sanitized before display
4. **XSS Prevention**: Text content escaping for all dynamic content
5. **No External Dependencies**: Zero third-party library vulnerabilities
6. **Context Menu Protection**: Prevents tampering on map elements

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Dark theme with responsive media queries
- **JavaScript (Vanilla)**: No frameworks, pure ES6+ code
- **SVG**: Scalable vector graphics for the interactive map

## 📂 Project Structure

```
3-USA-Glassomorphic-MAP-2025/
├── index.html          # Main HTML structure
├── styles.css          # Dark theme styling and responsive design
├── script.js           # Interactive functionality with political data
├── .gitignore          # Git ignore rules
├── LICENSE             # Project license
└── README.md           # This file
```

## 💻 Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 94+
- ✅ Safari 15.4+
- ✅ Opera 74+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Dark theme works best on modern browsers with full CSS3 support.

## 🎯 Key Interactions

1. **Click/Tap a State**: View governor, capital, and legislative info
2. **Keyboard Navigation**: Tab through states, Enter/Space to select
3. **Mobile Gestures**: Smooth touch interactions with visual feedback
4. **State Highlighting**: Selected state shows with white fill

## 📊 State Data

Each state includes:
- Full name
- State capital
- Governor party affiliation
- Legislative composition (Democrat, Republican, or Split)
- Political party color coding (Blue/Red/Gray)

Covering all 50 states plus Washington D.C.

## 🎨 Design Philosophy

The dark-themed political map creates a modern, professional interface with:
- **Dark background** for reduced eye strain
- **Political color coding** (Blue for Democratic, Red for Republican)
- **Clean, minimal design** focusing on the map
- **High contrast** for optimal readability
- **Smooth transitions** for professional user experience

## 🌐 GitHub Pages Deployment

This site is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be reflected live.

### Manual Deployment

1. Go to repository **Settings**
2. Navigate to **Pages** section
3. Select **Source**: Deploy from branch
4. Choose **Branch**: main / root
5. Click **Save**

The site will be available at: `https://anacondy.github.io/3-USA-Glassomorphic-MAP-2025/`

## 👥 Authors

**Puppy Pilot** & **Anacondy**

*"For God and country - Geronimo"* - Mission Accomplished

## 📜 License

This project is licensed under the terms specified in the LICENSE file.

## 🙏 Acknowledgments

Inspired by the precision and determination depicted in Zero Dark Thirty, this project demonstrates attention to detail and commitment to excellence in web development.

## 🐛 Issues & Contributions

Found a bug or want to contribute? Please open an issue or submit a pull request!

---

**⭐ Star this repository if you found it helpful!**

Made with 💙 by Puppy Pilot & Anacondy | 2025