const artworks = [
  {
    id: 1,
    title: "Feel the Rhythm, Feel the Heart",
    medium: "oil on canvas",
    size: "18 x 36 inches",
    price: 50000,
    image:
      "images/Feel the Rhythm, Feel the Heart.jpeg",
    story: "The music pours out of him, like he's bleeding emotions. Every note is real, straight from the heart. People stop and listen, and you can see the feelings hitting them, resonating deep.\n\n One woman's eyes well up with tears. The music's taken her back to a moment she thought was long gone. For a second, she and the saxophonist lock eyes, and it's like the music's connected them on a deeper level.\n\n The music fades, but the moment lingers. The feeling stays with you, a reminder that art can touch us in ways that words can't. Sometimes a melody just speaks to your soul, and that's what this is.",
  },
  {
    id: 2,
    title: "She Became the Path",
    medium: "Oil on canvas",
    size: "24 x 33 inches",
    price: 60000,
    image:
      "images/She Became the Path.jpeg",
    story: "She walked with night as her witness.\n Darkness did not hide her,it revealed her.\n\n Across her eyes lived the weight of many lives, souls she carried forward when fear tried to pull them back.The stars bent into maps, and freedom whispered only to those who dared to listen.\n\n Behind her, chains learned the meaning of dust.\n Ahead, hope learned how to breathe.   \n\nShe did not turn around. \nShe did not ask permission. \n\nThe World remembers her as history, but the night remembers her as a path to freedom.",
  },
  {
    id: 3,
    title: "Inside & outside",
    medium: "Acrylic on canvas",
    size: "24 x 24 inches",
    price: 60000,
    image:
      "images/Inside & outside.jpeg",
    story: "don't think I am like other people. I mean on some deep fundamental level. It's not just being half a twin and reading a lot and seeing fairies. It's not just being outside when they're all inside. I used to be inside. I think there's a way I stand aside and look backwards at things when they're happening which isn't normal...",
  },
  {
    id: 4,
    title: "Visionary",
    medium: "Oil on canvas",
    size: "30 x 36 inches",
    price: 60000,
    image:
      "images/Visionary.jpeg",
    story: "I stand in two forms.\n One in color — bold, broken, becoming.\n Every shade a dream. Every edge a lesson. \n One in grey — quiet, careful, controlled. \n The version the world accepts.\n\n Between us is not a wall.\nIt’s a choice. \n\n Shrink to fit…\nor rise in color.\n\n Today, I choose to be seen.",
  },
  {
    id: 5,
    title: "Influence of African Sculpture",
    medium: "Oil on canvas",
    size: "4 x 4 ft",
    price: 50000,
    image:
      "images/Influence of African Sculpture.jpeg",
    story: "Before the paint touched the canvas, the ancestors had already spoken.\n\n Their voices lived in carved wood — in masks with watchful eyes, in faces shaped not for beauty, but for meaning. They told stories of strength, spirit, and identity.\n\n Now, those same faces rise again — not from wood, but from bold blocks of color. Red for power. Black for mystery. Gold for royalty. Each shape echoes the hands of the sculptor who once carved stories into timber under an open African sky.\n\n This artwork is not just modern design. \n\n It is memory — reshaped. \n\n The spirit of African sculpture lives on, no longer in wood alone, but in color, rhythm, and fearless expression.",
  },
  {
    id: 6,
    title: "Silent Strength",
    medium: "Oil on canvas",
    size: "20 x 25 cm",
    price: 40000,
    image:
      "images/Silent Strength.jpeg",
    story: "She closes her eyes and the world grows quiet.\n\n Not because there is no noise — but because she has found peace within it.\n In the stillness, she gathers her strength, her memories, her prayers.\n\n The shadows do not hide her. They protect her. \n\n And in that calm moment, she becomes unshakable — powerful not by force, but by knowing who she is.",
  },
  {
    id: 7,
    title: "Edge of Tomorrow",
    medium: "oil paint",
    size: "20 x 25 inches",
    price: 40000,
    image:
      "images/Edge of Tomorrow.jpeg",
    story: "They gather where wood meets water — at the edge between safety and courage.\n\n The bridge holds their weight, but it is the river that holds their dreams.\n Some sit and watch, measuring the depth. Some stand tall, pretending they are not afraid. One leans forward, ready to leap — not just into water, but into possibility. \n\n They are boys today — laughing, daring, balancing between childhood and manhood. \n\n The water below reflects more than their bodies. It reflects their futures — uncertain, wide, and waiting. \n\n “Edge of Tomorrow” is a moment suspended in youth. A reminder that before every man learns to swim through life, he must first stand at the edge… and decide to jump.",
  },
  {
    id: 8,
    title: "Festival Masks",
    medium: "Acrylic on canvas",
    size: "18 x 24 inches",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    story: "Inspired by masquerade festivals where dance, costume, and spirit unite.",
  },
  {
    id: 9,
    title: "Indigo Market",
    medium: "Oil on canvas",
    size: "22 x 30 inches",
    price: 70000,
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
        <p class="product-story">${artwork.story}</p>
      </div>
      <div class="price-row">
        <div>
          <span style="display: block; font-weight: 700; color: var(--teal-dark);">${formatPrice(artwork.price)}</span>
          <span style="display: block; font-size: 0.8rem; color: var(--muted); margin-top: 2px;">Prices are negotiable</span>
        </div>
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
  const heroCarouselImage = document.getElementById("hero-carousel-image");
  const heroCardName = document.getElementById("hero-card-name");
  const heroCardInfo = document.getElementById("hero-card-info");
  if (!heroCarouselImage || !heroCardName || !heroCardInfo) return;

  let currentIndex = 0;

  const updateHeroCard = () => {
    const artwork = artworks[currentIndex];
    heroCarouselImage.src = artwork.image;
    heroCarouselImage.alt = artwork.title;
    heroCardName.textContent = artwork.title;
    heroCardInfo.textContent = `${artwork.medium} • NGN ${artwork.price.toLocaleString("en-NG")}`;

    currentIndex = (currentIndex + 1) % artworks.length;
  };

  updateHeroCard();
  setInterval(updateHeroCard, 5000);
}

function init() {
  renderProducts();
  setupWhatsApp();
  setupCardAnimation();
  setupHeroCarousel();
}

init();
