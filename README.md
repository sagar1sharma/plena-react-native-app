
## Features included/supported as per task list

### Home Screen
- Displays a list of products from a dummy API in card format as per Figma design.
- Provides options for adding items to the cart or wishlist.
- Shows product details like thumbnail, price, title, and brand.
- Supports clickable footer routes (not linked currently).

### Product Details Screen
- Displays specific product details such as title, price, description, images, etc.
- Shows multiple product images in a carousel.
- Includes Back and Cart buttons to navigate to respective pages.
- Allows adding the product to the cart, automatically redirecting the user to the cart where they can adjust the quantity for the specific product.
- Provides an option to "Buy Now," although it is not currently linked.
- Offers an option to wishlist the item.

### Cart Screen
- Displays the products added to the cart.
- Allows users to increase or decrease the quantity of products.
- Features an animation when an item is removed from the cart.
- Shows subtotal, total, and delivery price details.

### Miscellaneous
- Optimized API calls by creating a custom hook `useFetch`, enabling data reusability and reducing server API calls.
- Implements cart and wishlist functionalities using Redux state management.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
