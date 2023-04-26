import { View, Text } from "react-native";
import React from "react";

import styles from "./Hotel.style";
import { TopNav } from "../../../../../../components/Common";
import { HotelMap } from "../../../../../../components/HomeComponents/Home/Category/CategoryContainer";

const Hotel = () => {
	return (
		<View style={styles.container}>
			<TopNav>Hotel</TopNav>
			<HotelMap />
		</View>
	);
};

export default Hotel;
