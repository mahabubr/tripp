import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../../../pages/Home/BottomTab";
import {
	Airport,
	AirportSingleItem,
	Guide,
	Hotel,
	HotelSingleItem,
	Taxi,
	TaxiSingleItem,
} from "../../../../pages/Home/BottomTab/Home/Category";

const Stack = createNativeStackNavigator();

const ScreenHomeRouter = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				contentStyle: {
					backgroundColor: "white",
				},
				headerShown: false,
			}}>
			<Stack.Screen
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='Airport'
				component={Airport}
			/>
			<Stack.Screen
				name='AirportSingleItem'
				component={AirportSingleItem}
			/>
			<Stack.Screen
				name='Taxi'
				component={Taxi}
			/>
			<Stack.Screen
				name='TaxiSingleItem'
				component={TaxiSingleItem}
			/>
			<Stack.Screen
				name='Hotel'
				component={Hotel}
			/>
			<Stack.Screen
				name='HotelSingleItem'
				component={HotelSingleItem}
			/>
			<Stack.Screen
				name='Guide'
				component={Guide}
			/>
		</Stack.Navigator>
	);
};

export default ScreenHomeRouter;
