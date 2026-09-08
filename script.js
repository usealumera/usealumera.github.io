document.addEventListener("DOMContentLoaded", () => {


    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    const cards = document.querySelectorAll(".link-card");

    cards.forEach((card) => {

        card.addEventListener("pointerdown", () => {
            card.classList.add("pressed");
        });

        card.addEventListener("pointerup", () => {
            card.classList.remove("pressed");
        });

        card.addEventListener("pointerleave", () => {
            card.classList.remove("pressed");
        });

        card.addEventListener("pointercancel", () => {
            card.classList.remove("pressed");
        });

    });

});