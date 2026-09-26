// ---------- Project data ----------
// Edit this array to add/remove/update your projects
const projects = [
  {
    title: "Travel Website",
    desc: "A responsive travel website with modern UI and smooth user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #1a2b4c, #d98c3f)",
    label: "Explore The World",
    link: "#"
  },
  {
    title: "Todo App",
    desc: "A simple and productive todo application with local storage.",
    tags: ["React", "JavaScript", "LocalStorage"],
    gradient: "linear-gradient(135deg, #f6f8fd, #e6e9f2)",
    label: "My Todo List",
    dark: false,
    link: "#"
  },
  {
    title: "Admin Dashboard",
    desc: "An admin dashboard with user management, charts and analytics.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "linear-gradient(135deg, #16213e, #0f3460)",
    label: "Dashboard",
    link: "#"
  },
  {
    title: "Landing Page",
    desc: "A modern landing page with clean design and smooth animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #2c1b4d, #6a3fa0)",
    label: "Build Your Dream Career",
    link: "#"
  }
];

const tagClass = {
  HTML: "tag-blue", CSS: "tag-blue", JavaScript: "tag-blue", React: "tag-blue",
  "Node.js": "tag-green", "Express.js": "tag-green", MongoDB: "tag-green",
  LocalStorage: "tag-purple"
};

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects.map(p => `
    <a class="project-card" href="${p.link}">
      <div class="project-thumb" style="background:${p.gradient}">
        ${p.label}
      </div>
      <div class="project-body">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag ${tagClass[t] || 'tag-blue'}">${t}</span>`).join("")}
        </div>
      </div>
    </a>
  `).join("");
}
renderProjects();

// ---------- Icons ----------
if (window.lucide) lucide.createIcons();

// ---------- Mobile nav toggle ----------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navLinks.style.display = navLinks.classList.contains("open") ? "flex" : "";
});

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 90;
    if (window.scrollY >= top) current = sec.id;
  });
  navItems.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

// ---------- Contact form (front-end only demo) ----------
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Hook this up to Formspree, EmailJS, or your own backend to actually send mail.
  status.textContent = "Thanks! Your message has been noted (connect a backend to send it for real).";
  form.reset();
});

// ---------- Download resume placeholder ----------
document.getElementById("downloadResume").addEventListener("click", (e) => {
  e.preventDefault();
  alert("href=\"resume.pdf\" download.");
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
