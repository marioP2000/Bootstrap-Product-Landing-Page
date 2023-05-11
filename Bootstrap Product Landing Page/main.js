//Open sidebar
const sidebarButton = document.querySelector(".fa-bars");
const sidebarWindow = document.querySelector(".sidebar");

sidebarButton.onclick = () => {
    sidebarWindow.classList.toggle("showSidebar");
}