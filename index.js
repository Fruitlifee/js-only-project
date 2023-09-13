// Create a navbar element
const navbar = document.createElement('nav');
navbar.style.display = 'flex';
navbar.style.justifyContent = 'space-between';
navbar.style.alignItems = 'center';
navbar.style.backgroundColor = 'black';
navbar.style.color = 'white';
navbar.style.padding = '16px';

// Create the "COFFEE" text on the left side of the navbar
const coffeeText = document.createElement('div');
coffeeText.textContent = 'COFFEE';
coffeeText.style.fontWeight = 'bold';
navbar.appendChild(coffeeText);

// Create the buttons on the right side of the navbar
const homeButton = document.createElement('button');
homeButton.textContent = 'HOME';
homeButton.style.backgroundColor = 'transparent';
homeButton.style.border = 'none';
homeButton.style.color = 'white';
homeButton.style.fontWeight = 'bold';
navbar.appendChild(homeButton);

const itemsButton = document.createElement('button');
itemsButton.textContent = 'TEA';
itemsButton.style.backgroundColor = 'transparent';
itemsButton.style.border = 'none';
itemsButton.style.color = 'white';
itemsButton.style.fontWeight = 'bold';
navbar.appendChild(itemsButton);

// Add the navbar to the page
document.body.prepend(navbar);






const backgroundImage = new Image();
backgroundImage.src = 'https://img.freepik.com/free-photo/coffee-beans-top-view-white-background-space-text_176474-5028.jpg?w=2000';
backgroundImage.onload = function() {
    // Set the background image of the entire page
    document.body.style.backgroundImage = `url('${backgroundImage.src}')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.padding = '150px';
  };
  



// Create the header section
const header = document.createElement('header');
header.style.textAlign = 'center';
header.style.padding = '1em';
header.style.backgroundColor = '#fcfaf7';
header.innerHTML = '<h1>Welcome to Coffee&Tea Cafe</h1><p>Enjoy our delicious drinks</p>';
document.body.appendChild(header);

// Create the main section
const main = document.createElement('main');
main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.justifyContent = 'center';
document.body.appendChild(main);
main.style.backgroundColor = '#fcfaf7';

// Create the first product card
const product1 = document.createElement('div');
product1.style.width = '300px';
product1.style.height = '500px';
product1.style.margin = '1em';
product1.style.border = '1px solid #ddd';
product1.style.borderRadius = '5px';
product1.style.overflow = 'hidden';

const product1Img = document.createElement('img');
product1Img.style.width = '100%';
product1Img.style.height = '300px';
product1Img.style.objectFit = 'cover';
product1Img.src = 'Screenshot_2.jpg';
product1.appendChild(product1Img);

const product1Name = document.createElement('h2');
product1Name.style.margin = '0.5em';
product1Name.style.fontSize = '1.2em';
product1Name.textContent = 'Bonsai';
product1.appendChild(product1Name);

const product1Desc = document.createElement('p');
product1Desc.style.margin = '0.5em';
product1Desc.style.fontSize = '1em';
product1Desc.textContent = 'lemon and ginger meet fresh cucumber, mint and matcha in this refreshing, crisp, flavorful, cool and warming mocktail. definitely had to bring this favorite back for you!';
product1.appendChild(product1Desc);

const product1Price = document.createElement('p');
product1Price.style.margin = '0.5em';
product1Price.style.fontSize = '1em';
product1Price.style.fontWeight = 'bold';
product1Price.textContent = '$3.99';
product1.appendChild(product1Price);

main.appendChild(product1);

// Create the second product card
const product2 = document.createElement('div');
product2.style.width = '300px';
product2.style.height = '500px';
product2.style.margin = '1em';
product2.style.border = '1px solid #ddd';
product2.style.borderRadius = '5px';
product2.style.overflow = 'hidden';

const product2Img = document.createElement('img');
product2Img.style.width = '100%';
product2Img.style.height = '300px';
product2Img.style.objectFit = 'cover';
product2Img.src = 'Screenshot_4.jpg';
product2.appendChild(product2Img);

const product2Name = document.createElement('h2');
product2Name.style.margin = '0.5em';
product2Name.style.fontSize = '1.2em';
product2Name.textContent = 'Honey Pistachio ';
product2.appendChild(product2Name);

const product2Desc = document.createElement('p');
product2Desc.style.margin = '0.5em';
product2Desc.style.fontSize = '1em';
product2Desc.textContent = 'this shaken creamy cold brew is sweet, fragrant, foamy, with those nutty earthy flavors we can’t get enough of.that is refreshing, crisp, fragrant, delicate, subtle, bright and simply spotlights';
product2.appendChild(product2Desc);

const product2Price = document.createElement('p');
product2Price.style.margin = '0.5em';
product2Price.style.fontSize = '1em';
product2Price.style.fontWeight= 'bold';
product2Price.textContent = '$4.49';
product2.appendChild(product2Price);

main.appendChild(product2);

// Create the third product card
const product3 = document.createElement('div');
product3.style.width = '300px';
product3.style.height = '500px';
product3.style.margin = '1em';
product3.style.border = '1px solid #ddd';
product3.style.borderRadius = '5px';
product3.style.overflow = 'hidden';

const product3Img = document.createElement('img');
product3Img.style.width = '100%';
product3Img.style.height = '300px';
product3Img.style.objectFit = 'cover';
product3Img.src = 'Screenshot_3.jpg';
product3.appendChild(product3Img);

const product3Name = document.createElement('h2');
product3Name.style.margin = '0.5em';
product3Name.style.fontSize = '1.2em';
product3Name.textContent = 'Lemon Poppyseed ';
product3.appendChild(product3Name);

const product3Desc = document.createElement('p');
product3Desc.style.margin = '0.5em';
product3Desc.style.fontSize = '1em';
product3Desc.textContent = 'this sweet lemon citrus and poppyseed combo pairs lovely with earthy green tea for a fun, creamy, balanced, spring drink hot or iced! add oat milk for even more l.p. muffin vibes';
product3.appendChild(product3Desc);

const product3Price = document.createElement('p');
product3Price.style.margin = '0.5em';
product3Price.style.fontSize = '1em';
product3Price.style.fontWeight = 'bold';
product3Price.textContent = '$4.99';
product3.appendChild(product3Price);

main.appendChild(product3);




// carousel
const carouselContainer = document.createElement("div");
carouselContainer.style.width = "1205px";
carouselContainer.style.height = "500px";
carouselContainer.style.overflow = "hidden";
carouselContainer.style.position = "relative";
document.body.appendChild(carouselContainer);

const images = [
  "https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-1307698.jpg&fm=jpg",
  "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

let currentImage = 0;

function showImage() {
  const image = document.createElement("img");
  image.src = images[currentImage];
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.position = "absolute";
  carouselContainer.appendChild(image);

  setTimeout(() => {
    image.remove();
    currentImage++;
    if (currentImage >= images.length) {
      currentImage = 0;
    }
    showImage();
  }, 3000);
}

showImage();

// meat team

const teamMembers = [
  { name: "MonteCarpel", title: "CEO", image: "man.jpg" },
  { name: "Jane Smith", title: "Barista", image: "Screenshot_1.jpg" },
  { name: "Bob Johnson", title: "Tattoo man", image: "barista.jpg" },
  { name: "Mary Williams", title: "Someone", image: "miss1.jpg" }
];


const teamName = document.createElement("div");
teamName.innerHTML = '<h1> Meet the team </h1>';
teamName.style.justifyContent = 'center';
teamName.style.display = 'flex';
document.body.appendChild(teamName);
teamName.style.backgroundColor = '#fcfaf7';
 
const teamContainer = document.createElement("div");
teamContainer.style.display = "flex";
teamContainer.style.flexWrap = "wrap";
teamContainer.style.justifyContent = "space-between";
document.body.appendChild(teamContainer);
teamContainer.style.backgroundColor = '#fcfaf7';



teamMembers.forEach((member, index) => {
  const memberContainer = document.createElement("div");
  memberContainer.style.width = "45%";
  memberContainer.style.marginBottom = "20px";
  memberContainer.style.textAlign = index % 2 === 0 ? "right" : "left";
  teamContainer.appendChild(memberContainer);

  const image = document.createElement("img");
  image.src = member.image;
  image.style.width = "150px";
  image.style.height = "auto";
  image.style.display = "inline-block";
  memberContainer.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = member.name;
  name.style.marginTop = "10px";
  name.style.marginBottom = "5px";
  memberContainer.appendChild(name);

  const title = document.createElement("h3");
  title.textContent = member.title;
  title.style.margin = "0";
  memberContainer.appendChild(title);
});









// Create the footer section
const footer = document.createElement('footer');
footer.style.textAlign = 'center';
footer.style.padding = '1em';
footer.innerHTML = '<p>&copy; 2023 Ive been everywhere man looking for someone </p>';
document.body.appendChild(footer);
footer.style.backgroundColor = '#fcfaf7';

