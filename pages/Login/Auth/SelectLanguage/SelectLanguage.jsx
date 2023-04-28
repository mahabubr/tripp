import { View, Text } from "react-native";
import React, { useState } from "react";

import SelectDropdown from "react-native-select-dropdown";

import { useNavigation } from "@react-navigation/native";

import styles from "./SelectLanguage.style";
import countries from "../../../../utils/countries";
import { TouchableOpacity } from "react-native";

const SelectLanguage = () => {
	const [selectI, setSelectI] = useState("");

	const Navigate = useNavigation();

	return (
		<View style={styles.container}>
			{selectI ? (
				<View style={styles.bottomContent}>
					<Text style={styles.bottomText1}>Your Selected Language</Text>
					<Text style={styles.bottomText2}>{selectI}</Text>
					<TouchableOpacity
						onPress={() => Navigate.navigate("Profile")}
						style={styles.btnTouch}>
						<Text style={styles.btnText}>Lets Started</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View>
					<Text style={styles.title}>Select Your Language</Text>
					<Text style={styles.sub_title}>
						Please select your language for more then better experience
					</Text>
					<View style={styles.select_container}>
						<SelectDropdown
							buttonStyle={styles.btnTouch}
							buttonTextStyle={styles.btnText}
							defaultButtonText='Select'
							data={countries}
							onSelect={(selectedItem, index) => {
								setSelectI(selectedItem, index);
							}}
							buttonTextAfterSelection={(selectedItem, index) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item, index) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
			)}
		</View>
	);
};

export default SelectLanguage;
