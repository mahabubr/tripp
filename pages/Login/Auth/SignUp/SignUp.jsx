import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Modal,
} from "react-native";
import React, { useState } from "react";

import styles from "./SignUp.style";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Octicons";

import { cut_logo } from "../../../../constants/logo";
import colors from "../../../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { useSignUp } from "@clerk/clerk-expo";

const SignUp = () => {
	const Navigate = useNavigation();

	const { isLoaded, setActive, signUp } = useSignUp();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [pendingVerify, setPendingVerify] = useState(false);
	const [code, setCode] = useState("");
	const [codeErr, setCodeErr] = useState("");

	const [modalVisible, setModalVisible] = useState(false);

	const onSignUpPress = async () => {
		setError("");
		if (!isLoaded) {
			return;
		}

		try {
			await signUp.create({
				emailAddress: email,
				password: password,
			});

			await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

			setPendingVerify(true);
		} catch (e) {
			setError(JSON.stringify(e.errors[0].longMessage));
		}
	};

	const onPressVerify = async () => {
		setCodeErr("");
		if (!isLoaded) {
			return;
		}

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code,
			});

			await setActive({ session: completeSignUp.createdSessionId });

			setModalVisible(true);

			// console.log("Account Created");
		} catch (e) {
			setCodeErr(JSON.stringify(e.errors[0].longMessage));
		}
	};

	return (
		<View>
			{!pendingVerify && (
				<View style={styles.container}>
					<Image
						style={styles.logo}
						source={cut_logo}
					/>
					<Text style={styles.title}>Create Account</Text>
					<Text style={styles.sub_title}>
						We hope you had a great time, and we're happy to have you Tripp.
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
						<TouchableOpacity
							style={styles.btnTouch}
							onPress={onSignUpPress}>
							<Text style={styles.btnText}>SIGN UP</Text>
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
						Already have an account ?{" "}
						<Text
							onPress={() => Navigate.navigate("Login")}
							style={styles.text_reg1}>
							Login
						</Text>
					</Text>
				</View>
			)}
			{pendingVerify && (
				<View style={styles.container}>
					<Image
						style={styles.logo}
						source={cut_logo}
					/>
					<Text style={styles.title}>Verify Your Account</Text>
					<Text style={styles.sub_title}>
						We have just send you 6 digit code via your email :{" "}
						<Text style={styles.text_reg1}>{email}</Text>
					</Text>
					<Text style={styles.error}>{codeErr.slice(1, -1)}</Text>
					<View style={styles.input_container}>
						<TextInput
							style={styles.input_content}
							placeholder='Enter Your Code'
							textContentType='none'
							onChangeText={(text) => setCode(text)}
						/>
						<TouchableOpacity
							style={styles.btnTouch}
							onPress={onPressVerify}>
							<Text style={styles.btnText}>Verify Code</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
			<Modal
				animationType='fade'
				transparent={true}
				visible={modalVisible}
				// onRequestClose={() => {
				// 	Alert.alert("Modal has been closed.");
				// 	setModalVisible(!modalVisible);
				// }}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Icon2
							name='verified'
							size={100}
							color={colors.light_secondary}
						/>
						<Text style={styles.modal_title}>Congratulations</Text>
						<Text style={styles.modal_sub_title}>
							Your Account Create and Verify Successful
						</Text>
						<TouchableOpacity style={styles.btnTouch1}>
							<Text style={styles.btnText1}>Please Fill Your More Info</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default SignUp;
