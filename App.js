import { NavigationContainer } from '@react-navigation/native';
import LoginRouter from './router/LoginRouter/LoginRouter';
import { CLERK_PUBLISHABLE_KEY } from "@env"
import { ClerkProvider } from '@clerk/clerk-expo';

export default function App() {

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <NavigationContainer>
        <LoginRouter />
      </NavigationContainer>
    </ClerkProvider>
  );
}