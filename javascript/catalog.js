var app = new Vue({
    el: '#app',
    data: {
        brand: 'Koi',
        product: 'Bubble Tea',
        inStock: true,
        selectedProduct: 0,
        products: [
            {
                productId: 1000,
                productFlavor: 'taro',
                productColor: 'purple'
            },
            {
                productId: 1001,
                productFlavor: 'c',
                productColor: blue
            }
        ]
    },
    methods: {

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})

Vue.component('product', {
    template: 
})