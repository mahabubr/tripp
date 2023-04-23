import { NavigationContainer } from '@react-navigation/native';
import LoginRouter from './router/LoginRouter/LoginRouter';
import { CLERK_PUBLISHABLE_KEY } from "@env"
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import HomeRouter from './router/HomeRouter/HomeRouter';
import tokenCache from './clerk/tokenCache';

export default function App() {

  return (
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
  );
}