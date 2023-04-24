import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../../../pages/Home/BottomTab";
import { Airport } from "../../../../pages/Home/BottomTab/Home/Category";

const Stack = createNativeStackNavigator();

const ScreenHomeRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Airport'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='Airport'
				component={Airport}
			/>
		</Stack.Navigator>
	);
};

export default ScreenHomeRouter;
