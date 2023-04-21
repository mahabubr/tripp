import { View, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./SlashWelcome.style";
import { logo } from "../../../../constants/logo";
import { useNavigation } from "@react-navigation/native";

const SlashWelcome = () => {
	const Navigate = useNavigation();

	return (
		<TouchableOpacity
			onPress={() => Navigate.navigate("WelcomeFirst")}
			style={styles.container}>
			<View>
				<Image
					style={styles.logo}
					source={logo}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default SlashWelcome;
