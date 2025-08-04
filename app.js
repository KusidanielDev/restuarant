// Menu items for the restaurant.  Each dish includes a name, price, category,
// media (images or videos) and a details list describing ingredients or
// preparation.  Images are loaded from Unsplash's featured API with search
// keywords to keep them fresh and appetising.  You can replace the image
// URLs with your own assets if desired.
const products = [
  {
    id: 1,
    name: "Spicy Jollof Rice",
    price: 30,
    category: "mains",
    media: [
      {
        type: "image",
        src: "./media/mains.png",
      },
      {
        type: "image",
        src: "./media/mains.png",
      },
    ],
    details: `
      <ul>
        <li>Steamed rice simmered in a spicy tomato and pepper base</li>
        <li>Served with tender chicken pieces and fresh vegetables</li>
        <li>Garnished with fried plantains and a side salad</li>
        <li>Made using locally sourced herbs and spices</li>
        <li>Portion size suitable for two hungry diners</li>
      </ul>
    `,
  },
  {
    id: 2,
    name: "Fufu with Light Soup",
    price: 35,
    category: "mains",
    media: [
      {
        type: "image",
        src: "./media/mains.png",
      },
      {
        type: "image",
        src: "./media/mains.png",
      },
    ],
    details: `
      <ul>
        <li>Soft cassava and plantain dough pounded to a silky texture</li>
        <li>Served with a fragrant tomato and goat meat light soup</li>
        <li>Spiced with ginger, garlic and scotch bonnet peppers</li>
        <li>Accompanied by garden eggs and okra</li>
        <li>Authentic taste of home cooked Ghanaian cuisine</li>
      </ul>
    `,
  },
  {
    id: 3,
    name: "Kelewele (Spicy Fried Plantain)",
    price: 15,
    category: "starters",
    media: [
      {
        type: "image",
        src: "./media/starters.png",
      },
      {
        type: "image",
        src: "./media/starters.png",
      },
    ],
    details: `
      <ul>
        <li>Sweet ripe plantains tossed in ginger, garlic and cayenne</li>
        <li>Deep-fried until golden brown and crispy</li>
        <li>Served with a tangy peanut and chili dipping sauce</li>
        <li>A popular street food favourite reinvented for the table</li>
        <li>Perfect as a starter or side to share</li>
      </ul>
    `,
  },
  {
    id: 4,
    name: "Grilled Tilapia with Banku",
    price: 40,
    category: "mains",
    media: [
      {
        type: "image",
        src: "./media/mains.png",
      },
      {
        type: "image",
        src: "./media/mains.png",
      },
    ],
    details: `
      <ul>
        <li>Whole fresh tilapia marinated in garlic, lemon and spices</li>
        <li>Chargrilled to perfection for a smoky flavour</li>
        <li>Served with fermented corn and cassava dough (banku)</li>
        <li>Accompanied by spicy green pepper sauce and shito</li>
        <li>A hearty meal that’s both healthy and satisfying</li>
      </ul>
    `,
  },
  {
    id: 5,
    name: "Banku and Okro Stew",
    price: 33,
    category: "mains",
    media: [
      {
        type: "image",
        src: "./media/mains.png",
      },
      {
        type: "image",
        src: "./media/mains.png",
      },
    ],
    details: `
      <ul>
        <li>Fermented corn and cassava dough steamed to fluffy perfection</li>
        <li>Paired with a rich okro stew made with beef, crab and smoked fish</li>
        <li>Seasoned with palm oil, dried shrimp and local spices</li>
        <li>Finished with chopped tomatoes, onions and scotch bonnets</li>
        <li>A quintessentially Ghanaian delicacy you must try</li>
      </ul>
    `,
  },
  {
    id: 6,
    name: "Assorted Meat Pizza",
    price: 45,
    category: "mains",
    media: [
      {
        type: "image",
        src: "./media/mains.png",
      },
      {
        type: "image",
        src: "./media/mains.png",
      },
    ],
    details: `
      <ul>
        <li>Stone-baked pizza with hand-tossed crust</li>
        <li>Topped with spicy sausage, grilled chicken and beef strips</li>
        <li>Smothered in mozzarella and cheddar cheese</li>
        <li>Finished with onions, bell peppers and olives</li>
        <li>A fusion twist on a classic favourite</li>
      </ul>
    `,
  },
  {
    id: 7,
    name: "Chilled Sobolo (Hibiscus Drink)",
    price: 10,
    category: "drinks",
    media: [
      {
        type: "image",
        src: "./media/drinks.png",
      },
      {
        type: "image",
        src: "./media/drinks.png",
      },
    ],
    details: `
      <ul>
        <li>Refreshing chilled drink made from hibiscus petals</li>
        <li>Infused with cloves, cinnamon and fresh ginger</li>
        <li>Sweetened with organic cane sugar</li>
        <li>Served over ice with a slice of lime</li>
        <li>Perfect accompaniment to any meal</li>
      </ul>
    `,
  },
  {
    id: 8,
    name: "Fresh Pineapple Juice",
    price: 12,
    category: "drinks",
    media: [
      {
        type: "image",
        src: "./media/drinks.png",
      },
      {
        type: "image",
        src: "./media/drinks.png",
      },
    ],
    details: `
      <ul>
        <li>Pressed from ripe, locally grown pineapples</li>
        <li>No added sugars or preservatives</li>
        <li>Rich in vitamin C and antioxidants</li>
        <li>Served chilled with a mint sprig</li>
        <li>A revitalising treat for any time of day</li>
      </ul>
    `,
  },
  {
    id: 9,
    name: "Chocolate Brownie Sundae",
    price: 20,
    category: "desserts",
    media: [
      {
        type: "image",
        src: "./media/desserts.png",
      },
      {
        type: "image",
        src: "./media/desserts.png",
      },
    ],
    details: `
      <ul>
        <li>Warm fudgy brownie topped with vanilla ice cream</li>
        <li>Drizzled with rich chocolate and caramel sauce</li>
        <li>Finished with whipped cream and crushed nuts</li>
        <li>Perfect for satisfying your sweet tooth</li>
        <li>Shareable between two (or keep it all to yourself!)</li>
      </ul>
    `,
  },
  {
    id: 10,
    name: "Bofrot (Puff‑Puff)",
    price: 8,
    category: "desserts",
    media: [
      {
        type: "image",
        src: "./media/desserts.png",
      },
      {
        type: "image",
        src: "./media/desserts.png",
      },
    ],
    details: `
      <ul>
        <li>Deep‑fried dough balls with a light, airy texture</li>
        <li>Made with flour, yeast, sugar and nutmeg</li>
        <li>Served dusted with powdered sugar or cinnamon</li>
        <li>Enjoyed hot off the fryer for the best flavour</li>
        <li>A beloved Ghanaian snack that’s hard to resist</li>
      </ul>
    `,
  },
];

// Cart functionality
let cart = [];
let scrollPosition = 0;

// State for category filtering, search and sorting
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";

// DOM elements
const cartIcon = document.getElementById("cart-icon");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartBadge = document.querySelector(".cart-badge");
const checkoutBtn = document.getElementById("checkout-btn");
const filterBtn = document.getElementById("filter-btn");
const filterDropdown = document.getElementById("filter-dropdown");
const filterList = document.querySelectorAll(".filter-list li");
const notificationContainer = document.getElementById("notification-container");

// Additional controls
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const productOverlay = document.getElementById("product-overlay");
const productModal = document.getElementById("product-modal");
const productModalBody = document.getElementById("product-modal-body");
const productModalClose = document.getElementById("product-modal-close");

// Initialize app
function init() {
  // Load cart from storage and set up UI
  loadCart();
  setupEventListeners();

  // Apply dark mode if previously enabled
  const darkPref = localStorage.getItem("darkMode");
  if (darkPref === "true") {
    document.body.classList.add("dark-mode");
  }
  updateDarkModeIcon();

  // Render the product list based on current filters and search/sort state
  updateProductList();
}

// Set up event listeners
function setupEventListeners() {
  // Cart events
  cartIcon.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartModal);
  cartOverlay.addEventListener("click", closeCartModal);
  checkoutBtn.addEventListener("click", checkoutViaWhatsApp);

  // Filter events
  filterBtn.addEventListener("click", toggleFilterDropdown);

  // Add click event to filter items
  filterList.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;
      // Update current category and refresh list
      currentCategory = category;
      updateProductList();

      // Update active class
      filterList.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");

      // Close dropdown on mobile
      if (window.innerWidth < 992) {
        filterDropdown.classList.remove("show");
      }
    });
  });

  // Reservation form submission
  const reservationForm = document.getElementById("reservation-form");
  const formMessage = document.getElementById("form-message");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Collect user input
      const name = document.getElementById("res-name").value.trim();
      const phone = document.getElementById("res-phone").value.trim();
      const date = document.getElementById("res-date").value;
      const time = document.getElementById("res-time").value;
      const guests = document.getElementById("res-guests").value;
      const message = document.getElementById("res-message").value.trim();

      // Simple validation (required fields are enforced by HTML5 but rechecked here)
      if (!name || !phone || !date || !time || !guests) {
        formMessage.textContent = "Please fill out all required fields.";
        formMessage.style.color = "#e74c3c";
        return;
      }

      // Here you could send the reservation details to a server or messaging
      // platform. For this demonstration we'll just display a thank you
      // message and reset the form.
      formMessage.textContent =
        "Thank you, " +
        name +
        ". Your reservation request has been received. We'll contact you shortly.";
      formMessage.style.color = "var(--success-color)";
      reservationForm.reset();
    });
  }

  // Search input functionality
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearch = searchInput.value.trim().toLowerCase();
      updateProductList();
    });
  }

  // Sort select functionality
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      currentSort = sortSelect.value;
      updateProductList();
    });
  }

  // Dark mode toggle
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleDarkMode();
    });
  }

  // Product modal close events
  if (productOverlay) {
    productOverlay.addEventListener("click", closeProductModal);
  }
  if (productModalClose) {
    productModalClose.addEventListener("click", closeProductModal);
  }
}

// Open cart modal
function openCart(e) {
  e.preventDefault();
  scrollPosition = window.scrollY;
  cartModal.classList.add("open");
  cartOverlay.classList.add("active");
  document.body.classList.add("scroll-lock");
  renderCartItems();
}

// Close cart modal
function closeCartModal() {
  cartModal.classList.remove("open");
  cartOverlay.classList.remove("active");
  document.body.classList.remove("scroll-lock");
  window.scrollTo(0, scrollPosition);
}

// Toggle filter dropdown
function toggleFilterDropdown() {
  filterDropdown.classList.toggle("show");
}

// Filter products by category
function filterProducts(category) {
  // Deprecated: use updateProductList instead
  currentCategory = category;
  updateProductList();
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  // Check if product is already in cart
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.media.find((m) => m.type === "image").src,
      quantity: 1,
    });
  }

  saveCart();
  updateCartBadge();

  // Show notification
  showAddedToCartNotification(product);
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

// Increase quantity for a dish in the cart
function incrementQuantity(productId) {
  const item = cart.find((it) => it.id === productId);
  if (item) {
    item.quantity += 1;
    saveCart();
    updateCartBadge();
    renderCartItems();
  }
}

// Decrease quantity for a dish in the cart.  If quantity drops to zero the
// item is removed entirely.
function decrementQuantity(productId) {
  const item = cart.find((it) => it.id === productId);
  if (item) {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartBadge();
      renderCartItems();
    }
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartBadge();
  }
}

// Update cart badge
function updateCartBadge() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartBadge.textContent = totalItems;
}

// Render cart items
function renderCartItems() {
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart">
              <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 15px;"></i>
              <p>Your order is empty</p>
            </div>
          `;
    cartTotal.textContent = "₵0";
    return;
  }

  let cartHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    cartHTML += `
            <div class="cart-item" data-id="${item.id}">
              <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <!-- Unit price -->
                <div class="cart-item-price">₵${item.price.toLocaleString()}</div>
                <!-- Quantity controls for this dish -->
                <div class="cart-item-quantity">
                  <button class="qty-btn" onclick="decrementQuantity(${item.id})">−</button>
                  <span class="qty-count">${item.quantity}</span>
                  <button class="qty-btn" onclick="incrementQuantity(${item.id})">+</button>
                </div>
                <!-- Subtotal for this dish -->
                <div class="cart-item-subtotal">Subtotal: ₵${(item.price * item.quantity).toLocaleString()}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                  <i class="fas fa-trash"></i> Remove
                </button>
              </div>
            </div>
          `;
  });

  cartItemsContainer.innerHTML = cartHTML;
  cartTotal.textContent = `₵${total.toLocaleString()}`;
}

// Show added to cart notification
function showAddedToCartNotification(product) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.innerHTML = `
          <div class="notification-icon">
            <i class="fas fa-check"></i>
          </div>
          <div class="notification-content">
            <div class="notification-title">Added to Order</div>
            <div class="notification-message">${product.name} has been added to your order</div>
          </div>
          <button class="notification-close">
            <i class="fas fa-times"></i>
          </button>
        `;

  notificationContainer.appendChild(notification);

  // Trigger the animation
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close");
  closeBtn.addEventListener("click", () => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 400);
  });

  // Auto-remove notification after 4 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 4000);
}

// Checkout via WhatsApp
function checkoutViaWhatsApp() {
  if (cart.length === 0) return;

  // Compose a WhatsApp message to send the order details.  Using URI encoding
  // for line breaks (%0A) ensures the message preserves formatting.
  let message =
    "Hello, I'd like to order the following dishes from Delicious Bites:%0A%0A";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ₵${item.price} × ${
      item.quantity
    }%0A`;
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  message += `%0ATotal: ₵${total.toLocaleString()}%0A%0APlease let me know how to proceed with payment and delivery.`;

  const whatsappUrl = `https://wa.me/+233123456789?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// Render products
function renderProducts(products) {
  const reelMain = document.getElementById("reel-main");
  reelMain.innerHTML = "";

  products.forEach((p) => {
    reelMain.appendChild(createReel(p));
  });
}

// Update the product list based on current search, category and sort state
function updateProductList() {
  let filtered = products.slice();

  // Filter by category
  if (currentCategory && currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }
  // Filter by search query
  if (currentSearch) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(currentSearch)
    );
  }
  // Sort
  if (currentSort === "priceAsc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === "priceDesc") {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    // default: sort by id to preserve original order
    filtered.sort((a, b) => a.id - b.id);
  }
  renderProducts(filtered);
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark ? "true" : "false");
  updateDarkModeIcon();
}

// Update dark mode icon and label based on current mode
function updateDarkModeIcon() {
  if (!darkModeToggle) return;
  const iconEl = darkModeToggle.querySelector("i");
  const labelEl = darkModeToggle.querySelector(".icon-label");
  if (document.body.classList.contains("dark-mode")) {
    if (iconEl) {
      iconEl.classList.remove("fa-moon");
      iconEl.classList.add("fa-sun");
    }
    if (labelEl) {
      labelEl.textContent = "Light Mode";
    }
  } else {
    if (iconEl) {
      iconEl.classList.remove("fa-sun");
      iconEl.classList.add("fa-moon");
    }
    if (labelEl) {
      labelEl.textContent = "Dark Mode";
    }
  }
}

// Open product details modal with given product
function openProductModal(product) {
  if (!product) return;
  // Clear existing content
  productModalBody.innerHTML = "";

  // Create image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "product-modal-image";
  const images = [];
  product.media.forEach((mediaItem, idx) => {
    const img = document.createElement("img");
    img.src = mediaItem.src;
    img.alt = product.name;
    if (idx !== 0) {
      img.style.display = "none";
    }
    imageContainer.appendChild(img);
    images.push(img);
  });
  let currentIndex = 0;
  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });
    currentIndex = index;
  }
  // Navigation arrows if more than one image
  if (images.length > 1) {
    const leftArrow = document.createElement("div");
    leftArrow.className = "modal-nav-arrow left";
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftArrow.addEventListener("click", () => {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(prevIndex);
    });
    imageContainer.appendChild(leftArrow);
    const rightArrow = document.createElement("div");
    rightArrow.className = "modal-nav-arrow right";
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightArrow.addEventListener("click", () => {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
    });
    imageContainer.appendChild(rightArrow);
  }

  // Info container
  const infoContainer = document.createElement("div");
  infoContainer.className = "product-modal-info";
  const titleEl = document.createElement("h3");
  titleEl.textContent = product.name;
  const priceEl = document.createElement("div");
  priceEl.className = "modal-price";
  priceEl.textContent = `₵${product.price.toLocaleString()}`;
  const detailsEl = document.createElement("div");
  detailsEl.className = "modal-details";
  detailsEl.innerHTML = product.details;
  const addBtn = document.createElement("button");
  addBtn.className = "modal-add-btn";
  addBtn.textContent = "Add to Order";
  addBtn.addEventListener("click", () => {
    addToCart(product.id);
    closeProductModal();
  });
  infoContainer.appendChild(titleEl);
  infoContainer.appendChild(priceEl);
  infoContainer.appendChild(detailsEl);
  infoContainer.appendChild(addBtn);

  // Append containers to modal body
  productModalBody.appendChild(imageContainer);
  productModalBody.appendChild(infoContainer);

  // Show overlay and modal
  productOverlay.classList.add("active");
  productModal.classList.add("open");
}

// Close the product modal
function closeProductModal() {
  productOverlay.classList.remove("active");
  productModal.classList.remove("open");
}

// Create product reel
function createReel(product) {
  const reel = document.createElement("div");
  reel.className = "reel";

  const card = document.createElement("div");
  card.className = "reel-card";

  // Front of card
  const front = document.createElement("div");
  front.className = "reel-content";

  // Image/video container
  const imageBox = document.createElement("div");
  imageBox.className = "reel-image-container";

  const dotBox = document.createElement("div");
  dotBox.className = "reel-dots";

  // Create media elements
  product.media.forEach((media, i) => {
    let mediaElement;

    if (media.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = media.src;
      mediaElement.muted = true;
      mediaElement.playsInline = true;
      mediaElement.loop = true;
      // Add controls for better UX
      mediaElement.controls = true;
    } else {
      mediaElement = document.createElement("img");
      mediaElement.src = media.src;
    }

    mediaElement.alt = product.name;
    if (i === 0) mediaElement.classList.add("active");
    imageBox.appendChild(mediaElement);

    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => {
      showMedia(imageBox, dotBox, i);
    });
    dotBox.appendChild(dot);
  });

  // Navigation arrows only if multiple media items
  if (product.media.length > 1) {
    const leftArrow = document.createElement("div");
    leftArrow.className = "nav-arrow left";
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftArrow.addEventListener("click", () => {
      const currentIndex = getCurrentMediaIndex(imageBox);
      const prevIndex =
        (currentIndex - 1 + product.media.length) % product.media.length;
      showMedia(imageBox, dotBox, prevIndex);
    });
    imageBox.appendChild(leftArrow);

    const rightArrow = document.createElement("div");
    rightArrow.className = "nav-arrow right";
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightArrow.addEventListener("click", () => {
      const currentIndex = getCurrentMediaIndex(imageBox);
      const nextIndex = (currentIndex + 1) % product.media.length;
      showMedia(imageBox, dotBox, nextIndex);
    });
    imageBox.appendChild(rightArrow);
  }

  // Swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  imageBox.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  imageBox.addEventListener("touchend", (e) => {
    if (product.media.length <= 1) return;

    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    const currentIndex = getCurrentMediaIndex(imageBox);

    if (diff > 50) {
      // Swiped left
      const nextIndex = (currentIndex + 1) % product.media.length;
      showMedia(imageBox, dotBox, nextIndex);
    } else if (diff < -50) {
      // Swiped right
      const prevIndex =
        (currentIndex - 1 + product.media.length) % product.media.length;
      showMedia(imageBox, dotBox, prevIndex);
    }
  });

  // Product info
  const title = document.createElement("h2");
  title.className = "reel-title";
  title.textContent = product.name;

  const price = document.createElement("div");
  price.className = "reel-price";
  price.textContent = `₵${product.price.toLocaleString()}`;

  // Buttons container
  const buttons = document.createElement("div");
  buttons.className = "reel-buttons";

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "details-btn";
  detailsBtn.textContent = "Details";
  // When clicked, open the modal with detailed info instead of flipping the card
  detailsBtn.addEventListener("click", () => {
    openProductModal(product);
  });

  const cartBtn = document.createElement("button");
  cartBtn.className = "cart-btn";
  cartBtn.textContent = "Add to Order";
  cartBtn.addEventListener("click", () => {
    addToCart(product.id);
  });

  buttons.appendChild(detailsBtn);
  buttons.appendChild(cartBtn);

  front.appendChild(imageBox);
  front.appendChild(dotBox);
  front.appendChild(title);
  front.appendChild(price);
  front.appendChild(buttons);

  // Back of card
  const back = document.createElement("div");
  back.className = "reel-back";
  back.innerHTML = `
          <h3>Product Details</h3>
          ${product.details}
          <button class="back-btn">Back to Product</button>
        `;

  back.querySelector(".back-btn").addEventListener("click", () => {
    back.classList.remove("active");
  });

  card.appendChild(front);
  card.appendChild(back);
  reel.appendChild(card);

  return reel;
}

// Show specific media item
function showMedia(container, dotContainer, index) {
  const mediaElements = container.querySelectorAll("img, video");
  const dots = dotContainer.querySelectorAll(".dot");

  mediaElements.forEach((el, i) => {
    if (i === index) {
      el.classList.add("active");
      if (el.tagName === "VIDEO") {
        // Try to play video with error handling
        el.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      }
    } else {
      el.classList.remove("active");
      if (el.tagName === "VIDEO") {
        el.pause();
      }
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Get current media index
function getCurrentMediaIndex(container) {
  const mediaElements = container.querySelectorAll("img, video");
  for (let i = 0; i < mediaElements.length; i++) {
    if (mediaElements[i].classList.contains("active")) {
      return i;
    }
  }
  return 0;
}

// Initialize the app
init();
