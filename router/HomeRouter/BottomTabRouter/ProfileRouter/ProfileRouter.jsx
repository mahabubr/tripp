import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../../../pages/Home/BottomTab";

const Stack = createNativeStackNavigator();

const ProfileRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Profile'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
					paddingVertical: 40,
					paddingHorizontal: 30,
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Profile'
				component={Profile}
			/>
		</Stack.Navigator>
	);
};

export default ProfileRouter;
