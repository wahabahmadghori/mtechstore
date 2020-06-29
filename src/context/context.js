import React, { Component } from 'react'
import {linkData} from './linkData'
import {socialIcons} from './socialIcons'
import items from './productData'
import {client} from './contenful'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state={
        sideBarOpen:false,
        cartOpen:false,
        cartItems:1,
        links:linkData,
        socialIcons:socialIcons,
        cart:[],
        cartSubTotal:0,
        cartTotal:0,
        cartTax:0,
        storeProducts:[],
        featuredProducts:[],
        filteredProducts:[],
        singleProduct:{},
        loading:false,
        search:'',
        price:0,
        min:0,
        max:0,
        company:'all',
        shipping:false
    }

    componentDidMount(){

        client.getEntries({
            content_type:'techStore'
        }).then((res)=>{
            this.setProducts(res.items)
            console.log(res.items)
        }).catch(console.error)

        
       // console.log(items)
    }

    setProducts=products=>{
        let storeProducts = products.map(item=>{
            const {id} = item.sys
            const image=item.fields.image.fields.file.url
            const product = {id,...item.fields,image}
            return product
        })
        let featuredProducts = storeProducts.filter(item=>item.featured===true)
        
        let tempMax = Math.max(...storeProducts.map(item=>item.price))
        let tempMin = Math.min(...storeProducts.map(item=>item.price))

        this.setState({
            storeProducts,
            filteredProducts:storeProducts,
            featuredProducts,
            cart:this.getStorageCart(),
            singleProduct:this.getStorageProduct(),
            loading:false,
            max:tempMax,
            min:tempMin,
            price:tempMax
        },()=>{
            this.addTotals()
        })
    }

    // Handle Filtering 
    hangleChange=(event)=>{
        const name = event.target.name
        const value = event.target.type==='checkbox'?event.target.checked:event.target.value
        console.log(`Name: ${name} Value: ${value}`)
        this.setState({
            [name]:value
        },this.sortData)
    }

    sortData = ()=>{
        console.log('Data has been sorted...')
        const {search,price,company,shipping,storeProducts,filteredProducts} = this.state
        let tempProducts= [...storeProducts]
        tempProducts=tempProducts.filter(item=>item.price<=price)
        if(company!=='all'){
             tempProducts=tempProducts.filter(item=>item.company===company)
        }
        if(shipping){
            tempProducts=tempProducts.filter(item=>item.freeshipping===true)
        }
        if(search.length>0){
            tempProducts=tempProducts.filter(item=>{
                const tempSearch = search.toLowerCase()
                const tempTitle = item.title.toLowerCase().slice(0,search.length)
                if(tempSearch===tempTitle){
                    return item
                }
            })
        }

        this.setState({
            filteredProducts:tempProducts
        })
    }

    getStorageCart=()=>{
        let cart=[]
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'))
        }
        return cart
    }
    getStorageProduct=()=>{
        return localStorage.getItem('singleProduct')?JSON.parse(localStorage.getItem('singleProduct')):{}
    }
    getTotals=()=>{
        let tempSubTotal=0
        let tempCount=0
        this.state.cart.forEach(item=>{
            tempSubTotal+=item.total
            tempCount+=item.count
        })
        let tax = tempSubTotal * 0.2;
        tax = parseInt(tax.toFixed(2))
        let total = tempSubTotal + tax
        return{
            tempSubTotal,
            tempCount,
            tax,
            total
        }

    }
    addTotals=()=>{
        const item = this.getTotals()
        this.setState({
            cartItems:item.tempCount,
            cartSubTotal:item.tempSubTotal,
            cartTax:item.tax,
            cartTotal:item.total
        })
    }

    syncStorage=()=>{
        localStorage.setItem('cart',JSON.stringify(this.state.cart))
    }

    addToCart=(id)=>{
        let tempCart = [...this.state.cart]
        let tempProducts = [...this.state.storeProducts]
        let tempCartItem=tempCart.find(product=>product.id==id)
        if(!tempCartItem){
            tempCartItem=tempProducts.find(product=>product.id===id)
            let total = tempCartItem.price
            tempCartItem={...tempCartItem,count:1,total}
            tempCart=[...tempCart,tempCartItem]
        }else{
            tempCartItem.count++
            tempCartItem.total = tempCartItem.price * tempCartItem.count
            tempCartItem.total = parseFloat(tempCartItem.total.toFixed(2))
        }
        this.setState(()=>{
            return {cart:tempCart}
        },()=>{
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
    }
    setSingleProduct=(id)=>{
        let tempSingleProduct = this.state.storeProducts.find(item=>item.id===id)
        this.setState({
            singleProduct:tempSingleProduct
        })
        localStorage.setItem('singleProduct',JSON.stringify(tempSingleProduct))
    }
    
    handleSideBar=()=>{
        this.setState({
            sideBarOpen:!this.state.sideBarOpen
        })
    }
    handleCart=()=>{
        this.setState({
            cartOpen:!this.state.cartOpen
        })
    }
    openCart=()=>{
        this.setState({
            cartOpen:true
        })
    }
    closeCart=()=>{
        this.setState({
            cartOpen:false
        })
    }


    //Cart Page Function
    // Increment Item
    increment=(id)=>{
        const tempCart = [...this.state.cart]
        const cartItem = tempCart.find(item=>item.id===id)
        cartItem.count += 1
        cartItem.total = cartItem.price * cartItem.count
        cartItem.total = parseFloat(cartItem.total.toFixed(2))
        this.setState(()=>{
            return {cart:tempCart}
        },()=>{
            this.addTotals()
            this.syncStorage()
        })
    }
    // Decrement Item
    decrement=(id)=>{
        const tempCart = [...this.state.cart]
        const cartItem = tempCart.find(item=>item.id===id)
        if(cartItem.count===1){
            return this.removeItem(id)
        }
        cartItem.count -= 1
        cartItem.total = cartItem.price * cartItem.count
        cartItem.total = parseFloat(cartItem.total.toFixed(2))
        this.setState(()=>{
            return {cart:tempCart}
        },()=>{
            this.addTotals()
            this.syncStorage()
        })
    }
    // Remove Item
    removeItem=(id)=>{
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(item=>item.id !== id)
        this.setState({
            cart:[...tempCart]
        },()=>{
            this.syncStorage()
            this.addTotals()
        })
    }
    // Clear Cart
    clearCart=()=>{
        console.log('awesome you just cleared...')
        this.setState({
            cart:[]
        },()=>{
            this.syncStorage()
            this.addTotals()
        })
    }



    render() {
        return (
            <ProductContext.Provider value={{...this.state,
            handleCart:this.handleCart,
            openCart:this.openCart,
            closeCart:this.closeCart,
            handleSideBar:this.handleSideBar,
            addToCart:this.addToCart,
            setSingleProduct:this.setSingleProduct,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart,
            handleChange:this.hangleChange,
            sortData:this.sortData
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export{
    ProductProvider,
    ProductConsumer
}