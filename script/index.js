for (let i=0; i<13; i++) {
  const imgContainer = document.querySelector(".slider-images");
  const img = document.createElement("img");
  img.src =`img/memes/${i}.jpg`
  img.draggable = "false"
  imgContainer.appendChild(img).classList.add('slider-image')
}

const burgerOpen = document.querySelector(".burger-open");
const burgerCls = document.querySelector(".burger-cls");
const header = document.querySelector("header");
const navItems = document.querySelectorAll(".nav-item");

const headerClose = () => {
  header.classList.remove("active");
}

burgerOpen.addEventListener("click", () => {
  header.classList.add("active");
});

burgerCls.addEventListener("click", headerClose)

navItems.forEach((e) => {
  e.addEventListener("click", headerClose)
});

document.addEventListener("click", (e) => {
  e.target !== header && e.target !== burgerOpen ? headerClose() : null
})

const slider = document.querySelector(".slider-images");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
slider.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
slider.addEventListener("touchend", dragStop);