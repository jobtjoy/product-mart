import { CartItem } from './cart-item';

export interface CartState {
  cartItems: CartItem[];
}

export const intialState = { cartItems: [] };
