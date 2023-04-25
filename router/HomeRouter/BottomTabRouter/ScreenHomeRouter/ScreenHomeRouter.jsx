import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../../../pages/Home/BottomTab";
import {
	Airport,
	AirportSingleItem,
} from "../../../../pages/Home/BottomTab/Home/Category";

const Stack = createNativeStackNavigator();

const ScreenHomeRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
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
			<Stack.Screen
				name='AirportSingleItem'
				component={AirportSingleItem}
			/>
		</Stack.Navigator>
	);
};

export default ScreenHomeRouter;
