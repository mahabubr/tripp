import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React, { useState } from "react";

import styles from "./Login.style";
import { cut_logo } from "../../../../constants/logo";

import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useSignIn } from "@clerk/clerk-expo";

const Login = () => {
	const Navigate = useNavigation();

	const { isLoaded, setActive, signIn } = useSignIn();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const onSignInPress = async () => {
		// setError("");
		if (!isLoaded) {
			return;
		}

		try {
			const completeSignIn = await signIn.create({
				identifier: email,
				password,
			});

			await setActive({ session: completeSignIn.createdSessionId });

			console.log("Sign In Complete");
		} catch (e) {
			setError(JSON.stringify(e.errors[0].message));
		}
	};

	return (
		<ScrollView style={styles.container}>
			<Image
				style={styles.logo}
				source={cut_logo}
			/>
			<Text style={styles.title}>Hi, Welcome Back</Text>
			<Text style={styles.sub_title}>
				We hope you had a great time, and we're happy to have you back.
			</Text>
			<Text style={styles.error}>{error.slice(1, -2)}</Text>
			<View style={styles.input_container}>
				<TextInput
					style={styles.input_content}
					placeholder='Enter Your Email'
					textContentType='emailAddress'
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					style={styles.input_content}
					placeholder='Enter Your Password'
					textContentType='password'
					secureTextEntry={true}
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={(text) => setPassword(text)}
				/>
				<TouchableOpacity onPress={() => Navigate.navigate("ForgetPassword")}>
					<Text style={styles.forgetText}>Forget Password</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnTouch}
					onPress={onSignInPress}>
					<Text style={styles.btnText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.break_text}>Or Continue With</Text>
			<View style={styles.social_content}>
				<TouchableOpacity style={styles.oAuth_btn}>
					<Icon
						name='google'
						size={20}
						color={colors.primary}
					/>
					<Text style={styles.oAuth_text}>Continue With Google</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.oAuth_btn}>
					<Icon
						name='facebook-square'
						size={20}
						color={colors.primary}
					/>
					<Text style={styles.oAuth_text}>Continue With Facebook</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.text_reg}>
				Don't have an account ?{" "}
				<Text
					onPress={() => Navigate.navigate("SignUp")}
					style={styles.text_reg1}>
					Register
				</Text>
			</Text>
		</ScrollView>
	);
};

export default Login;
