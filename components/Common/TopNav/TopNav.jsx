import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import Icon2 from "react-native-vector-icons/AntDesign";

import styles from "./TopNav.style";
import colors from "../../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const TopNav = ({ children }) => {
	const Navigate = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => Navigate.goBack()}>
				<Icon2
					name='arrowleft'
					size={30}
					color={colors.sec_primary}
				/>
			</TouchableOpacity>
			<View>
				<Text style={styles.title}>{children}</Text>
			</View>
			<View style={styles.rightContainer}>
				<TouchableOpacity
					onPress={() => Navigate.navigate("Notification")}
					style={styles.icon}>
					<Icon2
						name='notification'
						size={15}
						color={colors.sec_primary}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => alert("Working...")}
					style={styles.icon}>
					<Icon2
						name='bars'
						size={15}
						color={colors.sec_primary}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TopNav;
