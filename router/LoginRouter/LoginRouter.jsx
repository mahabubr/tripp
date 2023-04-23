import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	ForgetPassword,
	Login,
	SelectLanguage,
	SignUp,
} from "../../pages/Login/Auth";
import WelcomeRouter from "./WelcomeRouter/WelcomeRouter";

const Stack = createNativeStackNavigator();

const LoginRouter = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: {
					// paddingVertical: 50,
					// paddingHorizontal: 40,
					backgroundColor: "#ffffff",
				},
			}}
			// initialRouteName='WelcomeRouter'
		>
			<Stack.Screen
				name='Login'
				component={Login}
			/>
			<Stack.Screen
				name='SignUp'
				component={SignUp}
			/>
			<Stack.Screen
				name='ForgetPassword'
				component={ForgetPassword}
			/>
			<Stack.Screen
				name='SelectLanguage'
				component={SelectLanguage}
			/>
			{/* <Stack.Screen
				name='WelcomeRouter'
				component={WelcomeRouter}
			/> */}
		</Stack.Navigator>
	);
};

export default LoginRouter;