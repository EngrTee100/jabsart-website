const artworks = [
  {
    id: 1,
    title: "Tortoise Historical African Painting",
    medium: "Original oil on canvas",
    size: "24 x 36 inches",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Warm terracotta tones with coastal reflections.",
    story: "Inspired by Badagry folklore, this piece honors the tortoise as a symbol of wit and survival.",
  },
  {
    id: 2,
    title: "Religious Conflict - Abstract African Painting",
    medium: "Oil on canvas",
    size: "20.5 x 33 inches",
    price: 80000,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    description: "Layered figures and vibrant blues in motion.",
    story: "A personal reflection on unity, told through overlapping forms and calm, healing blues.",
  },
  {
    id: 3,
    title: "Market Drummers",
    medium: "Acrylic on canvas",
    size: "18 x 24 inches",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80",
    description: "Rhythm, color, and the sound of open-air markets.",
    story: "Painted after a Saturday market performance where drums echoed across the stalls.",
  },
  {
    id: 4,
    title: "Osun River Light",
    medium: "Mixed media on canvas",
    size: "30 x 40 inches",
    price: 175000,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    description: "Luminous greens with delicate metallic details.",
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
    description: "Sun-washed plains with soft ochre gradients.",
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
    description: "Urban silhouettes layered with electric blues.",
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
    description: "Textured palms with copper leaf highlights.",
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
    description: "Bold mask forms with rhythmic color blocks.",
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
    description: "Deep indigo washes with layered market textures.",
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
        <p class="product-meta">${artwork.description}</p>
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

function init() {
  renderProducts();
  setupWhatsApp();
  setupCardAnimation();
}

init();
