import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../../../pages/Home/BottomTab";
import { SelectLanguage } from "../../../../pages/Login/Auth";

const Stack = createNativeStackNavigator();

const ProfileRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='SelectLanguage'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",

				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='SelectLanguage'
				component={SelectLanguage}
			/>
			<Stack.Screen
				name='Profile'
				component={Profile}
			/>
		</Stack.Navigator>
	);
};

export default ProfileRouter;
