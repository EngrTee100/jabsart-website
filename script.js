const artworks = [
  {
    id: 1,
    title: "Feel the Rhythm, Feel the Heart",
    medium: "oil on canvas",
    size: "18 x 36 inches",
    price: 40000,
    image:
      "images/Feel the Rhythm, Feel the Heart.jpeg",
    story: "The music pours out of him, like he's bleeding emotions. Every note is real, straight from the heart. People stop and listen, and you can see the feelings hitting them, resonating deep. One woman's eyes well up with tears. The music's taken her back to a moment she thought was long gone. For a second, she and the saxophonist lock eyes, and it's like the music's connected them on a deeper level. The music fades, but the moment lingers. The feeling stays with you, a reminder that art can touch us in ways that words can't. Sometimes a melody just speaks to your soul, and that's what this is.",
  },
  {
    id: 2,
    title: "She Became the Path",
    medium: "Oil on canvas",
    size: "24 x 33 inches",
    price: 80000,
    image:
      "images/She Became the Path.jpeg",
    story: "She walked with night as her witness, Darkness did not hide her,it revealed her.                                                          Across her eyes lived the weight of many lives,souls she carried forward when fear tried to pull them back.  The stars bent into maps, and freedom whispered only to those who dared to listen.                           Behind her, chains learned the meaning of dust. Ahead, hope learned how to breathe.                                                                  She did not turn around. She did not ask permission.                      The World remembers her as history, but the night remembers her as a path to freedom.",
  },
  {
    id: 3,
    title: "Inside & outside",
    medium: "Acrylic on canvas",
    size: "24 x 24 inches",
    price: 95000,
    image:
      "images/Inside & outside.jpeg",
    story: "don't think I am like other people. I mean on some deep fundamental level. It's not just being half a twin and reading a lot and seeing fairies. It's not just being outside when they're all inside. I used to be inside. I think there's a way I stand aside and look backwards at things when they're happening which isn't normal...",
  },
  {
    id: 4,
    title: "Osun River Light",
    medium: "Mixed media on canvas",
    size: "30 x 40 inches",
    price: 175000,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    story: "Celebrates the sacred Osun River with layered textures and shimmering light.",
  },
  {
    id: 5,
    title: "Savanna Reverie",
    medium: "Oil on canvas",
    size: "24 x 30 inches",
    price: 140000,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80",
    story: "A memory of long drives through the savanna during harmattan season.",
  },
  {
    id: 6,
    title: "Eko Skyline Studies",
    medium: "Acrylic on canvas",
    size: "20 x 28 inches",
    price: 115000,
    image:
      "https://images.unsplash.com/photo-1459908676235-d5f02e47d7f4?auto=format&fit=crop&w=900&q=80",
    story: "Built from rooftop sketches of Lagos at dusk, when the city starts to glow.",
  },
  {
    id: 7,
    title: "Palm Grove Dusk",
    medium: "Mixed media on canvas",
    size: "32 x 40 inches",
    price: 195000,
    image:
      "https://images.unsplash.com/photo-1452800185063-6db5e12b8f49?auto=format&fit=crop&w=900&q=80",
    story: "A tribute to evening walks through palm groves in Badagry.",
  },
  {
    id: 8,
    title: "Festival Masks",
    medium: "Acrylic on canvas",
    size: "18 x 24 inches",
    price: 90000,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    story: "Inspired by masquerade festivals where dance, costume, and spirit unite.",
  },
  {
    id: 9,
    title: "Indigo Market",
    medium: "Oil on canvas",
    size: "22 x 30 inches",
    price: 130000,
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
    story: "Captures the dye pits and textile stalls that fill the air with color.",
  },
];
const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const whatsappCheckout = document.getElementById("whatsapp-checkout");

const whatsappNumber = "+2347037308561";

let cart = [];

function formatPrice(value) {
  return `NGN ${value.toLocaleString("en-NG")}`;
}

function renderProducts() {
  productList.innerHTML = "";
  artworks.forEach((artwork, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.transitionDelay = `${index * 0.08}s`;
    card.innerHTML = `
      <div class="product-media">
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3 class="product-title">${artwork.title}</h3>
        <p class="product-meta">${artwork.medium} • ${artwork.size}</p>
        <p class="product-story">Story: ${artwork.story}</p>
      </div>
      <div class="price-row">
        <span>${formatPrice(artwork.price)}</span>
        <button type="button">Add to cart</button>
      </div>
    `;
    card.querySelector("button").addEventListener("click", () => addToCart(artwork));
    productList.appendChild(card);
  });
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartCount.textContent = `${cart.length} items`;
  cartTotal.textContent = formatPrice(total);
}

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function getBuyerInfo() {
  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const parts = [];
  if (name) parts.push(`Name: ${name}`);
  if (email) parts.push(`Email: ${email}`);
  return parts.length ? `\n${parts.join(" | ")}` : "";
}

function openWhatsApp(message) {
  const sanitized = whatsappNumber.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${sanitized}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

function handleSingleOrder(artwork) {
  const message = `Hello Jabs Art Studio, I'd like to order "${artwork.title}" for ${formatPrice(artwork.price)}.${getBuyerInfo()}`;
  openWhatsApp(message);
}

function handleCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add an item to checkout on WhatsApp.");
    return;
  }
  const items = cart.map((item) => `${item.title} (${formatPrice(item.price)})`).join(", ");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const message = `Hello Jabs Art Studio, I'd like to purchase: ${items}. Total: ${formatPrice(total)}.${getBuyerInfo()}`;
  openWhatsApp(message);
}

function setupWhatsApp() {
  whatsappCheckout.addEventListener("click", handleCheckout);
}

function setupCardAnimation() {
  document.documentElement.classList.add("js-enabled");
  const cards = document.querySelectorAll(".product-card");
  if (!cards.length) return;

  let ticking = false;

  const updateVisibility = () => {
    const windowTop = window.scrollY;
    const windowBottom = windowTop + window.innerHeight;
    const revealStart = windowTop + window.innerHeight * 0.85;
    const revealEnd = windowTop + window.innerHeight * 0.15;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + window.scrollY;
      const cardBottom = rect.bottom + window.scrollY;
      const isVisible = cardTop < revealStart && cardBottom > revealEnd;
      card.classList.toggle("is-visible", isVisible);
    });

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateVisibility);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  requestAnimationFrame(updateVisibility);
}

function setupHeroCarousel() {
  const heroCarousel = document.getElementById("hero-carousel");
  if (!heroCarousel) return;

  let currentIndex = 0;

  const updateHeroCard = () => {
    const artwork = artworks[currentIndex];
    const card = heroCarousel.querySelector(".hero-card");
    
    card.innerHTML = `
      <p class="hero-card-title">Featured work</p>
      <p class="hero-card-name">${artwork.title}</p>
      <p class="hero-card-info">${artwork.medium} • NGN ${artwork.price.toLocaleString("en-NG")}</p>
    `;

    currentIndex = (currentIndex + 1) % artworks.length;
  };

  setInterval(updateHeroCard, 5000);
}

function init() {
  renderProducts();
  setupWhatsApp();
  setupCardAnimation();
  setupHeroCarousel();
}

init();
