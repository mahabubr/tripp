import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./WelcomeFirst.style";
import { desart } from "../../../../constants/logo";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const WelcomeFirst = () => {
	const Navigate = useNavigation();

	return (
		<TouchableOpacity onPress={() => Navigate.navigate("WelcomeSecond")}>
			<Image
				style={styles.image}
				source={desart}
			/>
			<View style={styles.content_text}>
				<Text style={styles.contentPrimaryText}>Go Holiday With a Style</Text>
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

export default WelcomeFirst;
