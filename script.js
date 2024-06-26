const listings = document.querySelector("#listings");
const priceSpan = document.querySelector("#avg-price");

const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];

const names = ["Waldo", "tony", "Hubert"];
const occupations = ["engineer", "lawyer", "electrician"];
const prices = [200, 250, 150];
const limit = 10;

const addFreelancerInterval = setInterval(addFreelancer, 1000);

render();

function render() {
  const listingsMap = freelancers.map((person) => {
    const element = document.createElement("li");
    element.innerText = `Name: ${person.name} 
    Occupation: ${person.occupation}
    Starting Price: ${person.price}`;
    return element;
  });
  listings.replaceChildren(...listingsMap);

  if (freelancers.length >= limit) {
    clearInterval(addFreelancerInterval);
  }
}

function addFreelancer() {
  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: prices[Math.floor(Math.random() * prices.length)],
  };
  freelancers.push(newFreelancer);
  const avgRate =
    freelancers.reduce(
      (total, currentItem) => (total += currentItem.price),
      0
    ) / freelancers.length;

  priceSpan.innerText = avgRate.toFixed(2);
  render();
}
