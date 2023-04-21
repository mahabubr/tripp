import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./WelcomeFirst.style";
import { desart } from "../../../../constants/logo";

const WelcomeFirst = () => {
	return (
		<TouchableOpacity>
			<Image
				style={styles.image}
				source={desart}
			/>
			<View style={styles.content_text}>
				<Text style={styles.contentPrimaryText}>Go Holiday With a Style</Text>
			</View>
		</TouchableOpacity>
	);
};

export default WelcomeFirst;
