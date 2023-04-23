import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ReviewRouter from "./BottomTabRouter/ReviewRouter/ReviewRouter";
import MessageRouter from "./BottomTabRouter/MessageRouter/MessageRouter";
import BookedRouter from "./BottomTabRouter/BookedRouter/BookedRouter";
import ProfileRouter from "./BottomTabRouter/ProfileRouter/ProfileRouter";
import ScreenHomeRouter from "./BottomTabRouter/ScreenHomeRouter/ScreenHomeRouter";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../../constants/colors";

const Tab = createBottomTabNavigator();

const HomeRouter = () => {
	return (
		<Tab.Navigator
			initialRouteName='ScreenHomeRouter'
			screenOptions={{
				headerShown: false,
				tabBarLabel: "",
			}}>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name='home'
								color={colors.primary}
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								name='home-outline'
								color={colors.primary}
								size={size}
							/>
						),
				}}
				name='ScreenHomeRouter'
				component={ScreenHomeRouter}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name='page-previous'
								color={colors.primary}
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								name='page-previous-outline'
								color={colors.primary}
								size={size}
							/>
						),
				}}
				name='ReviewRouter'
				component={ReviewRouter}
			/>
			<Tab.Screen
				name='MessageRouter'
				options={{
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name='message-flash'
								color={colors.primary}
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								name='message-flash-outline'
								color={colors.primary}
								size={size}
							/>
						),
				}}
				component={MessageRouter}
			/>
			<Tab.Screen
				name='BookedRouter'
				options={{
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name='cart'
								color={colors.primary}
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								name='cart-outline'
								color={colors.primary}
								size={size}
							/>
						),
				}}
				component={BookedRouter}
			/>
			<Tab.Screen
				name='ProfileRouter'
				options={{
					tabBarIcon: ({ color, size, focused }) =>
						focused ? (
							<MaterialCommunityIcons
								name='account-convert'
								color={colors.primary}
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								name='account-convert-outline'
								color={colors.primary}
								size={size}
							/>
						),
				}}
				component={ProfileRouter}
			/>
		</Tab.Navigator>
	);
};

export default HomeRouter;
