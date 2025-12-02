const items = document.querySelectorAll(".menu-item");
const submenus = document.querySelectorAll(".submenu");

items.forEach(item => {
    item.addEventListener("click", () => {
        const id = item.dataset.menu;

        // скрыть всё
        submenus.forEach(sm => sm.classList.remove("visible"));

        // показать нужное
        const target = document.getElementById(id);
        if (target) {
            target.classList.add("visible");
        }
    });
});
