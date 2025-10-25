if (!document.getElementById("fullpage-notepad")) {
  const pageKey = `notepad-${window.location.hostname}`;

  // Create main notepad
  const notepad = document.createElement("div");
  notepad.id = "fullpage-notepad";
  notepad.contentEditable = "true";
  notepad.style.position = "fixed";
  notepad.style.top = "50px";
  notepad.style.left = "0";
  notepad.style.width = "100vw";
  notepad.style.height = "calc(100vh - 50px)";
  notepad.style.background = "white";
  notepad.style.color = "black";
  notepad.style.fontFamily = "monospace";
  notepad.style.fontSize = "16px";
  notepad.style.padding = "20px";
  notepad.style.boxSizing = "border-box";
  notepad.style.zIndex = "999998";
  notepad.style.overflowY = "auto";
  notepad.innerHTML = "Start typing...";

  // Create top toolbar
  const toolbar = document.createElement("div");
  toolbar.style.position = "fixed";
  toolbar.style.top = "0";
  toolbar.style.left = "0";
  toolbar.style.width = "100vw";
  toolbar.style.height = "50px";
  toolbar.style.background = "#333";
  toolbar.style.color = "#fff";
  toolbar.style.display = "flex";
  toolbar.style.alignItems = "center";
  toolbar.style.justifyContent = "center";
  toolbar.style.gap = "20px";
  toolbar.style.zIndex = "999999";
  toolbar.style.fontFamily = "sans-serif";

  // Buttons
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 Save";
  const loadBtn = document.createElement("button");
  loadBtn.textContent = "📂 Load Saved Notes";
  const hideBtn = document.createElement("button");
  hideBtn.textContent = "❌ Close";

  [saveBtn, loadBtn, hideBtn].forEach((btn) => {
    btn.style.background = "#555";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.padding = "8px 16px";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "6px";
    btn.style.fontSize = "14px";
    btn.addEventListener("mouseenter", () => (btn.style.background = "#777"));
    btn.addEventListener("mouseleave", () => (btn.style.background = "#555"));
  });

  toolbar.append(saveBtn, loadBtn, hideBtn);
  document.body.append(toolbar, notepad);

  // Load previous notes automatically
  chrome.storage.local.get([pageKey], (result) => {
    if (result[pageKey]) notepad.innerHTML = result[pageKey];
  });

  // Auto-save every 2 seconds
  setInterval(() => {
    const content = notepad.innerHTML;
    const obj = {};
    obj[pageKey] = content;
    chrome.storage.local.set(obj);
  }, 2000);

  // Manual Save
  saveBtn.addEventListener("click", () => {
    const obj = {};
    obj[pageKey] = notepad.innerHTML;
    chrome.storage.local.set(obj, () => {
      saveBtn.textContent = "✅ Saved!";
      setTimeout(() => (saveBtn.textContent = "💾 Save"), 1500);
    });
  });

  // Load Saved Notes
  loadBtn.addEventListener("click", () => {
    chrome.storage.local.get([pageKey], (result) => {
      if (result[pageKey]) {
        notepad.innerHTML = result[pageKey];
        loadBtn.textContent = "✅ Loaded!";
      } else {
        notepad.innerHTML = "No saved notes yet...";
      }
      setTimeout(() => (loadBtn.textContent = "📂 Load Saved Notes"), 1500);
    });
  });

  // Hide notepad
  hideBtn.addEventListener("click", () => {
    toolbar.remove();
    notepad.remove();
  });

  // ESC key also hides
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toolbar.remove();
      notepad.remove();
    }
  });
} else {
  const existing = document.getElementById("fullpage-notepad");
  existing.style.display =
    existing.style.display === "none" ? "block" : "none";
}
