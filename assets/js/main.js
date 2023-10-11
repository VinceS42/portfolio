
/************************ BURGER ************************/

function menuMobile() {
    const header = document.querySelector('.header');
    const btn = document.querySelector('.burger');
    const links = document.querySelectorAll('.navbar a');


    btn.addEventListener('click', () => {
        header.classList.toggle('show-nav');
    });
    links.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    });
}


menuMobile();

/************************ PORTFOLIO ************************/


function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card')

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active')
        })
    }

    const showProjects = (elem) => {
        // console.log(elem);
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if (elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }

            // Ne sera pas pris en compte si je selectionne 'Tout les projets'. 
            // Le return arrête la fonction.

            // if (filter !== elem) {
            //     projet.parentNode.classList.add('hide');
            // } else {
            //     projet.parentNode.classList.remove('hide');
            // }

            //  Option ternaire

            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

        });
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            /* On empêche la propagation du lien de */
            event.preventDefault();

            let filter = elem.getAttribute('data-filter');
            // console.log(filter); 

            showProjects(filter);
            resetActiveLinks();
            elem.classList.add('active');

        });
    })
}

tabsFilters();

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');

    const resetModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
    }

    links.forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    })

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            resetModals();
        });
    })

}
showProjectDetails();


/************************ PORTFOLIO ************************/

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');


    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 2s";
    });

    skills.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "all 2s";
    });

    /************************ ECOUTER D'EVENEMENT SECTION ************************/

    let sectionObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        })
    });

    sections.forEach(section => {
        sectionObserver.observe(section)
    });

    /************************ ECOUTER D'EVENEMENT SKILL ************************/


    let skillsObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                // console.log(elem);
                elem.style.width = elem.dataset.width + '%'
            }
        })
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation();


