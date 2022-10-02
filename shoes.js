const Tab = document.querySelector(".tab");
const Rod = document.querySelector(".title-rod");
const baseX = 42;
const baseY = 0;
const titlesArr = [...document.querySelectorAll(".titleList")];
const imgArr = [...document.querySelectorAll(".img-box")];
const colorArr = [...document.querySelectorAll(".colorList")];

Tab.addEventListener("click", (e) => {
  if (e.target.classList.contains("titleList")) {
    Rod.style.transform = `translate(${
      e.target.offsetLeft + baseX
    }px,${baseY}px)`;

    // console.log(e.target.offsetLeft);

    titlesArr.forEach((item) => {
      item.classList.remove("title-active");
    });
    e.target.classList.add("title-active");

    const shoeName = e.target.className.split(" ")[1].split("-")[0];
    console.log(shoeName);
    imgArr.forEach((item) => {
      if (item.className.includes(shoeName)) {
        item.classList.add("img-selected");
      } else {
        item.classList.remove("img-selected");
      }
    });

    colorArr.forEach((item) => {
      if (item.className.includes(shoeName)) {
        item.classList.add("color-selected");
      } else {
        item.classList.remove("color-selected");
      }
    });
  }
});
