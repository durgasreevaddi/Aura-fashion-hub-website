class App {
    constructor() {
        this.appRoot = document.getElementById('app-root');
        this.navbarRoot = document.getElementById('navbar-root');
        this.footerRoot = document.getElementById('footer-root');
        
        this.currentRoute = 'home';
        this.currentParam = null;
        
        this.currentCategory = 'all';
        this.currentSearch = '';
        this.currentSort = 'featured';

        // Listen for hash changes
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        
        // Re-render UI when store updates (like cart count)
        window.store.subscribe(() => {
            this.renderNavbar();
            if (this.currentRoute === 'cart') {
                this.renderCartItems();
            }
        });

        this.init();
    }

    init() {
        this.handleHashChange();
    }

    handleHashChange() {
        const hash = window.location.hash.slice(1); // remove '#'
        if (!hash) {
            this.navigate('home');
            return;
        }

        const [route, param] = hash.split('/');
        
        this.currentRoute = route || 'home';
        this.currentParam = param || null;
        
        this.render();
    }

    navigate(route, param = null) {
        let hash = `#${route}`;
        if (param) hash += `/${param}`;
        window.location.hash = hash;
    }

    render() {
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        this.renderNavbar();
        
        // Render Page Content
        if (window.pages[this.currentRoute]) {
            // Pass param if exists (e.g. category for products, id for productDetail)
            if(this.currentRoute === 'products' && this.currentParam) {
               this.currentCategory = this.currentParam;
            }
            this.appRoot.innerHTML = window.pages[this.currentRoute](this.currentParam || this.currentCategory);
        } else {
            this.appRoot.innerHTML = window.pages.home();
        }

        this.renderFooter();

        // Extra Page-specific hydration
        if (this.currentRoute === 'products') {
            this.hydrateProducts();
        } else if (this.currentRoute === 'cart') {
            this.renderCartItems();
        }

        // Re-initialize AOS on dynamic content
        if (window.AOS) {
            setTimeout(() => {
                window.AOS.refreshHard();
            }, 100);
        }
    }

    renderNavbar() {
        this.navbarRoot.innerHTML = window.ui.renderNavbar();
    }

    renderFooter() {
        // Don't show footer on auth page
        if (this.currentRoute === 'auth') {
             this.footerRoot.innerHTML = '';
        } else {
             this.footerRoot.innerHTML = window.ui.renderFooter();
        }
    }

    // Products Page Logic
    hydrateProducts() {
        this.renderProductsGrid();
    }

    filterProducts(category) {
        this.currentCategory = category;
        this.render(); // Re-render whole products page to update filter button active states
    }

    searchProducts(query) {
        this.currentSearch = query.toLowerCase();
        this.renderProductsGrid();
    }

    sortProducts(sortType) {
        this.currentSort = sortType;
        this.renderProductsGrid();
    }

    renderProductsGrid() {
        const grid = document.getElementById('products-grid');
        if (!grid) return;

        let filtered = window.ECOM_DATA.filter(p => {
            const matchCategory = this.currentCategory === 'all' || p.category === this.currentCategory;
            const matchSearch = p.name.toLowerCase().includes(this.currentSearch) || p.description.toLowerCase().includes(this.currentSearch);
            return matchCategory && matchSearch;
        });

        if (this.currentSort === 'price-low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (this.currentSort === 'price-high') {
            filtered.sort((a, b) => b.price - a.price);
        } else if (this.currentSort === 'rating') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (filtered.length === 0) {
            grid.innerHTML = `<div class="col-span-full py-20 text-center text-gray-500">No products found matching your criteria.</div>`;
            return;
        }

        grid.innerHTML = filtered.map(p => window.ui.renderProductCard(p)).join('');
    }

    // Cart Logic
    renderCartItems() {
        const container = document.getElementById('cart-container');
        if (!container) return;

        const cartItems = window.store.cart;
        
        if (cartItems.length === 0) {
            container.innerHTML = `
                <div class="w-full text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 mb-6">
                        <i class="ph ph-shopping-cart text-5xl"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your cart is empty</h2>
                    <p class="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
                    <button onclick="window.app.navigate('products')" class="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all">
                        Start Shopping
                    </button>
                </div>
            `;
            return;
        }

        const itemsHtml = cartItems.map(item => {
            const p = window.ECOM_DATA.find(product => product.id === item.id);
            if(!p) return '';
            return `
                <div class="flex items-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl mb-4 shadow-sm" data-aos="fade-up">
                    <img src="${p.image}" class="w-24 h-24 object-cover rounded-xl bg-gray-100">
                    <div class="ml-6 flex-grow">
                        <h3 class="font-bold text-gray-900 dark:text-white text-lg">${p.name}</h3>
                        <p class="text-gray-500 text-sm mb-2 capitalize">${p.category}</p>
                        <p class="font-black text-gray-900 dark:text-white mt-1">$${p.price.toFixed(2)}</p>
                    </div>
                    <div class="flex flex-col items-end space-y-4">
                        <button onclick="window.store.removeFromCart('${p.id}')" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i class="ph ph-trash text-xl"></i>
                        </button>
                        <div class="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-3 py-1 bg-gray-50 dark:bg-gray-800">
                            <button onclick="window.store.updateQuantity('${p.id}', ${item.quantity - 1})" class="text-gray-500 hover:text-purple-600"><i class="ph ph-minus"></i></button>
                            <span class="font-bold border-0 bg-transparent w-8 text-center text-gray-900 dark:text-white">${item.quantity}</span>
                            <button onclick="window.store.updateQuantity('${p.id}', ${item.quantity + 1})" class="text-gray-500 hover:text-purple-600"><i class="ph ph-plus"></i></button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        const total = window.store.getCartTotal();
        const shipping = 10.00;
        const grandTotal = total + shipping;

        container.innerHTML = `
            <div class="w-full lg:w-2/3">
                ${itemsHtml}
            </div>
            
            <div class="w-full lg:w-1/3">
                <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm sticky top-24" data-aos="fade-up" data-aos-delay="200">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">Order Summary</h3>
                    
                    <div class="space-y-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                        <div class="flex justify-between">
                            <span>Subtotal</span>
                            <span class="font-bold text-gray-900 dark:text-white">$${total.toFixed(2)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Shipping estimate</span>
                            <span class="font-bold text-gray-900 dark:text-white">$${shipping.toFixed(2)}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Tax</span>
                            <span class="font-bold text-gray-900 dark:text-white">Calculated at checkout</span>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-200 dark:border-gray-800 pt-6 mb-8">
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-gray-900 dark:text-white text-lg">Total</span>
                            <span class="font-black text-3xl text-gray-900 dark:text-white">$${grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    
                    <button onclick="window.app.navigate('checkout')" class="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 transition-all active:scale-95 text-lg flex justify-center items-center">
                        Proceed to Checkout <i class="ph ph-arrow-right ml-2 text-xl"></i>
                    </button>
                    
                    <div class="mt-6 flex justify-center space-x-4 text-gray-400 text-2xl">
                        <i class="ph ph-stripe-logo"></i>
                        <i class="ph ph-paypal-logo"></i>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    if(window.AOS) window.AOS.init({ once: true, offset: 50, duration: 800 });
    
    // Init app
    window.app = new App();
});
