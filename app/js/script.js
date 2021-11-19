
    const btnHamburger = document.querySelector("#btnHamburger");
    const header = document.querySelector(".header");
    const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener("click", () => {
        console.log("btnHamburger clicked");

        if(header.classList.contains("open")) { //Close Menu
            header.classList.remove("open");
            overlay.classList.remove("fade-in");
            overlay.classList.add("fade-out");
        }
        else { //Open Menu
            header.classList.add("open");
            overlay.classList.remove("fade-out");
            overlay.classList.add("fade-in");
        }
});
