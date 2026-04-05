window.pages = {
    home: () => {
        const featuredProducts = window.ECOM_DATA.slice(0, 4);
        
        return `
            <!-- Hero Section -->
            <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 pt-16">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 z-0"></div>
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-5"></div>
                
                <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <div class="w-full md:w-1/2 text-center md:text-left pt-20 md:pt-0" data-aos="fade-right">
                        <span class="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-wider mb-6">NEW COLLECTION 2026</span>
                        <h1 class="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tighter mb-6">
                            Redefine Your <br>
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Lifestyle.</span>
                        </h1>
                        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto md:mx-0">
                            Discover premium quality products designed for modern living. Elevate your everyday with Aura.
                        </p>
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                            <button onclick="window.app.navigate('products')" class="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                                Shop Now
                            </button>
                            <button onclick="window.app.navigate('about')" class="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 mt-16 md:mt-0 relative" data-aos="fade-left" data-aos-delay="200">
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" class="w-full h-auto object-cover" alt="Hero Fashion">
                        </div>
                        <!-- Floating Glass Card -->
                        <div class="absolute -bottom-10 -left-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 dark:border-white/10" data-aos="fade-up" data-aos-delay="400">
                            <div class="flex items-center space-x-4">
                                <div class="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full text-purple-600 dark:text-purple-400">
                                    <i class="ph-fill ph-star text-2xl"></i>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900 dark:text-white">Premium Quality</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">Guaranteed Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Categories -->
            <section class="py-24 bg-white dark:bg-gray-950">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16" data-aos="fade-up">
                        <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Shop by Category</h2>
                        <div class="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="group relative rounded-3xl overflow-hidden cursor-pointer aspect-square md:aspect-auto md:h-96" onclick="window.app.navigate('products', 'electronics')" data-aos="fade-up" data-aos-delay="100">
                            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-8 left-8">
                                <h3 class="text-3xl font-bold text-white mb-2">Electronics</h3>
                                <p class="text-gray-300 flex items-center group-hover:text-purple-400 transition-colors">Explore <i class="ph ph-arrow-right ml-2 transition-transform group-hover:translate-x-2"></i></p>
                            </div>
                        </div>
                        <div class="group relative rounded-3xl overflow-hidden cursor-pointer aspect-square md:aspect-auto md:h-96" onclick="window.app.navigate('products', 'fashion')" data-aos="fade-up" data-aos-delay="200">
                            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-8 left-8">
                                <h3 class="text-3xl font-bold text-white mb-2">Fashion</h3>
                                <p class="text-gray-300 flex items-center group-hover:text-purple-400 transition-colors">Explore <i class="ph ph-arrow-right ml-2 transition-transform group-hover:translate-x-2"></i></p>
                            </div>
                        </div>
                        <div class="group relative rounded-3xl overflow-hidden cursor-pointer aspect-square md:aspect-auto md:h-96" onclick="window.app.navigate('products', 'home')" data-aos="fade-up" data-aos-delay="300">
                            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-8 left-8">
                                <h3 class="text-3xl font-bold text-white mb-2">Home</h3>
                                <p class="text-gray-300 flex items-center group-hover:text-purple-400 transition-colors">Explore <i class="ph ph-arrow-right ml-2 transition-transform group-hover:translate-x-2"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Featured Products -->
            <section class="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-end mb-12">
                        <div data-aos="fade-right">
                            <h2 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">Trending Now</h2>
                            <p class="text-gray-500 dark:text-gray-400 text-lg">Handpicked essentials for you.</p>
                        </div>
                        <button onclick="window.app.navigate('products')" class="hidden md:flex items-center text-purple-600 dark:text-purple-400 font-bold hover:underline" data-aos="fade-left">
                            View All <i class="ph ph-arrow-right ml-2"></i>
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        ${featuredProducts.map(p => window.ui.renderProductCard(p)).join('')}
                    </div>
                    
                    <div class="mt-12 text-center md:hidden">
                        <button onclick="window.app.navigate('products')" class="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold">
                            View All Products
                        </button>
                    </div>
                </div>
            </section>
        `;
    },

    products: (categoryFilter = 'all') => {
        // Will be hydrated via JS after render
        return `
            <div class="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-gray-950">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- Page Header -->
                    <div class="mb-12" data-aos="fade-up">
                        <h1 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">All Products</h1>
                        <p class="text-gray-500 dark:text-gray-400 text-lg">Browse our exclusive collection.</p>
                    </div>
                    
                    <!-- Filters & Search -->
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex overflow-x-auto pb-2 w-full md:w-auto space-x-2 hide-scrollbar" id="category-filters">
                            ${window.CATEGORIES.map(c => `
                                <button onclick="window.app.filterProducts('${c.id}')" data-filter="${c.id}" class="filter-btn px-4 py-2 rounded-full whitespace-nowrap font-semibold text-sm transition-colors ${c.id === categoryFilter ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-500'}">
                                    ${c.name}
                                </button>
                            `).join('')}
                        </div>
                        
                        <div class="flex space-x-4 w-full md:w-auto">
                            <div class="relative flex-grow md:w-64">
                                <i class="ph ph-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input type="text" id="search-input" placeholder="Search products..." oninput="window.app.searchProducts(this.value)" class="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                            </div>
                            <select id="sort-select" onchange="window.app.sortProducts(this.value)" class="border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    <!-- Products Grid Container -->
                    <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <!-- Loaded dynamically -->
                    </div>
                </div>
            </div>
        `;
    },

    productDetail: (id) => {
        const product = window.ECOM_DATA.find(p => p.id === id);
        if (!product) return `<div class="pt-32 text-center text-2xl dark:text-white min-h-screen">Product not found. <a href="#products" class="text-purple-500 underline">Return to shop</a></div>`;
        
        const inWishlist = window.store.wishlist.includes(product.id);

        return `
            <div class="pt-24 pb-24 min-h-screen bg-white dark:bg-gray-950">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav class="mb-8 flex text-sm text-gray-500 dark:text-gray-400" data-aos="fade-right">
                        <a href="#home" class="hover:text-purple-600">Home</a>
                        <span class="mx-2">/</span>
                        <a href="#products" class="hover:text-purple-600 capitalize">${product.category}</a>
                        <span class="mx-2">/</span>
                        <span class="text-gray-900 dark:text-gray-100 font-medium truncate">${product.name}</span>
                    </nav>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        <!-- Image Gallery -->
                        <div class="space-y-4" data-aos="fade-up">
                            <div class="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                                <img src="${product.image}" id="main-product-image" class="w-full h-full object-cover" alt="${product.name}">
                                <button onclick="window.store.toggleWishlist('${product.id}')" class="absolute top-6 right-6 p-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-sm rounded-full hover:scale-110 transition-transform">
                                    <i class="ph${inWishlist ? '-fill text-red-500' : ' text-gray-400'} ph-heart text-2xl transition-colors" id="detail-wishlist-icon"></i>
                                </button>
                            </div>
                            <!-- Thumbnails mockup -->
                            <div class="grid grid-cols-4 gap-4">
                                <img src="${product.image}" class="aspect-square w-full object-cover rounded-xl border-2 border-purple-500 cursor-pointer">
                                <div class="aspect-square w-full object-cover rounded-xl bg-gray-200 dark:bg-gray-800 cursor-not-allowed opacity-50 flex items-center justify-center text-xs">Image 2</div>
                                <div class="aspect-square w-full object-cover rounded-xl bg-gray-200 dark:bg-gray-800 cursor-not-allowed opacity-50 flex items-center justify-center text-xs">Image 3</div>
                                <div class="aspect-square w-full object-cover rounded-xl bg-gray-200 dark:bg-gray-800 cursor-not-allowed opacity-50 flex items-center justify-center text-xs">Image 4</div>
                            </div>
                        </div>

                        <!-- Product Info -->
                        <div class="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
                            <h1 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">${product.name}</h1>
                            
                            <div class="flex items-center space-x-4 mb-6">
                                <div class="flex items-center text-yellow-500">
                                    <i class="ph-fill ph-star text-lg"></i>
                                    <span class="ml-1 font-bold text-gray-700 dark:text-gray-300">${product.rating}</span>
                                </div>
                                <span class="text-gray-400">|</span>
                                <a href="#reviews" class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-purple-600 underline decoration-purple-500/30">${product.reviews} Reviews</a>
                            </div>

                            <p class="text-3xl font-black text-gray-900 dark:text-white mb-8">$${product.price.toFixed(2)}</p>
                            
                            <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                                ${product.description}
                            </p>

                            <hr class="border-gray-200 dark:border-gray-800 mb-8">

                            <div class="flex space-x-4 mb-10">
                                <!-- Quantity Mock -->
                                <div class="flex items-center border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-900 w-1/3 justify-between">
                                    <button class="text-gray-500 hover:text-purple-600"><i class="ph ph-minus"></i></button>
                                    <span class="font-bold text-gray-900 dark:text-white">1</span>
                                    <button class="text-gray-500 hover:text-purple-600"><i class="ph ph-plus"></i></button>
                                </div>
                                <button onclick="window.store.addToCart('${product.id}', 1)" class="flex-grow bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold text-lg rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all">
                                    <i class="ph-fill ph-shopping-cart-simple text-xl"></i>
                                    <span>Add to Cart</span>
                                </button>
                            </div>

                            <div class="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
                                <div class="flex items-center space-x-3"><i class="ph ph-truck text-xl"></i> <span>Free shipping on orders over $50</span></div>
                                <div class="flex items-center space-x-3"><i class="ph ph-arrow-u-up-left text-xl"></i> <span>30-days free returns</span></div>
                                <div class="flex items-center space-x-3"><i class="ph ph-shield-check text-xl"></i> <span>2 year extended warranty</span></div>
                                <div class="flex items-center space-x-3"><i class="ph ph-headphones text-xl"></i> <span>24/7 client support</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    cart: () => {
        return `
            <div class="pt-24 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-10" data-aos="fade-right">Shopping Cart</h1>
                    
                    <div class="flex flex-col lg:flex-row gap-12" id="cart-container">
                        <!-- Loaded dynamically via js/app.js -->
                    </div>
                </div>
            </div>
        `;
    },

    checkout: () => {
        const total = window.store.getCartTotal();
        if (total === 0) {
            return `<div class="pt-32 text-center text-xl dark:text-white min-h-screen">Your cart is empty. Please add items to checkout.<br><a href="#products" class="text-purple-600 font-bold mt-4 inline-block">Go back</a></div>`;
        }
        return `
            <div class="pt-24 pb-24 min-h-screen bg-white dark:bg-gray-950">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-black text-gray-900 dark:text-white mb-8">Checkout</h1>
                    
                    <div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8" data-aos="fade-up">
                        <form onsubmit="event.preventDefault(); window.ui.showToast('Order Placed Successfully!'); window.store.clearCart(); setTimeout(()=>window.app.navigate('home'), 2000);">
                            <div class="space-y-6">
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">Contact Information</h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="First Name" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <input type="text" placeholder="Last Name" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <input type="email" placeholder="Email Address" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2">
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2 mt-8">Shipping Address</h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Address Line 1" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 md:col-span-2">
                                        <input type="text" placeholder="City" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                                        <input type="text" placeholder="Postal Code" required class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-800 pb-2 mt-8">Payment (Simulation)</h3>
                                    <div class="px-4 py-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl text-purple-700 dark:text-purple-300 text-sm">
                                        <i class="ph-fill ph-info"></i> This is a simulated checkout. No real payment will be processed.
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mt-10 border-t border-gray-200 dark:border-gray-800 pt-8 flex items-center justify-between">
                                <div>
                                    <p class="text-sm text-gray-500">Total to pay</p>
                                    <p class="text-3xl font-black text-gray-900 dark:text-white">$${(total + 10).toFixed(2)}</p>
                                </div>
                                <button type="submit" class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all transform active:scale-95 shadow-md">
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    },

    auth: () => {
        return `
            <div class="pt-24 pb-24 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
                <!-- Abstract Blobs -->
                <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-500/20 blur-[100px]"></div>
                <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px]"></div>

                <div class="w-full max-w-md relative z-10" data-aos="zoom-in">
                    <div class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-800 shadow-2xl rounded-3xl p-8">
                        <div class="text-center mb-8">
                            <span class="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 tracking-tighter block mb-2">AURA</span>
                            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Please enter your details to sign in.</p>
                        </div>
                        
                        <form onsubmit="event.preventDefault(); window.ui.showToast('Login successful!'); setTimeout(()=>window.app.navigate('home'), 1000);">
                            <div class="space-y-5">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <input type="email" value="demo@aura.com" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-all">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                                    <input type="password" value="password" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white transition-all">
                                </div>
                                
                                <div class="flex items-center justify-between text-sm">
                                    <label class="flex items-center flex-row-reverse space-x-2 space-x-reverse cursor-pointer">
                                        <span class="text-gray-600 dark:text-gray-400">Remember me</span>
                                        <input type="checkbox" class="rounded text-purple-600 focus:ring-purple-500 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                                    </label>
                                    <a href="#" class="font-medium text-purple-600 hover:text-purple-500">Forgot password?</a>
                                </div>

                                <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/30 hover:-translate-y-0.5 transition-all active:scale-95">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        
                        <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                            Don't have an account? <a href="#" class="font-bold text-purple-600 hover:text-purple-500">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    about: () => {
        return `
            <div class="pt-24 pb-24 min-h-screen bg-white dark:bg-gray-950">
                <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
                    <h1 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">About Aura.</h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                        Aura was founded on a simple principle: high-quality design should be accessible, sustainable, and elevate the everyday human experience. We curate and craft products that blend form and function seamlessly.
                    </p>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" class="rounded-3xl shadow-2xl mb-16 w-full" alt="Team">
                </div>
            </div>
        `;
    },

    contact: () => {
        return `
            <div class="pt-24 pb-24 min-h-screen bg-gray-50 dark:bg-gray-950">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                    <h1 class="text-4xl font-black text-gray-900 dark:text-white mb-4 text-center">Contact Us</h1>
                    <p class="text-gray-500 dark:text-gray-400 text-center mb-12">We'd love to hear from you. Drop us a line below.</p>
                    
                    <form class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800" onsubmit="event.preventDefault(); window.ui.showToast('Message sent!'); this.reset();">
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input type="text" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" placeholder="John Doe">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input type="email" required class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" placeholder="john@example.com">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                <textarea required rows="5" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-4 rounded-xl shadow-md hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-all transform active:scale-95">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }
};
