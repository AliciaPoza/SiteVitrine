//* Code pour header et footer qu'ils soient disponible sur toutes les pages
$(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

//* Code pour le défilement des slides pour le carrousel
document.addEventListener("DOMContentLoaded", function(){
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    function showSlide(index){
        slides[currentSlide].classList.remove('active');
        currentSlide = (index+slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    //* Fonction pour affiche la diapo suivante
    function nextSlide(){
        showSlide(currentSlide+1);
    }

    //* Fonction pour afficher la diapo précédente
    function prevSlide(){
        showSlide(currentSlide-1);
    }

    //* Affichez la première diapo au chargement de la page
    showSlide(currentSlide);

    //* Gestion des événements de clic pour les boutons de navigation
    document.querySelector('.next-button').addEventListener('click',nextSlide);
    document.querySelector('.prev-button').addEventListener('click',prevSlide);
    
    //* Ajouter une minuterie pour faire défiler automatiquement les diapo
    setInterval(nextSlide, 3000);
});

//* Code pour que lorsque l'on clique sur les boutons "précédent" et "suivant" cela change de style
document.addEventListener("DOMContentLoaded", function(){
    let bouton1 = document.getElementById("bouton1");
    let bouton2 = document.getElementById("bouton2");
//* Ajouter un gestionnaire d'évènement aux boutons 1 et 2
    bouton1.addEventListener("click", function(){
        bouton1.classList.toggle("clique");
        bouton2.classList.remove("clique");
    });
    bouton2.addEventListener("click", function (){
        bouton2.classList.toggle("clique");
        bouton1.classList.remove("clique");
    });
});