import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../../../pages/Home/BottomTab";

const Stack = createNativeStackNavigator();

const ScreenHomeRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
					paddingVertical: 40,
					paddingHorizontal: 30,
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Home'
				component={Home}
			/>
		</Stack.Navigator>
	);
};

export default ScreenHomeRouter;