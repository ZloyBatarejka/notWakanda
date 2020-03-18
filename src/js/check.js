let fake_feed = document.querySelectorAll(".feed__checkbox");
let feed_label = document.querySelectorAll(".feed__fake");
let agree_feed = document.querySelectorAll(".request__checkbox");
let agree_label = document.querySelectorAll(".request__fake");

fake_feed.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      feed_label[index].innerHTML = "&#10003";
    } else {
      feed_label[index].innerHTML = "";
    }
  });
});

agree_feed.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      agree_label[index].innerHTML = "&#10003";
    } else {
      agree_label[index].innerHTML = "";
    }
  });
});
