const form = document.getElementById("event-form");
const list = document.getElementById("event-list");

let events = JSON.parse(localStorage.getItem("events")) || [];

function renderEvents() {
  list.innerHTML = "";
  events.forEach((ev, index) => {
    const li = document.createElement("li");
    const now = new Date().getTime();
    const distance = new Date(ev.date).getTime() - now;

    if (distance <= 0) {
      li.innerHTML = `<b>${ev.name}</b> - 🎉 Đã đến lúc! 
        <button onclick="removeEvent(${index})">Xóa</button>`;
    } else {
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const m = Math.floor((distance / (1000 * 60)) % 60);
      const s = Math.floor((distance / 1000) % 60);
      li.innerHTML = `<b>${ev.name}</b> - còn ${d}d ${h}h ${m}m ${s}s
        <button onclick="removeEvent(${index})">Xóa</button>`;
    }

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("event-name").value;
  const date = document.getElementById("event-date").value;
  events.push({ name, date });
  localStorage.setItem("events", JSON.stringify(events));
  renderEvents();
  form.reset();
});

function removeEvent(index) {
  events.splice(index, 1);
  localStorage.setItem("events", JSON.stringify(events));
  renderEvents();
}

setInterval(renderEvents, 1000);
renderEvents();

// Đăng ký service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
