document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

// setInterval method allwos you to run ficntion again and again using function.
setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");
  // to remove class change.
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    // display and hide icon use nextElementSibling.
    icon.nextElementSibling.classList.add("change");
  }
}, 3000);
