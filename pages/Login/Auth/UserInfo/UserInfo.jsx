import { View, Text } from "react-native";
import React, { useState } from "react";

import { IMAGE_BB_API } from "@env";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./UserInfo.style";
import colors from "../../../../constants/colors";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

import * as ImagePicker from "expo-image-picker";

const UserInfo = () => {
	const [image, setImage] = useState(null);

	const pickImage = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		});
		console.log(result);
		if (!result.canceled) {
			const imageData = result.assets[0].uri;
			console.log(imageData);

			// const formData = new FormData();
			// formData.append("image", imageData);
			// fetch(`https://api.imgbb.com/1/upload?key=${IMAGE_BB_API}`, {
			// 	method: "POST",
			// 	body: formData,
			// })
			// 	.then((res) => res.json())
			// 	.then((data) => {
			// 		console.log(data);
			// 	});
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={pickImage}
				style={styles.image}>
				<Icon
					name='user-circle-o'
					size={150}
					color={colors.secondary}
				/>
			</TouchableOpacity>
			<View style={styles.input_container}>
				<TextInput
					style={styles.input_content}
					placeholder='First Name'
					textContentType='namePrefix'
				/>
				<TextInput
					style={styles.input_content}
					placeholder='Last Name'
					textContentType='nameSuffix'
				/>
				<TextInput
					style={styles.input_content}
					placeholder='Phone Number'
					textContentType='none'
				/>
				<TouchableOpacity style={styles.btnTouch}>
					<Text style={styles.btnText}>Update Info</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default UserInfo;
