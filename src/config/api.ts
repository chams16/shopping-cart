import { environment } from '../environments/environment';

export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'

export const productlistUrl = baseUrl + '/products'

export const detaillistUrl = baseUrl + '/products/'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
export const userurl = baseUrl + '/user'