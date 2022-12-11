// We use box as the HTML element to be checked if it is in the viewport
const box = document.querySelector(".box");
const message = document.querySelector("#message");

// Function to determine if the HTML element is in the viewport
const isInViewport = (element) => {
  const bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to change the message based on the viewport

// Here you can use any function to be triggered when the user scrolls
const changeMessage = () => {
  const messageText = isInViewport(box);
  if (isInViewport(box)) {
    message.textContent = "The box is visible in the viewport";
  } else {
    message.textContent = "The box is not visible in the viewport";
  }
};

// // Event listener to change the message when the user scrolls
document.addEventListener("scroll", changeMessage, {
  passive: true,
});
