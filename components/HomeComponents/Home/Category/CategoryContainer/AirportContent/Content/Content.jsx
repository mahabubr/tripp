import { View, Text, Modal, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";

import styles from "./Content.style";

import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../../../../../../constants/colors";
import { useGetAirportQuery } from "../../../../../../../redux/feature/category/airport/airportApi";
import { Image } from "react-native";

import { Rating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const Content = ({ modalVisible, setModalVisible }) => {
	const { isLoading, error, data } = useGetAirportQuery();

	const Navigate = useNavigation();

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
					<View style={styles.parent_content}>
						<FlatList
							data={data}
							keyExtractor={(item) => item._id}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() =>
										Navigate.navigate("AirportSingleItem", { id: item._id })
									}
									style={styles.contentContainer}
									key={item._id}>
									<View style={styles.image_content}>
										<Image
											style={styles.image}
											source={{ uri: item.image }}
										/>
									</View>
									<View style={styles.text_content}>
										<Text style={styles.title}>{item.name}</Text>
										<View style={styles.location_container}>
											<Icon
												name='location-arrow'
												size={15}
												color={colors.dark_gray}
											/>
											<Text style={styles.loc_txt}>{item.location}</Text>
										</View>
										<Rating
											type='star'
											ratingCount={item.ratting}
											imageSize={15}
											readonly
											tintColor={colors.gray}
											style={styles.ratting}
										/>
									</View>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default Content;
