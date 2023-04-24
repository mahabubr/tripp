import { View, TextInput } from "react-native";
import React from "react";

import styles from "./SearchBar.style";

const SearchBar = () => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder='Search Here'
				style={styles.input_text}
			/>
		</View>
	);
};

export default SearchBar;
