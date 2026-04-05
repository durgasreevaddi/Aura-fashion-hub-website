window.ui = {
    renderNavbar: () => {
        const cartCount = window.store.getCartCount();
        const themeIcon = window.store.theme === 'dark' ? 'sun' : 'moon';
        
        return `
            <nav class="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.app.navigate('home')">
                            <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 tracking-tighter">AURA</span>
                        </div>
                        
                        <!-- Desktop Menu -->
                        <div class="hidden md:flex space-x-8 items-center">
                            <a href="#home" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">Home</a>
                            <a href="#products" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">Shop</a>
                            <a href="#about" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">About</a>
                            <a href="#contact" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">Contact</a>
                        </div>

                        <!-- Icons -->
                        <div class="flex items-center space-x-5">
                            <button onclick="window.store.toggleTheme()" class="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
                                <i class="ph ph-${themeIcon} text-2xl"></i>
                            </button>
                            <a href="#auth" class="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
                                <i class="ph ph-user text-2xl"></i>
                            </a>
                            <a href="#cart" class="relative text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
                                <i class="ph ph-shopping-bag text-2xl"></i>
                                ${cartCount > 0 ? `<span class="absolute -top-1 -right-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">${cartCount}</span>` : ''}
                            </a>
                            <!-- Mobile menu button -->
                            <button class="md:hidden text-gray-600 dark:text-gray-300">
                                <i class="ph ph-list text-2xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    },

    renderFooter: () => {
        return `
            <footer class="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div class="col-span-1 md:col-span-1">
                            <span class="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 tracking-tighter mb-4 block">AURA</span>
                            <p class="text-gray-500 dark:text-gray-400 text-sm mt-4 leading-relaxed">
                                Curating the finest modern apparel, electronics, and home goods for the discerning individual.
                            </p>
                            <div class="flex space-x-4 mt-6">
                                <a href="#" class="text-gray-400 hover:text-purple-500 transition-colors"><i class="ph ph-instagram-logo text-xl"></i></a>
                                <a href="#" class="text-gray-400 hover:text-purple-500 transition-colors"><i class="ph ph-twitter-logo text-xl"></i></a>
                                <a href="#" class="text-gray-400 hover:text-purple-500 transition-colors"><i class="ph ph-facebook-logo text-xl"></i></a>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Shop</h3>
                            <ul class="space-y-3">
                                <li><a href="#products" class="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors text-sm">All Products</a></li>
                                <li><a href="#products" class="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors text-sm">New Arrivals</a></li>
                                <li><a href="#products" class="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors text-sm">Sale</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Support</h3>
                            <ul class="space-y-3">
                                <li><a href="#contact" class="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors text-sm">FAQ</a></li>
                                <li><a href="#contact" class="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors text-sm">Shipping</a></li>
                                <li><a href="#contact" class="text-gray-500 dark:text-gray-400 hover:text-purple-500 transition-colors text-sm">Returns</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Newsletter</h3>
                            <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                            <form class="flex" onsubmit="event.preventDefault(); window.ui.showToast('Subscribed to newsletter!')">
                                <input type="email" placeholder="Enter your email" required
                                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                                <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                                    <i class="ph ph-paper-plane-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 text-sm">&copy; 2026 Aura E-Commerce. All rights reserved.</p>
                        <div class="flex space-x-4 mt-4 md:mt-0 text-gray-400 text-2xl">
                            <i class="ph ph-stripe-logo"></i>
                            <i class="ph ph-paypal-logo"></i>
                            <i class="ph ph-apple-podcasts-logo"></i> <!-- Placeholder for Apple Pay -->
                        </div>
                    </div>
                </div>
            </footer>
        `;
    },

    renderProductCard: (product) => {
        const inWishlist = window.store.wishlist.includes(product.id);
        const heartIcon = inWishlist ? 'ph-fill ph-heart text-red-500' : 'ph ph-heart text-gray-400 group-hover:text-red-500';

        return `
            <div data-aos="fade-up" class="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                <!-- Image Container -->
                <div class="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-900 cursor-pointer" onclick="window.app.navigate('productDetail', '${product.id}')">
                    <img src="${product.image}" alt="${product.name}" class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    
                    <!-- Quick Actions -->
                    <div class="absolute top-4 right-4 z-10">
                        <button onclick="event.stopPropagation(); window.store.toggleWishlist('${product.id}')" class="p-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm rounded-full hover:scale-110 transition-transform">
                            <i class="${heartIcon} text-lg transition-colors"></i>
                        </button>
                    </div>
                </div>

                <!-- Product Info -->
                <div class="p-5">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <p class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider mb-1">${product.category}</p>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 cursor-pointer hover:text-purple-600 transition-colors" onclick="window.app.navigate('productDetail', '${product.id}')">
                                ${product.name}
                            </h3>
                        </div>
                        <span class="text-sm font-semibold flex items-center text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10 px-2 py-1 rounded-md">
                            <i class="ph-fill ph-star mr-1"></i> ${product.rating}
                        </span>
                    </div>
                    
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-xl font-black text-gray-900 dark:text-white">$${product.price.toFixed(2)}</span>
                        <button onclick="window.store.addToCart('${product.id}')" 
                                class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl font-bold text-sm hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all transform active:scale-95 shadow-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    showToast: (message) => {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'fixed bottom-5 right-5 z-[9999] flex flex-col gap-2 pointer-events-none';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow-2xl transform translate-y-10 opacity-0 transition-all duration-300 font-medium flex items-center gap-3 backdrop-blur-sm pointer-events-auto';
        toast.innerHTML = `
            <i class="ph-fill ph-check-circle text-green-400 dark:text-green-500 text-xl"></i>
            ${message}
        `;

        container.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.remove('translate-y-10', 'opacity-0');
        });

        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.add('opacity-0', 'scale-95');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};
