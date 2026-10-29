// Global subjects data repository (Files se data bind hoga)
window.subjectsData = window.subjectsData || {};

// DOM Elements
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const themeToggle = document.getElementById("themeToggle");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const scrollBottomBtn = document.getElementById("scrollBottomBtn");
const questionsContainer = document.getElementById("questionsContainer");
const currentSubjectTitle = document.getElementById("currentSubjectTitle");
const jumpInput = document.getElementById("jumpInput");
const jumpBtn = document.getElementById("jumpBtn");
const navItems = document.querySelectorAll(".nav-item");

let currentSubjectKey = "cdp";

// Display Title Map
const subjectNames = {
  cdp: "बाल विकास एवं शिक्षाशास्त्र (CDP)",
  hindi: "सामान्य हिन्दी",
  english: "General English",
  evs: "पर्यावरण अध्ययन (EVS)",
  gk: "सामान्य ज्ञान (GK)"
};

// Subject Render Function
function renderQuestions(subjectKey) {
  currentSubjectKey = subjectKey;
  currentSubjectTitle.textContent = subjectNames[subjectKey] || "Questions";
  questionsContainer.innerHTML = "";
  
  const list = window.subjectsData[subjectKey] || [];
  
  if (list.length === 0) {
    questionsContainer.innerHTML = "<p style='text-align:center; padding:2rem; color:var(--text-secondary);'>Is subject ke questions jald hi update kiye jayenge.</p>";
    return;
  }

  list.forEach(q => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.id = `q-${q.id}`;

    let tableHTML = "";
    if (q.table) {
      let rowsHTML = q.table.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("");
      tableHTML = `
        <table class="matching-table">
          <thead>
            <tr><th>${q.table.h1}</th><th>${q.table.h2}</th></tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      `;
    }

    let optionsHTML = q.options.map(opt => `<div class="option-item">${opt}</div>`).join("");

    card.innerHTML = `
      <div class="q-header">${q.title}</div>
      <div class="q-text">${q.text}</div>
      ${tableHTML}
      <div class="q-options">
        ${optionsHTML}
      </div>
      <button class="ans-toggle-btn" onclick="toggleAnswer(${q.id})">उत्तर देखें / छुपाएं</button>
      <div class="ans-box" id="ans-${q.id}">
        <strong>उत्तर:</strong> ${q.answer}
        ${q.explanation ? `<br><strong>स्पष्टीकरण:</strong> ${q.explanation}` : ""}
      </div>
    `;

    questionsContainer.appendChild(card);
  });
}

// Toggle Answer Box
window.toggleAnswer = function(id) {
  const ansBox = document.getElementById(`ans-${id}`);
  if (ansBox) {
    ansBox.classList.toggle("show");
  }
};

// Sidebar Handlers
function openMenu() {
  sidebar.classList.add("open");
  overlay.classList.add("open");
}

function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
}

menuToggle.addEventListener("click", openMenu);
closeSidebar.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Theme Toggle
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  }
});

// Navigation Handling
navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(btn => btn.classList.remove("active"));
    item.classList.add("active");
    renderQuestions(item.dataset.subject);
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Scroll Controls
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeMenu();
});

scrollBottomBtn.addEventListener("click", () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  closeMenu();
});

// Jump Box Logic
jumpBtn.addEventListener("click", () => {
  const qNum = parseInt(jumpInput.value);
  if (!qNum) return;

  const targetCard = document.getElementById(`q-${qNum}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    alert("Question " + qNum + " is section me maujood nahi hai.");
  }
});

jumpInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    jumpBtn.click();
  }
});

// Initial View Load
renderQuestions("cdp");
