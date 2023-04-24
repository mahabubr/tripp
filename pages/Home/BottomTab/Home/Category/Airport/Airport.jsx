import { View, Text } from "react-native";
import React, { useState } from "react";

import styles from "./Airport.style";
import { TopNav } from "../../../../../../components/Common";
import { Map } from "../../../../../../components/HomeComponents/Home/Category/CategoryContainer";
import Content from "../../../../../../components/HomeComponents/Home/Category/CategoryContainer/AirportContent/Content/Content";

const Airport = () => {
	const [modalVisible, setModalVisible] = useState(true);

	return (
		<View style={styles.container}>
			<TopNav>Airport</TopNav>
			<Map setModalVisible={setModalVisible} />
			<Content
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</View>
	);
};

export default Airport;
