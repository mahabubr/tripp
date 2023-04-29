import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Message } from "../../../../pages/Home/BottomTab";
import PersonMessage from "../../../../pages/Home/BottomTab/Message/PersonMessage/PersonMessage";

const Stack = createNativeStackNavigator();

const MessageRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Message'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
					paddingVertical: 40,
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Message'
				component={Message}
			/>
			<Stack.Screen
				name='PersonMessage'
				component={PersonMessage}
			/>
		</Stack.Navigator>
	);
};

export default MessageRouter;
