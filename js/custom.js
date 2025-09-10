function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}



//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
//  header sticky js end


const text = "Spin Arena";
const element = document.getElementById('typing-text');
let i = 0;
let forward = true;

function type() {
    element.textContent = text.substring(0, i);

    if (forward) i++;
    else i--;

    if (i === text.length) forward = false;
    if (i === 0) forward = true;

    setTimeout(type, 150); // smaller value = faster & smoother
}

type();


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
        // Close others
        faqItems.forEach(i => {
            if(i !== item) {
                i.classList.remove('active');
                i.querySelector('.faq-icon').classList.replace('fa-minus', 'fa-plus');
            }
        });
        // Toggle current
        item.classList.toggle('active');
        if(item.classList.contains('active')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    });
});



 