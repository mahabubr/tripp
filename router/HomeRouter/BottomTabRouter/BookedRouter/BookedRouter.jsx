import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Booked } from "../../../../pages/Home/BottomTab";

const Stack = createNativeStackNavigator();

const BookedRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Booked'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
					paddingVertical: 40,
					paddingHorizontal: 30,
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Booked'
				component={Booked}
			/>
		</Stack.Navigator>
	);
};

export default BookedRouter;
