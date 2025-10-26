document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
});






const app = Vue.createApp({
    data() {
        return {
            projects: [],
            isDark: false,
        };
    },
    mounted() {
        console.log("vue marche");

        
        fetch("./projects.json")
            .then(response => response.json())
            .then(data => {
                this.projects = data;
                this.message = "Projets chargés avec succès";
                console.log(this.projects);
            })
            .catch(error => {
                console.error("Erreur de chargement :", error);
                this.message = "Erreur de chargement ";
            });
            /* Fonction pour sortir de la modal */
             window.addEventListener("click", this.handleOutsideClick);
    },
    methods: {
        openModal(id) {
            const modal = document.getElementById(id);
            if (modal) modal.style.display = "block";
        },
        closeModal(id) {
            const modal = document.getElementById(id);
            if (modal) modal.style.display = "none";
        },
        /* méthode pour fermer la modale quand on clique à l’extérieur */
        handleOutsideClick(event) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        },
        /* Fonction pour toggle le dark/light thème */
        toggleTheme() {
            this.isDark =!this.isDark
            document.body.classList.toggle('dark', this.isDark)
        }
    }
});

app.mount('#app');


