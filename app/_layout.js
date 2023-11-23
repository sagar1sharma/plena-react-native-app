import React, { useCallback } from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
  
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/manrope.bold.otf'),
    DMMedium: require('../assets/fonts/manrope.medium.otf'),
    DMRegular: require('../assets/fonts/manrope.regular.otf')
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded)  return null;

  return (
    <Stack onLayout={onLayoutRootView} />
  )
}

export default Layout;
