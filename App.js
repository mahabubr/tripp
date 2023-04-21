import { NavigationContainer } from '@react-navigation/native';
import LoginRouter from './router/LoginRouter/LoginRouter';

export default function App() {
  return (
    <NavigationContainer>
      <LoginRouter />
    </NavigationContainer>
  );
}