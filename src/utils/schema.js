export const generateProductSchema = item => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: item?.title,
  image: [item?.picture],
  description: item.description,
  offers: {
    '@type': 'Offer',
    priceCurrency: item?.price?.currency,
    price: `${item?.price?.amount}${item?.price?.decimals ? `.${item.price.decimals}` : ''}`,
    itemCondition: `https://schema.org/${item?.condition}Condition`
  }
});
