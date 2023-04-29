import { View, Text } from "react-native";
import React from "react";
import { TopNav } from "../../../../components/Common";

import styles from "./Message.style";
import { Users } from "../../../../components/HomeComponents/Message";

const Message = () => {
	return (
		<View>
			<TopNav>Messages</TopNav>
			<View style={styles.content}>
				<Users />
			</View>
		</View>
	);
};

export default Message;
