import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Message } from "../../../../pages/Home/BottomTab";

const Stack = createNativeStackNavigator();

const MessageRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Message'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
					paddingVertical: 40,
					paddingHorizontal: 30,
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Message'
				component={Message}
			/>
		</Stack.Navigator>
	);
};

export default MessageRouter;
