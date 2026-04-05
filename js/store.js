class Store {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.theme = localStorage.getItem('theme') || 'light';
        this.listeners = [];
        this.initTheme();
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notify() {
        this.listeners.forEach(listener => listener());
    }

    // Cart Methods
    addToCart(productId, quantity = 1) {
        const item = this.cart.find(i => i.id === productId);
        if (item) {
            item.quantity += quantity;
        } else {
            this.cart.push({ id: productId, quantity });
        }
        this.saveCart();
        window.ui.showToast('Item added to cart!');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(i => i.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        if (quantity < 1) return this.removeFromCart(productId);
        const item = this.cart.find(i => i.id === productId);
        if (item) {
            item.quantity = quantity;
        }
        this.saveCart();
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.notify();
    }

    getCartCount() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    getCartTotal() {
        return this.cart.reduce((total, item) => {
            const product = window.ECOM_DATA.find(p => p.id === item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    // Wishlist Methods
    toggleWishlist(productId) {
        if (this.wishlist.includes(productId)) {
            this.wishlist = this.wishlist.filter(id => id !== productId);
        } else {
            this.wishlist.push(productId);
            window.ui.showToast('Item added to wishlist!');
        }
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
        this.notify();
    }

    // Theme Methods
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.initTheme();
    }

    initTheme() {
        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}

// Global instance
window.store = new Store();
