const content = document.getElementById("mainContent");

const pages = {
  pomodore: "pages/pomodore.html",
  start: "pages/start.html",
  todo: "pages/todo.html", 
}

async function loadPage(pageName) {
  const pagePath = pages[pageName];

  if (!pagePath) {
    content.innerHTML = "<p>Seite nicht gefunden.</p>"
    return;
  }

  try {
    const response = await fetch(pagePath);

    if (!response.ok) {
      throw new Error("Seite konnte nicht geladen werden");
    }

    content.innerHTML = await response.text();
  } catch (error) {
    content.innerHTML = "<p>Der Inhalt konte nicht geladen werden.</p>";
    console.error(error);
  }
}

document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      loadPage(button.dataset.page);
  });
)}:


loadPage("start");
