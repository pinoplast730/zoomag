
const products = {
    cats: [
        { id: 1, name: "Marly & Dan Calmness ласощі для котів 40 г - лосось", price: 200, img: "cat1.png" },
        { id: 2, name: "Half&Half Meaty Stick Adult ласощі для котів 5 г - качка", price: 12, img: "cat2.png" }, 
        { id: 3, name: "Savory Sterilized ласощі для котів 50 г - ягня та чорниця", price: 130, img: "cat3.png" },
        { id: 4, name: "Trixie Premio Duck Filet Bites ласощі для котів 50 г - качка", price: 81, img: "cat4.png" },
        { id: 5, name: "Brit Care Hairball Snack ласощі для котів 50 г", price: 60, img: "cat5.png" },
        { id: 6, name: "GimCat Nutri Pockets ласощі для котів 150 г ", price: 175, img: "cat6.png" },
        { id: 7, name: "Brit Care Advent Calendar набір ласощів для котів - асорт", price: 1046, img: "cat7.png" },
        { id: 8, name: "Trixie Premio адвент-календар для котів 30х34х3,5 см - асорті", price: 276, img: "cat8.png" },
        { id: 9, name: "Trixie Premio Stick Quintett ласощі для котів 5 шт - ягня та індичка", price: 78, img: "cat9.png" }

    ],
    dogs: [
        { id: 10, name: "Savory Deer Bars ласощі для собак 100 г - олень", price: 230, img: "dog1.png" },
        { id: 11, name: "Ласощі Plutos XL - арахісове масло", price: 300, img: "dog2.png" },
        { id: 12, name: "Imby Bite&Breath печиво для собак", price: 330, img: "dog3.png" },
        { id: 13, name: "Trixie Denta Fun Rolls 140 г - качка", price: 210, img: "dog4.png" },
        { id: 14, name: "YowUp Yogurt Skin and Hair 115 г", price: 181, img: "dog5.png" },
        { id: 15, name: "Trixie Premio Stripes ласощі для собак 100 г - качка", price: 154, img: "dog6.png" },
        { id: 17, name: "Savory Digestion Soft Snacks ласощі для собак 200 г - ягня та ромашка", price: 180, img: "dog7.png" },
        { id: 18, name: "Half&Half Tender Sticks Puppy ласощі для цуценят 100 г - індичка", price: 71, img: "dog8.png" },
        { id: 19, name: "Carnilove Soft Snack ласощі для собак 200 г - перепілка та орегано", price: 229, img: "dog9.png" },

        { id: 20, name: "Trixie Playing Rope іграшка для собак 60 см - помаранчевий", price: 234, img: "toy.png", category: "Іграшки" },
        { id: 21, name: "Іграшка для собак Eastland Крокодил 21 см (латекс)", price: 130, img: "toy1.png", category: "Іграшки" },
        { id: 22, name: "Іграшка для собак PitchDog кільце для апортування d = 20 см", price: 209, img: "toy2.png", category: "Іграшки" },
        { id: 23, name: "Trixie іграшка тунель для котів 25х50 см – колір в асортименті", price: 485, img: "toy3.png", category: "Іграшки" },
        { id: 24, name: "Іграшка для котів Pet Fun Мишка з пірʼям 12 см", price: 159, img: "toy4.png", category: "Іграшки" },
        { id: 25, name: "Іграшка для кота GimCat вудка з рибками та міні іграшками та котячою м'ятою", price: 260, img: "toy5.png", category: "Іграшки" },

        { id: 26, name: "Гель для котів та собак Orozyme для догляду за ротовою порожниною 70 г", price: 672, img: "toy6.png", category: "Гігієна" },
        { id: 27, name: "Шампунь для котів та собак Puramur Home line Antibacterial Protection 200 мл", price: 419, img: "toy7.png", category: "Гігієна" },
        { id: 28, name: "Шампунь для кошенят PROVET Profiline 300 мл - ромашка", price: 146, img: "toy8.png", category: "Гігієна" },
        { id: 29, name: "Набір для гігієни порожнини рота котів Trixie", price: 236, img: "toy9.png", category: "Гігієна" },
        { id: 30, name: "Menforsan Buccal Spray спрей для ротової порожнини собак 125 мл", price: 787, img: "toy10.png", category: "Гігієна" },
        { id: 31, name: "Menforsan Vanilla & Orange одеколон для собак 125 мл - ваніль та апельсин", price: 518, img: "toy11.png", category: "Гігієна" },

        { id: 32, name: "Нашийник для собак водостійкий WAUDOG Waterproof", price: 212, img: "img.png", category: "Нашийники" },
        { id: 33, name: "Нашийник для собак нейлоновий WAUDOG ", price: 385, img: "img1.png", category: "Нашийники" },
        { id: 34, name: "GPS нашийник для собак і кішок LT С09 (Black) нашийник з GPS трекером", price: 1690, img: "img2.png", category: "Нашийники" },
        { id: 35, name: "Світловідбивний нашийник для котів і кішок ", price: 200, img: "img3.png", category: "Нашийники" },
        { id: 36, name: "Світлодіодний нашийник для собак з USB-зарядкою та LED-підсвічуванням", price: 180, img: "img4.png", category: "Нашийники" },
        { id: 37, name: "Нашийник для кота Trixie вельветовий регульований з дзвіночком", price: 102, img: "img5.png", category: "Нашийники" },

        { id: 38, name: "Будиночок для котів і маленьких собак", price: 380, img: "imag.png", category: "Лежанки" }, 
        { id: 38, name: "М який дім-будиночок Pet Hut для собак і котів", price: 400, img: "imag1.png", category: "Лежанки" }, 
        { id: 38, name: "Будиночок для котів і собак сірий", price: 800, img: "imag2.png", category: "Лежанки" }, 
        { id: 38, name: "Eco Cushion – Еко-лежак з подушкою, що знімається, для собак різних порід та котів", price: 1614, img: "imag3.png", category: "Лежанки" }, 
        { id: 38, name: "Пуф будиночок із затишною лежанкою для кішки", price: 1000, img: "imag4.png", category: "Лежанки" }, 
        { id: 38, name: "Лежак для собак і кошенят AnimAll Royal Velours", price: 925, img: "imag5.png", category: "Лежанки" }, 


    ] 
};

let cart = [];


function showPage(pageId) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';

    if (pageId === 'home') {
        document.getElementById('home-page').style.display = 'block';
    } else if (pageId === 'cats' || pageId === 'dogs') {
        renderProducts(pageId); 
        document.getElementById('products-page').style.display = 'block';
    } else if (pageId === 'cart') {
        renderCart();
        document.getElementById('cart-page').style.display = 'block';
    }
    window.scrollTo(0,0);
}

function showCategory(categoryName) {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('cart-page').style.display = 'none';
    document.getElementById('products-page').style.display = 'block';
    window.scrollTo(0,0);

    const list = document.getElementById('product-list');
    const heroImg = document.getElementById('category-hero');
    const title = document.getElementById('category-title');
    const banner = document.querySelector('.product-banner');
    title.innerText = categoryName;
    
    switch(categoryName) {
        case 'Іграшки':
            heroImg.src = 'toys.png'; // Використовуємо картинку з картки категорії
            banner.style.background = '#FFFACD'; 
            break;
        case 'Нашийники':
            heroImg.src = 'sobaca.png';
            banner.style.background = '#E6E6FA'; 
            break;
        case 'Гігієна':
            heroImg.src = 'gigiena.png';
            banner.style.background = '#E0FFFF'; 
            break;
        case 'Лежанки':
            heroImg.src = 'leganka.png';
            banner.style.background = '#FFE4E1'; 
            break;
        // default:
        //     heroImg.src = 'cat_banner.png';
        //     banner.style.background = '#eee';
    }

    // Збираємо всі товари в одну купу, щоб відфільтрувати
    let allProducts = [
        ...products.cats.map(p => ({...p, originalType: 'cats'})), 
        ...products.dogs.map(p => ({...p, originalType: 'dogs'}))
    ];
    const filteredProducts = allProducts.filter(p => p.category === categoryName);
    list.innerHTML = '';
    if (filteredProducts.length === 0) {
        list.innerHTML = '<p style="text-align:center; width:100%; font-size:20px;">У цій категорії поки немає товарів.</p>';
        return;
    }

    filteredProducts.forEach(prod => {
        list.innerHTML += `
            <div class="product-item">
                <img src="${prod.img}" alt="${prod.name}">
                <h3>${prod.name}</h3>
                <p class="product-price">${prod.price} грн</p>
                <button class="add-to-cart-btn" onclick="addToCart(${prod.id}, '${prod.originalType}')">В кошик</button>
            </div>
        `;
    });
}

function renderProducts(type) {
    const list = document.getElementById('product-list');
    const heroImg = document.getElementById('category-hero');
    const title = document.getElementById('category-title');
    const banner = document.querySelector('.product-banner');

    list.innerHTML = '';
    
    if (type === 'cats') {
        heroImg.src = 'cat_banner.png';
        title.innerText = 'Товари для котиків';
        banner.style.background = '#FDF5E6';
    } else {
        heroImg.src = 'dog_banner.png';
        title.innerText = 'Товари для песиків';
        banner.style.background = '#E8F1F8';
    }

    products[type].forEach(prod => {
        list.innerHTML += `
            <div class="product-item">
                <img src="${prod.img}" alt="${prod.name}">
                <h3>${prod.name}</h3>
                <p class="product-price">${prod.price} грн</p>
                <button class="add-to-cart-btn" onclick="addToCart(${prod.id}, '${type}')">В кошик</button>
            </div>
        `;
    });
}

// Додавання в кошик
function addToCart(id, type) {
    const product = products[type].find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) {
        if (existing.qty < 100) existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartCount();
    alert(`Товар "${product.name}" додано до кошика!`);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = count;
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('total-price');
    container.innerHTML = '';
    
    let totalSum = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding: 50px;">Кошик порожній</p>';
        totalPriceElement.innerText = '0';
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        totalSum += itemTotal;

        container.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; padding: 20px; border-bottom: 1px solid #eee;">
                <div style="display:flex; align-items:center; gap: 20px; flex: 1;">
                    <img src="${item.img}" width="70" style="border-radius: 10px;">
                    <div>
                        <p style="font-weight:600; margin:0;">${item.name}</p>
                        <p style="color:#888; margin:5px 0;">${item.price} грн</p>
                    </div>
                </div>
                
                <div class="cart-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span style="font-size: 18px; font-weight: bold;">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
                
                <p style="font-weight:700; width: 120px; text-align:right;">${itemTotal} грн</p>
            </div>
        `;
    });

    totalPriceElement.innerText = totalSum;
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        } else if (item.qty > 100) {
            item.qty = 100;
        }
    }
    renderCart();
    updateCartCount();
}

function openCheckout() {
    if (cart.length === 0) return alert('Кошик порожній!');
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

document.getElementById('order-form').onsubmit = function(e) {
    e.preventDefault();
    alert('Дякуємо за замовлення! Ми зателефонуємо вам.');
    cart = [];
    updateCartCount();
    closeCheckout();
    showPage('home');
};

// Пошук
document.getElementById('searchInput').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    
    if (query.length > 0) {
        document.getElementById('home-page').style.display = 'none';
        document.getElementById('cart-page').style.display = 'none';
        document.getElementById('products-page').style.display = 'block';
        document.querySelector('.product-banner').style.height = '150px'; 
    }
    
    const allProducts = [...products.cats, ...products.dogs];
    const filtered = allProducts.filter(p => p.name.toLowerCase().includes(query));

    renderSearchLayout(filtered);
});

function renderSearchLayout(list) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    if (list.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding: 50px;">Нічого не знайдено :(</p>';
        return;
    }

    list.forEach(prod => {
        const type = products.cats.find(c => c.id === prod.id) ? 'cats' : 'dogs';
        
        container.innerHTML += `
            <div class="product-item">
                <img src="${prod.img}" alt="${prod.name}">
                <h3>${prod.name}</h3>
                <p class="product-price">${prod.price} грн</p>
                <button class="add-to-cart-btn" onclick="addToCart(${prod.id}, '${type}')">В кошик</button>
            </div>
        `;
    });
}






function openContacts() {
    document.getElementById('contact-modal').style.display = 'block';
}

function closeContacts() {
    document.getElementById('contact-modal').style.display = 'none';
}

function sendContactForm(e) {
    e.preventDefault(); 
    alert("Повідомлення надіслано! Ми зв'яжемося з вами.");
    closeContacts();
}


window.onclick = function(event) {
    const contactModal = document.getElementById('contact-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
    if (event.target === checkoutModal) {
        checkoutModal.style.display = "none";
    }
}