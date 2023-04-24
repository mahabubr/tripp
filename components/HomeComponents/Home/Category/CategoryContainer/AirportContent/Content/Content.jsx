import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import styles from "./Content.style";

import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../../../../../constants/colors";

const Content = ({ modalVisible, setModalVisible }) => {
	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
				setModalVisible(!modalVisible);
			}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<TouchableOpacity
						onPress={() => setModalVisible(false)}
						style={styles.close}>
						<Icon
							name='close'
							size={30}
							color={colors.sec_primary}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default Content;
