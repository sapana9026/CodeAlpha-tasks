const images=document.querySelectorAll(".image-box img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const closeBtn=document.querySelector(".close");
const nextBtn=document.querySelector(".next");
const prevBtn=document.querySelector(".prev");
const filterButtons=document.querySelectorAll(".filter-buttons button");
const imageBoxes=document.querySelectorAll(".image-box");

let currentIndex=0;
//Open Lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display="flex";
        lightboxImg.src=img.src;
        currentIndex=index;
    });
});

//Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display="none";
});

//Next Image
nextBtn.addEventListener("click", () => {
    currentIndex=(currentIndex + 1) % images.length;
    lightboxImg.src=images[currentIndex].src;
});

//Previous Image
prevBtn.addEventListener("click", () => {
    currentIndex=(currentIndex -1 + images.length) % images.length;
    lightboxImg.src=images[currentIndex].src;
});

//Filter Function
filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        //Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter=button.getAttribute("data-filter");

        imageBoxes.forEach(box => {
            if (filter==="all" || box.classList.contains(filter)) {
                box.style.display="block";
            } else {
                box.style.display="none";
            }
        });
    });
});
