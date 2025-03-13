// Authr:
const topMenu = document.getElementById('nk-top-menu');
const toggleTopMenuIcon = document.getElementById('nk-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to Toggle top menu icon
        topMenu.classList.toggle('nk-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        // Click outside from Toggle top menu icon
        if (topMenu.classList.contains('nk-top-menu-expanded')) {
            topMenu.classList.remove('nk-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})