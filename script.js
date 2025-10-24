const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fermer la modale si on clique en dehors du contenu
window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

const app = Vue.createApp({
    data() {
        return {
            
        }
    }
})

app.mount('#app');



