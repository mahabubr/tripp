import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	SlashWelcome,
	WelcomeFirst,
	WelcomeSecond,
	WelcomeThird,
	WelcomeFourth,
} from "../../../pages/Login/Welcome";

const Stack = createNativeStackNavigator();

const WelcomeRouter = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				// contentStyle: {
				// 	paddingVertical: 50,
				// 	paddingHorizontal: 40,
				// },
			}}
			initialRouteName='SlashWelcome'>
			<Stack.Screen
				name='SlashWelcome'
				component={SlashWelcome}
			/>
			<Stack.Screen
				name='WelcomeFirst'
				component={WelcomeFirst}
			/>
			<Stack.Screen
				name='WelcomeSecond'
				component={WelcomeSecond}
			/>
			<Stack.Screen
				name='WelcomeThird'
				component={WelcomeThird}
			/>
			<Stack.Screen
				name='WelcomeFourth'
				component={WelcomeFourth}
			/>
		</Stack.Navigator>
	);
};

export default WelcomeRouter;
