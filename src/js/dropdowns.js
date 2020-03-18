import Litepicker from "litepicker";
const country = document.querySelector(".dropdowns__country");
const date = document.querySelector(".dropdowns__date");
const type = document.querySelector(".dropdowns__type");
const dropdown = document.querySelectorAll(".dropdown");
let opened = false;
const content = {
  country: [
    {
      text: "Южная Америка",
      drops: ["Аргентина", "Перу", "Бразилия", "Чили", "Уругвай"]
    },
    { text: "Северная Америка", drops: ["Канада", "США", "Мексика"] },
    { text: "Арктика и Антарктика", drops: ["Станция Мир", "Станция Юнайт"] },
    { text: "Австрия", drops: ["Сидней", "Базилик"] },
    {
      text: "Восточная Европа",
      drops: ["Словения", "Греция", "Литва", "Молдова"]
    },
    { text: "Азия", drops: ["Китай", "Япония", "Турция"] },
    { text: "Океания", drops: ["Мальта", "Ибица", "Атлантида"] },
    {
      text: "Северная Европа",
      drops: ["Англия", "Пруссия", "Священная Римская Империя", "Галлия"]
    },
    {
      text: "Тамриэль",
      drops: ["Скайрим", "Хамерфелл", "Морровинд", "Эльсвейр", "Кватч"]
    }
  ],
  type: [
    "Активный",
    "Майские",
    "На авто",
    "На корабле",
    "Новый год",
    "Поход",
    "Эксклюзив",
    "Экскурсия",
    "Экспедиция"
  ]
};
const toggle = {
  country: toggleCountry,
  date: function() {
    console.log("date");
  },
  type: toggleType
};
dropdown.forEach((item, index) => {
  item.addEventListener("click", toggle[`${item.dataset.drop}`]);
  item.addEventListener("click", () => {
    const arrow = item.querySelector(".dropdowns__arrow");
    if (opened) {
      arrow.innerHTML = "&or;";
      opened = false;
    } else {
      arrow.innerHTML = "&and;";
      opened = true;
    }
    item.classList.toggle("active");
  });
});
function toggleCountry() {
  const $drop = this.querySelector(".dropdowns__drops");
  if (this.opened) {
    $drop.innerHTML = "";
    this.opened = false;
  } else {
    content[this.dataset.drop].forEach(item => {
      let dropOne = document.createElement("div");
      dropOne.opened = false;
      dropOne.classList.add("drop-one");
      dropOne.textContent = item.text;
      dropOne.addEventListener("click", function() {
        let dropTwo = document.createElement("div");
        if (this.opened) {
          this.innerHTML = "";
          this.textContent = item.text;
          this.opened = false;
          return;
        }
        item.drops.forEach(seconditem => {
          let dropTwo = document.createElement("div");
          dropTwo.classList.add("drop-two");
          dropTwo.textContent = seconditem;
          dropTwo.addEventListener("click", event => {
            event.stopPropagation();
            country.querySelector(".dropdowns__name").textContent = seconditem;
          });
          dropOne.append(dropTwo);
        });
        this.opened = true;
      });
      dropOne.addEventListener("click", event => {
        event.stopPropagation();
      });
      $drop.append(dropOne);
    });
    this.opened = true;
  }
}
function toggleType() {
  const $drop = this.querySelector(".dropdowns__drops");
  if (this.opened) {
    $drop.innerHTML = "";
    this.opened = false;
  } else {
    content[this.dataset.drop].forEach(item => {
      let dropType = document.createElement("div");
      dropType.classList.add("drop-one");
      dropType.textContent = item;
      dropType.addEventListener("click", event => {
        type.querySelector(".dropdowns__name").textContent = item;
        event.stopPropagation();
      });
      $drop.append(dropType);
    });
    this.opened = true;
  }
}

var picker = new Litepicker({
  element: document.querySelector("#litepicker"),
  singleMode: false,
  format: "DD-MM-YY",
  lang: "ru"
});
