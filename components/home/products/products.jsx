import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './products.style'
import { useRouter } from 'expo-router'
import {COLORS} from '../../../constants'
import ProductsCard from '../../common/cards/products/productsCard'
import useFetch from '../../../hook/useFetch'

const Products = () => {
    const router = useRouter();
    const {data, error, isLoading} = useFetch('products');
    

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recommended</Text>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors />)
          : (data.products?.map((product) => (
            <ProductsCard 
              product={product}
              key={`${product?.id}`}
              handleNavigate={() => router.push(`/productInfo/${product.id}`)}
            />
            )

          ))
        }
      </View>
    </View>
  )
}

export default Products