import {
	View,
	Text,
	TouchableOpacity,
	Image,
	Button,
	TouchableHighlight,
} from "react-native";
import React from "react";

import styles from "./WelcomeFourth.style";
import { holiday_man } from "../../../../constants/logo";

import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../../constants/colors";

const WelcomeFourth = () => {
	const Navigate = useNavigation();

	return (
		<View>
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
				<TouchableOpacity
					style={styles.btnTouch}
					onPress={() => Navigate.navigate("Login")}>
					<Text style={styles.btnText}>GET STARTED</Text>
				</TouchableOpacity>
				<Text style={styles.text_reg}>
					Don't have an account ?{" "}
					<Text
						onPress={() => Navigate.navigate("SignUp")}
						style={styles.text_reg1}>
						Register
					</Text>
				</Text>
			</View>
		</View>
	);
};

export default WelcomeFourth;
