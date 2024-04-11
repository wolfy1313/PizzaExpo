import { View } from 'react-native';
import ProductListItem from '@/src/components/ProductListItem';
import products from '@/assets/data/products';
import { Product } from '@/src/types';


export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  )
}
