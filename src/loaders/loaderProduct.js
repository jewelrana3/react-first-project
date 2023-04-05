import { getShoppingCart } from "../utilities/fakedb";

const loaderProduct=async()=>{
    const addLoader = await fetch('products.json');
    const products = await addLoader.json();
    // console.log(cart);
   

const shoppingCart = getShoppingCart();
const saveCart = [];
for(const id in shoppingCart){
    const addCart = products.find(pd => pd.id === id);
    if(addCart){
        const quantity = shoppingCart[id];
        addCart.quantity = quantity;
        saveCart.push(addCart)
    }
    
}
return saveCart;
}
export default loaderProduct;