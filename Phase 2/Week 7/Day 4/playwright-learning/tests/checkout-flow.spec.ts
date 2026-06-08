import { test, expect } from "@playwright/test";

test.describe("SauceDemo Complete Checkout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    const loginBtn = page.locator("#login-button");
    await loginBtn.click();
    await expect(page).toHaveURL(/inventory/i);
  });

  test("Add single product to cart and verify cart count", async ({ page }) => {
    // Product selection and adding to cart
    await page
      .locator(".inventory_list > .inventory_item")
      .filter({ hasText: "Sauce Labs Backpack" })
      .getByRole("button", { name: "Add to cart" })
      .click();
    // Verify Cart Count
    await expect(page.locator(".shopping_cart_link > span")).toHaveText("1");
  });

  test("add multiple prducts and verify cart", async ({ page }) => {
    // Add Multiple Products
    const fetchProduct = page.locator(".inventory_list > .inventory_item");
    const productCount = await fetchProduct.count();
    for (let i = 0; i < productCount; i++) {
      const product = fetchProduct
        .nth(i)
        .getByRole("button", { name: "Add to cart" });
      await product.click();
    }
    await expect(page.locator(".shopping_cart_link > span")).toHaveText("6");
  });
  test("sort products by price low to high", async ({ page }) => {
    const sortDropdown = page.locator(".product_sort_container");
    await sortDropdown.selectOption({ label: "Price (low to high)" });
    // In this command I am getting all the prices of the products from ascending order and storing them in an array
    const inventoryPrice = await page
      .locator(".inventory_item_price")
      .allInnerTexts();
    // Take each value remove dollar sign and convert string into number
    const priceArray = inventoryPrice.map((price) =>
      parseFloat(price.replace("$", "")),
    );
    // check is it in the ascending order or not
    const checkValues = priceArray.every((price, index) => {
      return index === 0 || price >= priceArray[index - 1];
    });
    expect(checkValues).toBeTruthy();
  });
  test("complete full checkout flow end to end", async ({ page }) => {
    // You are on the right page
    await expect(page).toHaveURL(/inventory/i);

    // We look for the product from it's name
    const selectedProduct = page.locator('.inventory_list > .inventory_item').filter({hasText: 'Sauce Labs Backpack'});

    //Extract the name of the product 
    const productName = await selectedProduct.locator('.inventory_item_name').innerText();
    
    // After choosing product we are looking for Add to cart button
    const addCart = selectedProduct.getByRole('button',{name : 'Add to cart'});
    await addCart.click();

    // Now we have to verify that we added one item in the cart but before that we have to target cart
    const cartBridge = page.locator('.shopping_cart_badge');
    await expect(cartBridge).toHaveText('1');

    // Now verify whatever we choose is added in the cart 
    await cartBridge.click();

    // Product Name which is in the cart
    const cartproductName = await page.locator('.cart_item .inventory_item_name').innerText();
    

    expect(productName).toBe(cartproductName);

    // Look for checkout button
    await page.getByRole('button',{name : 'Checkout'}).click();

    // Look in the URL for this specified words
    await expect(page).toHaveURL(/checkout-step-one/i);

    // fill form for delivery
    await page.getByPlaceholder('First Name').fill('Bedi');
    await page.getByPlaceholder('Last Name').fill('Gupta');
    await page.locator('[data-test="postalCode"]').pressSequentially('274001',{delay:100});
    await page.getByRole('button',{name : 'Continue'}).click()

    await expect(page).toHaveURL(/checkout-step-two/i);

    await page.getByRole('button',{name:'Finish'}).click()

    await expect(page.getByRole('heading',{name : 'Thank you for your order!'})).toBeVisible();
  });

  test('remove product from cart',async ({page})=>{

    await expect(page).toHaveURL(/inventory/i);

    const productItems = page.locator('.inventory_list .inventory_item').filter({hasText:'Sauce Labs Bike Light'}).getByRole('button',{name:'Add to cart'});
    await productItems.click();

    const shoppingCart = page.locator('.shopping_cart_link span');
    await expect(shoppingCart).toHaveText('1');

    await shoppingCart.click();

    await page.getByRole('button',{name:'Remove'}).click();

    await expect(shoppingCart).toBeHidden();
  })

  test('continue shopping from cart return to inventory',async({page})=>{

    await expect(page).toHaveURL(/inventory/i);

    const productItems = page.locator('.inventory_list .inventory_item').filter({hasText: 'Sauce Labs Bike Light'}).getByRole('button',{name:'Add to cart'});
    await productItems.click();

    const shoppingCart = page.locator('.shopping_cart_container');
    await expect(shoppingCart).toHaveText('1');

    await shoppingCart.click()

    await expect(page).toHaveURL(/cart/i);

    await page.getByRole('button',{name: 'Remove'}).click()

    await expect(shoppingCart).toBeEmpty();

    await page.getByRole('button',{name: 'Continue Shopping'}).click();

    await expect(page).toHaveURL(/inventory/i);
  })

  test('checkout fail with empty firstname',async({page})=>{

    await expect(page).toHaveURL(/inventory/i);

    const choosingProduct = page.locator('.inventory_list .inventory_item').filter({hasText: 'Sauce Labs Bike Light'}).getByRole('button',{name: 'Add to cart'})
    await choosingProduct.click();

    const shoppingCart = page.locator('.shopping_cart_container');
    await expect(shoppingCart).toHaveText('1');
    await shoppingCart.click();

    const inventoryItem = page.locator('.cart_item .cart_quantity');
    await expect(inventoryItem).toHaveText('1');

    await page.getByRole('button',{name: 'Checkout'}).click();

    await page.getByPlaceholder('First Name').fill('');
    await page.getByPlaceholder('Last Name').fill('Gupta');
    await page.getByPlaceholder('Zip/Postal Code').fill('274001');
    await page.getByRole('button',{name:'Continue'}).click();
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: First Name is required') ;
  })
});
