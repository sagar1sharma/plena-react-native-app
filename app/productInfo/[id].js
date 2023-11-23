import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
} from "react-native";

import {
  ScreenHeaderBtn,
} from "../../components";
import Product from "../../components/productdetails/productInfo/productInfo";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import { TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const ProductPage = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch(`products/${params.id}`);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch()
    setRefreshing(false)
  }, []);

  return (
    <Provider store={store}>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <TouchableOpacity style={{backgroundColor: "black"}} onPress={() => router.push('/cart/cartProvider')}>
              <Image source={icons.cart} style={{height: 18, width: 16}} />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Product
                data={data}
              />

              
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
    </Provider>
  );
};

export default ProductPage;