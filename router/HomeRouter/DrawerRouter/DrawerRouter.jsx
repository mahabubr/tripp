import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Profile } from "../../../pages/Home/BottomTab";

const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name='Profile'
				component={Profile}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerRouter;
