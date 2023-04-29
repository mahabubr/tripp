import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Review } from "../../../../pages/Home/BottomTab";

const Stack = createNativeStackNavigator();

const ReviewRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Review'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Review'
				component={Review}
			/>
		</Stack.Navigator>
	);
};

export default ReviewRouter;
