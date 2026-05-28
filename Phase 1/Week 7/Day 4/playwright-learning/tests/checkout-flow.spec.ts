import { test, expect } from "@playwright/test";

test.describe("SauceDemo Complete Checkout flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    const loginBtn = page.locator("#login-button");
    await loginBtn.click();
    await expect(page).toHaveURL(/inventory/i);
    console.log("Now you are logged in and in the inventory page");
  });

  test("Add single product to cart and verify cart count", async ({ page }) => {
    // Product selection and adding to cart
    await page.locator(".inventory_list > .inventory_item").filter({ hasText: "Sauce Labs Backpack" }).getByRole("button", { name: "Add to cart" }).click();
    // Verify Cart Count
    await expect(page.locator(".shopping_cart_link > span")).toHaveText("1");
  });

  test('add multiple prducts and verify cart',async({page})=>{
    // Add Multiple Products
    const fetchProduct = page.locator('.inventory_list > .inventory_item');
    const productCount = await fetchProduct.count();
    for (let i = 0; i < productCount;i++){
      const product = fetchProduct.nth(i).getByRole('button',{name: 'Add to cart'});
      await product.click();
    }
    await expect(page.locator(".shopping_cart_link > span")).toHaveText("6");
  })
  test('sort products by price low to high',async({page})=>{
    const sortDropdown = page.locator('.product_sort_container');
    await sortDropdown.selectOption({label:'Price (low to high)'})
    // In this command I am getting all the prices of the products from ascending order and storing them in an array
    const inventoryPrice = await page.locator('.inventory_item_price').allInnerTexts();
    // Take each value remove dollar sign and convert string into number
    const priceArray = inventoryPrice.map(price => parseFloat(price.replace('$', '')));
    // check is it in the ascending order or not
    const checkValues = priceArray.every((price, index) => {
      return index === 0 || price >= priceArray[index - 1];
    });
    expect(checkValues).toBeTruthy();
    })
});
