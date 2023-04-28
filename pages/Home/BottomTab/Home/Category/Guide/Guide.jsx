import { View, Text } from "react-native";
import React from "react";
import { TopNav } from "../../../../../../components/Common";

import styles from "./Guide.style";
import { GuideContent } from "../../../../../../components/HomeComponents/Home/Category/CategoryContainer";

const Guide = () => {
	return (
		<View style={styles.container}>
			<TopNav>Guide</TopNav>
			<View style={styles.content}>
				<GuideContent />
			</View>
		</View>
	);
};

export default Guide;
