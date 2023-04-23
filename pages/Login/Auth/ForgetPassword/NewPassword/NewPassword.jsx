import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

import styles from "./NewPassword.style";

import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
	const Navigate = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Set Your Password ?</Text>
			<Text style={styles.sub_title}>Get Back Your Password</Text>
			<View style={styles.input_container}>
				<TextInput
					style={styles.input_content}
					placeholder='Enter Your Password'
					textContentType='password'
					secureTextEntry={true}
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<TextInput
					style={styles.input_content}
					placeholder='Confirm Your Password'
					textContentType='password'
					secureTextEntry={true}
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<TouchableOpacity
					onPress={() => Navigate.navigate("Login")}
					style={styles.btnTouch}>
					<Text style={styles.btnText}>CONTINUE</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default NewPassword;
