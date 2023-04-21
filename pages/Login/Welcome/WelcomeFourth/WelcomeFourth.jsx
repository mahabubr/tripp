import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./WelcomeFourth.style";
import { holiday_man } from "../../../../constants/logo";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const WelcomeFourth = () => {
	const Navigate = useNavigation();

	return (
		<TouchableOpacity onPress={() => Navigate.navigate("WelcomeFourth")}>
			<Image
				style={styles.image}
				source={holiday_man}
			/>
			<View style={styles.content_text}>
				<Text style={styles.contentPrimaryText}>
					Here To Make Holiday Special
				</Text>
				<Text style={styles.contentText2}>
					Plan Your Travel Now!! Make Magical Holiday Memories With Your Family.
					Experience The Best Places, Cuisines, Memories Around The World
				</Text>
			</View>
			<View style={styles.bottomContent}>
				<View style={styles.arrowContent}>
					<Icon
						name='keyboard-arrow-right'
						size={30}
						color='#ffffff'
					/>
				</View>
				<View style={styles.navigateContent}>
					<View style={styles.navigContent}></View>
					<View style={styles.navigContent1}></View>
					<View style={styles.navigContent2}></View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default WelcomeFourth;
