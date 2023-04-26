import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./HotelMap.style";

import MapView, { Callout, Marker } from "react-native-maps";
import { useGeHotelQuery } from "../../../../../../../redux/feature/category/hotel/hotelApi";
import colors from "../../../../../../../constants/colors";

import Icon from "react-native-vector-icons/FontAwesome5";
import { Rating } from "react-native-ratings";

import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";

const HotelMap = () => {
	const { data } = useGeHotelQuery();

	const Navigate = useNavigation();

	return (
		<MapView
			style={styles.container}
			initialRegion={{
				latitude: 23.4241,
				longitude: 53.8478,
				latitudeDelta: 100.0922,
				longitudeDelta: 10.0421,
			}}>
			{data &&
				data?.map((item) => (
					<Marker
						key={item._id}
						coordinate={{ latitude: item.latitude, longitude: item.longitude }}>
						<Callout
							onPress={() =>
								Navigate.navigate("HotelSingleItem", { id: item._id })
							}
							style={{
								flex: -1,
								position: "absolute",
								width: 300,
								padding: 4,
							}}>
							<TouchableOpacity
								style={styles.card_content}
								key={item._id}>
								<View style={styles.image_container}>
									<WebView
										resizeMode='cover'
										style={styles.image}
										source={{ uri: item.image }}
									/>
								</View>
								<View style={styles.text_container}>
									<Text style={styles.name}>{item.name}</Text>
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
										imageSize={20}
										ratingColor={colors.light_secondary}
										readonly
										style={styles.ratting}
									/>
								</View>
							</TouchableOpacity>
						</Callout>
					</Marker>
				))}
		</MapView>
	);
};

export default HotelMap;
