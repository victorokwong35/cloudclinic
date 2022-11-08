let hospitals = {
    data: [
      {
        hospitalName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "/assets/images/pharmacies-labs/photo-1603555501671-8f96b3fce8b5.avif",
      },
      {
        hospitalName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "/assets/images/pharmacies-labs/photo-1607979036079-af88d8d6159e.avif",
      },
      {
        hospitalName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "/assets/images/pharmacies-labs/photo-1611072965169-e1534f6f300c.avif",
      },
      {
        hospitalName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "/assets/images/pharmacies-labs/premium_photo-1661767397342-5693494e0ffe.avif",
      },
      {
        hospitalName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "/assets/images/pharmacies-labs/piron-guillaume-y5hQCIn1c6o-unsplash.jpg",
      },
      {
        hospitalName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "/assets/images/pharmacies-labs/graham-ruttan-b3LF7JHQmms-unsplash.jpg",
      },
      {
        hospitalName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "/assets/images/pharmacies-labs/hush-naidoo-jade-photography-ZCO_5Y29s8k-unsplash.jpg",
      },
      {
        hospitalName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "/assets/images/pharmacies-labs/piron-guillaume-y5hQCIn1c6o-unsplash.jpg",
      },
    ],
  };
  for (let i of hospitals.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //hospital name
    let name = document.createElement("h5");
    name.classList.add("hospital-name");
    name.innerText = i.hospitalName.toUpperCase();
    container.appendChild(name);
    //price
    // let price = document.createElement("h6");
    // price.innerText = "$" + i.price;
    // container.appendChild(price);
    card.appendChild(container);
    document.getElementById("hospitals").appendChild(card);
  }

  //parameter passed from button (Parameter same as category)
function filterhospital(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".hospital-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all hospitals
  window.onload = () => {
    filterhospital("all");
  };