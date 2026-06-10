import {test, expect} from '../fixtures/customFixtures';
import {users,products} from '../utils/testData';

test('@smoke add backlight to cart',async({loggedInPage})=>{
    await loggedInPage.addProductsToCart(products.bikeLight);
    await loggedInPage.cartCount(1);
});
test('@smoke add two product and verify count',async({loggedInPage})=>{
    await loggedInPage.addProductsToCart(products.backpack);
    await loggedInPage.addProductsToCart(products.tshirt);
    await loggedInPage.cartCount(2)
})

test('@regression cart has correct item after adding',async({cartPage})=>{
    await cartPage.assertItemCount(1);
    await cartPage.assertItemInCart(products.backpack);
})

test('@regression ficheckout form is visible at step one',async({checkoutPage})=>{
    await checkoutPage.OnCheckoutStepOne();
})