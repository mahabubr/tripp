import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { pic_1 } from "../../../../constants/logo";

import Icon from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/AntDesign";

import colors from "../../../../constants/colors";

import styles from "./TopBar.style";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const TopBar = () => {
	const Navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<View>
					<Image
						style={styles.image}
						source={pic_1}
					/>
				</View>
				<View>
					<Text style={styles.name}>Hi, Tom</Text>
					<View style={styles.location_container}>
						<Icon
							name='location-arrow'
							size={15}
							color={colors.dark_gray}
						/>
						<Text style={styles.location_txt}>United State</Text>
					</View>
				</View>
			</View>
			<View style={styles.rightContainer}>
				<TouchableOpacity style={styles.icon}>
					<Icon2
						name='notification'
						size={20}
						color={colors.sec_primary}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					// onPress={() => Navigation.dispatch(DrawerActions.openDrawer())}
					style={styles.icon}>
					<Icon2
						name='bars'
						size={20}
						color={colors.sec_primary}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TopBar;
