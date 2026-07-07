import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

interface PaymentInfo {
  cardName: string;
  cardNumber: string;
  cvcNo: string;
  month: string;
  year: string;
}

export class PaymentPage extends BasePage {
  private readonly continueBtn = this.page.getByRole("button", {
    name: "Continue Shopping",
  });
  private readonly addToCartBtn = this.page.getByRole("button", {
    name: "Add to cart",
    exact: false,
  });
  private readonly viewProductBtn = this.page.getByRole("link", {
    name: "View Product",
    exact: false,
  });
  private readonly nameOnCard = this.page.locator('[data-qa="name-on-card"]');
  private readonly buttonContinue = this.page.locator(
    '[data-qa="continue-button"]',
  );
  private readonly downloadInvoiceButton = this.page.getByRole("link", {
    name: "Download Invoice",
  });
  private readonly orderSuccessMessage = this.page.getByText("Order Placed");
  private readonly cardNumberInput = this.page.locator(
    '[data-qa="card-number"]',
  );
  private readonly cvcInput = this.page.getByPlaceholder("ex. 311");
  private readonly monthInput = this.page.getByPlaceholder("MM");
  private readonly yearInput = this.page.getByPlaceholder("YYYY");
  private readonly payButton = this.page.getByRole("button", {
    name: "Pay and Confirm Order",
  });
  constructor(page: Page) {
    super(page);
  }

  async fillPaymentDetails(paymentInfo: PaymentInfo): Promise<void> {
    expect(this.page).toHaveURL(/payment/i);
    await this.nameOnCard.fill(paymentInfo.cardName);
    await this.cardNumberInput.fill(paymentInfo.cardNumber);
    await this.cvcInput.fill(paymentInfo.cvcNo);
    await this.monthInput.fill(paymentInfo.month);
    await this.yearInput.fill(paymentInfo.year);
    await this.payButton.click();
  }

  async verifyOrderSuccess(): Promise<void> {
    await expect(this.orderSuccessMessage).toBeVisible();
    await expect(this.downloadInvoiceButton).toBeVisible();
  }

  async downloadInvoice(): Promise<void> {
    const downloadPromise = this.page.waitForEvent("download");
    await this.downloadInvoiceButton.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBeTruthy();
    await download.cancel();
  }

  async continueButton(): Promise<void> {
    await this.buttonContinue.click();
  }
}
