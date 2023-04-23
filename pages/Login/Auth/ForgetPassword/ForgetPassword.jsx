import { View, Text, Image } from "react-native";
import React from "react";

import styles from "./ForgetPassword.style";
import { cut_logo } from "../../../../constants/logo";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";

const ForgetPassword = () => {
	const Navigate = useNavigation();

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={cut_logo}
			/>
			<Text style={styles.title}>Forget Password ?</Text>
			<Text style={styles.sub_title}>Get Back Your Password</Text>
			<View style={styles.input_container}>
				<TextInput
					style={styles.input_content}
					placeholder='Enter Your Email'
					textContentType='emailAddress'
				/>
				<TouchableOpacity
					onPress={() => Navigate.navigate("NewPassword")}
					style={styles.btnTouch}>
					<Text style={styles.btnText}>CONTINUE</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ForgetPassword;
