import { View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES} from '../constants';
import {Products, Banner, ScreenHeaderBtn, Welcome} from '../components';
import Footer from "../components/home/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Home = () => {
    const route = useRouter();

    return(
        <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.main},
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, padding: SIZES.medium, backgroundColor: COLORS.main}}>
                    <Welcome />
                </View>
                <View style={{flex: 1, padding: SIZES.medium, backgroundColor: COLORS.lightWhite}}>
                        {/* <Banner /> */}
                        <Products />   
                    </View>
            </ScrollView>

            <Footer />
        </SafeAreaView>
        </Provider>
    )
}

export default Home;