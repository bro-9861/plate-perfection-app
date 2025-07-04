
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lovable.foodhub',
  appName: 'FoodHub Restaurant App',
  webDir: 'dist',
  server: {
    url: "https://914481d6-abb3-445b-be47-c2b597089e5e.lovableproject.com?forceHideBadge=true",
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#ff6b35",
      showSpinner: false
    }
  }
};

export default config;
