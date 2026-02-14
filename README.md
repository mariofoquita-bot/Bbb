# Meta Quest 3 Soundboard

A fully-featured soundboard application designed specifically for Meta Quest 3 VR headsets. Play music, trigger sound effects, and customize your audio experience in virtual reality.

## 🎵 Features

- **Music Playback** - Upload and play MP3, WAV, OGG, and other audio formats
- **Soundboard Buttons** - 12 customizable sound effect buttons
- **Volume Control** - Master volume slider for precise audio adjustment
- **Recording** - Record custom sounds directly from your microphone
- **VR Optimized** - Large buttons and responsive UI designed for Meta Quest 3
- **Progress Tracking** - Visual progress bar and time display
- **Dark Mode** - Eye-friendly interface for VR environments

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/mariofoquita-bot/Bbb.git
cd Bbb
npm install
npm start
```

The application will be available at `http://localhost:8080`

### For Meta Quest 3

1. Open your Quest 3's web browser
2. Navigate to your local IP address: `http://YOUR_IP:8080`
3. Or use the deployed version below

## 🔗 Links

- **Repository**: [https://github.com/mariofoquita-bot/Bbb](https://github.com/mariofoquita-bot/Bbb)
- **Live Demo**: Available when deployed
- **Issue Tracker**: [https://github.com/mariofoquita-bot/Bbb/issues](https://github.com/mariofoquita-bot/Bbb/issues)
- **Pull Requests**: [https://github.com/mariofoquita-bot/Bbb/pulls](https://github.com/mariofoquita-bot/Bbb/pulls)

## 📁 Project Structure

```
Bbb/
├── index.html          # Main soundboard interface
├── styles.css          # VR-optimized styling
├── main.js             # Core soundboard functionality
├── package.json        # Project dependencies
└── README.md           # This file
```

## 🎮 Usage

### Playing Music
1. Click **Choose File** in the Music Player section
2. Select your audio file (MP3, WAV, OGG, etc.)
3. Use the **Play**, **Pause**, and **Stop** buttons to control playback
4. Adjust volume with the Master Volume slider

### Using Sound Effects
1. Click any of the 12 soundboard buttons
2. Customize button names and sounds in settings
3. Record custom sounds using the **Record Sound** button

### Recording
1. Click **🎤 Record Sound**
2. Allow microphone access
3. Speak or play audio
4. Click **⏹️ Stop Recording** to save

## 🛠️ Dependencies

- **howler.js** - Audio playback library
- **express** - Web server (for deployment)
- **socket.io** - Real-time communication

## 🔧 Configuration

To customize soundboard buttons, edit `main.js`:

```javascript
const defaultSounds = {
    '1': { name: 'Chime', freq: 440 },
    '2': { name: 'Beep', freq: 880 },
    // Add more sounds here
};
```

## 📱 Device Compatibility

- **Meta Quest 3** ✅
- **Meta Quest Pro** ✅
- **Meta Quest 2** ✅
- **Desktop Browsers** ✅
- **Mobile Browsers** ✅

## 🎨 Customization

### Change Button Names
Edit the HTML buttons in `index.html`:
```html
<button class="sound-btn" data-sound="1">Your Custom Name</button>
```

### Adjust Theme Colors
Modify the gradient colors in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For issues and questions:
- Open an issue: [GitHub Issues](https://github.com/mariofoquita-bot/Bbb/issues)
- Check existing discussions: [GitHub Discussions](https://github.com/mariofoquita-bot/Bbb/discussions)

## 🎯 Roadmap

- [ ] Cloud storage for sound files
- [ ] Preset soundboards
- [ ] Multiplayer sync
- [ ] Custom waveform visualizer
- [ ] Keyboard shortcuts
- [ ] Export/Import soundboards

---

**Made with ❤️ for VR enthusiasts**