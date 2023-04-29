import { NavigationContainer } from '@react-navigation/native';
import LoginRouter from './router/LoginRouter/LoginRouter';
import { CLERK_PUBLISHABLE_KEY } from "@env"
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import HomeRouter from './router/HomeRouter/HomeRouter';
import tokenCache from './clerk/tokenCache';
import { Provider } from 'react-redux';
import store from './redux/app/store';

import 'react-native-gesture-handler';

export default function App() {

  return (
    <Provider store={store}>
      <ClerkProvider tokenCache={tokenCache} publishableKey={CLERK_PUBLISHABLE_KEY}>
        <NavigationContainer>
          <SignedIn>
            <HomeRouter />
          </SignedIn>
          <SignedOut>
            <LoginRouter />
          </SignedOut>
        </NavigationContainer>
      </ClerkProvider>
    </Provider>
  );
}