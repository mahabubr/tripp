import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	ForgetPassword,
	Login,
	NewPassword,
	SelectLanguage,
	SignUp,
	UserInfo,
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
			initialRouteName='SelectLanguage'>
			<Stack.Screen
				name='WelcomeRouter'
				component={WelcomeRouter}
			/>
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
				name='NewPassword'
				component={NewPassword}
			/>
			<Stack.Screen
				name='SelectLanguage'
				component={SelectLanguage}
			/>
			{/* <Stack.Screen
				name='UserInfo'
				component={UserInfo}
			/> */}
		</Stack.Navigator>
	);
};

export default LoginRouter;
