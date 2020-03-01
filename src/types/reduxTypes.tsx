export interface ProductListType {
  id: number,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  decimals: number,
  condition: string,
  freeShipping: boolean,
  picture: string
}

export interface productDetailType extends ProductListType {
  soldQuantity: number,
  description: string
}