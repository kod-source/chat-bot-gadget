import { Product } from 'lib/api/Entity/Product';

export const detailUrl = (product: Product): string => {
  const name = product.name
  if (name.includes('iPad')) {
    return `/ipad/${product.id}`;
  } else if (name.includes('iPhone')) {
    return `/iphone/${product.id}`;
  } else if (name.includes('Mac')) {
    return `/mac/${product.id}`;
  } else {
    return '';
  }
};
