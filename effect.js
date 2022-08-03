const menu = [
  {
    id: 1,
    title: "Panqueques",
    category: "Desalluno",
    price: 15.99,
    img: "./imagen/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 2,
    title: "Hamburguesa Jumbo con papas fritas.",
    category: "Almuerzo",
    price: 13.99,
    img: "./imagen/item-2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 3,
    title: "Milshake Gigante.",
    category: "Batidos",
    price: 6.99,
    img: "./imagen/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 4,
    title: "Desalluno Americano.",
    category: "Desalluno",
    price: 20.99,
    img: "./imagen/item-4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 5,
    title: "Hamburguesa Vegana.",
    category: "Almuerzo",
    price: 22.99,
    img: "./imagen/item-5.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 6,
    title: "Batido de galletas de chocolate.",
    category: "Batidos",
    price: 18.99,
    img: "./imagen/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 7,
    title: "Sandwish de Tosino.",
    category: "Desalluno",
    price: 8.99,
    img: "./imagen/item-7.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 8,
    title: "Hamburguesa con papas fritas.",
    category: "Almuerzo",
    price: 12.99,
    img: "./imagen/item-8.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 9,
    title: "Batido en pareja.",
    category: "Batidos",
    price: 16.99,
    img: "./imagen/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
  {
    id: 10,
    title: "Filete.",
    category: "Cenas",
    price: 22.99,
    img: "./imagen/item-10.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod eos assumenda libero!.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["todo"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "todo") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}