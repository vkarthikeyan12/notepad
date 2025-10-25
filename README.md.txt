# 📝 Full-Page Web Notepad (Chrome Extension)

A simple Chrome extension that transforms **any website into a full-page notepad**.  
Type freely, save your notes automatically or manually, and load them later — all stored locally in your browser.

---

## 🚀 Features

✅ Full-page distraction-free writing space  
✅ Auto-saves your notes every 2 seconds  
✅ Manual **Save** and **Load Saved Notes** buttons  
✅ Works **per website domain** (each site has its own notes)  
✅ Press **ESC** or click ❌ to close  
✅ Clean, minimal UI (top toolbar + editable area)

---

## 🧩 Folder Structure

fullpage-web-notepad/
├── manifest.json
├── background.js
└── content.js


## ⚙️ Installation

1. **Download or clone** this repository:
   ```bash
   git clone https://github.com/yourusername/notepad.git
Open Chrome and go to:


chrome://extensions/
Enable Developer mode (toggle in top right).

Click Load unpacked → select the fullpage-web-notepad folder.

The extension will appear in your Chrome toolbar.

🖱️ Usage
Visit any website.

Click the notepad extension icon 🧠 in your Chrome toolbar.

The page turns into a full-page editable notepad.

Use the toolbar buttons:

💾 Save → manually save your notes.

📂 Load Saved Notes → retrieve previously saved notes.

❌ Close → close the notepad.

Notes are saved automatically every 2 seconds.

Press ESC anytime to quickly close the notepad.


🛠️ Files Overview
```
manifest.json
Defines extension metadata, permissions, and service worker.

background.js
Handles the click event on the extension icon to inject the content script.

content.js
Contains the logic for:

Rendering the full-page editable notepad.

Creating the toolbar (Save, Load, Close).

Handling save/load functionality.

Managing visibility (ESC key).

```

💡 Future Enhancements
🌙 Dark Mode

💾 Export as .txt

🧠 Sync notes across devices

🪶 Markdown support

🧑‍💻 Author
Karthikeyan

🔐 Cybersecurity researcher | 💻 Developer | 🌍 Educator


📜 License
MIT License © 2025 Karthikeyan

---

✅ Just paste this file as `README.md` into your `fullpage-web-notepad` folder — it’s ready for GitHub or any code hosting platform.






