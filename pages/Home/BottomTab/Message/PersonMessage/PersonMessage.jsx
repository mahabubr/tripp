import {
	View,
	Text,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React from "react";

import styles from "./PersonMessage.style";
import { TopNav } from "../../../../../components/Common";
import colors from "../../../../../constants/colors";

import Icon2 from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import { useGetSingleGuideQuery } from "../../../../../redux/feature/category/guide/guideApi";

const PersonMessage = () => {
	const {
		params: { id },
	} = useRoute();

	const { data } = useGetSingleGuideQuery(id);

	return (
		<View style={{ flex: 1 }}>
			<TopNav>{data?.name}</TopNav>
			<ScrollView
				contentContainerStyle={{
					flexGrow: 0.05,
				}}
				style={styles.content}>
				<Text></Text>
			</ScrollView>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder='Type Messages ...'
				/>
				<TouchableOpacity style={styles.btnTouch1}>
					<Text style={styles.btnText1}>
						<Icon2
							name='send'
							size={25}
							color={colors.sec_primary}
						/>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PersonMessage;
