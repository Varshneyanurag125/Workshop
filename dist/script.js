const accordionHeaders = document.querySelectorAll(".accordian-header");
accordionHeaders.forEach((accordionHeader) => {
    accordionHeader.addEventListener("click", (e) => {
        const clickedAccordionBody = e.currentTarget.nextElementSibling;

        // Close all other accordion bodies and remove "active" class from headers
        accordionHeaders.forEach((otherHeader) => {
            if (otherHeader !== e.currentTarget) {
                const otherAccordionBody = otherHeader.nextElementSibling;
                otherAccordionBody.style.maxHeight = "0";
                otherHeader.classList.remove("active");
            }
        });

        // Toggle "active" class and set height for the clicked accordion body
        accordionHeader.classList.toggle("active");
        if (accordionHeader.classList.contains("active")) {
            clickedAccordionBody.style.maxHeight = clickedAccordionBody.scrollHeight + "px";
        } else {
            clickedAccordionBody.style.maxHeight = "0";
        }
    });
});
