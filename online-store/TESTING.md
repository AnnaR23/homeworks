# Manual Testing Report – "Online Store" Project

## 📌 Project Description

This is a React-based educational e-commerce application with basic shopping functionality.

### Key Features:
- Product catalog with filtering (category, price, title)
- Product detail view
- Shopping cart with item management
- Cart state saved in LocalStorage
- Automatic cart reset after 5 minutes of inactivity
- Toast notifications for user actions
- Graph showing total cart cost

---

## ✅ Test Cases

---

### Test Case 1: Product Filtering

- **Objective:** Verify that product filtering works correctly by category, price, and title.
- **Steps:**
    1. Open the homepage.
    2. Apply various filters.
- **Expected Result:** Only relevant products are shown.
- **Actual Result:** ✅ Matches expected behavior.

---

### Test Case 2: Product Detail View

- **Objective:** Verify navigation to the product detail page.
- **Steps:** Click on any product card.
- **Expected Result:** The product detail page opens with full information.
- **Actual Result:** ✅ Matches expected behavior.

---

### Test Case 3: Cart Functionality

- **Objective:** Verify adding, removing, and changing item quantity in the cart.
- **Steps:**
    1. Add several items to the cart.
    2. Open the cart.
    3. Modify quantity or remove items.
- **Expected Result:** Cart reflects accurate items, quantities, and totals.
- **Actual Result:** ✅ Matches expected behavior.

---

### Test Case 4: LocalStorage Cart Persistence

- **Objective:** Ensure the cart state is saved in LocalStorage and restored after page reload.
- **Steps:**
    1. Add items to the cart.
    2. Reload the page.
    3. Check the cart contents.
- **Expected Result:** Cart items remain after reload.
- **Actual Result:** ✅ Matches expected behavior.

---

### Test Case 5: Auto-Clear Cart After Inactivity

- **Objective:** Verify that the cart resets after 5 minutes of user inactivity.
- **Steps:**
    1. Add items to the cart.
    2. Do not interact with the site for 5 minutes.
    3. Wait for a warning notification.
    4. Do not cancel it.
- **Expected Result:** Cart is cleared after timeout.
- **Actual Result:** ✅ Matches expected behavior.

---

### Test Case 6: Notification on Add to Cart

- **Objective:** Verify that a notification appears when adding an item to the cart.
- **Steps:**
    1. Click "Add to Cart" on any product.
- **Expected Result:** A toast notification appears.
- **Actual Result:** ✅ Matches expected behavior.

---

## 📌 Known Issue

### Missing Checkout Functionality

- **Description:**  
  The "Checkout" button currently has no functionality implemented.
- **Current Behavior:**  
  Clicking the button does not trigger any action.
- **Expected Behavior (for future implementation):**
    - Redirect to a checkout page
    - Order confirmation process
- **Comment:**  
  This is an educational project. Checkout logic will be added in future development stages.

---

## 🧰 Testing Environment

- **Method:** Manual testing
- **Browser:** Google Chrome
- **OS:** Windows 11
- **Tools:** DevTools, LocalStorage, timer
- **Test Date:** October 2025
