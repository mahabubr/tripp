import React from "react";

import MapView, { Marker } from "react-native-maps";

import styles from "./Map.style";

import { Image, View } from "react-native";
import { marker } from "../../../../../../../constants/logo";
import { useGetAirportQuery } from "../../../../../../../redux/feature/category/airport/airportApi";

const Map = ({ setModalVisible }) => {
	const { data } = useGetAirportQuery();

	return (
		<MapView
			style={styles.container}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 50.0922,
				longitudeDelta: 20.0421,
			}}>
			{data?.map((item) => (
				<Marker
					onPress={() => setModalVisible(true)}
					key={item._id}
					coordinate={{ latitude: item.latitude, longitude: item.longitude }}
					title={item.name}
					description={item.location}>
					<View>
						<Image
							source={marker}
							style={styles.marker_img}
						/>
					</View>
				</Marker>
			))}
		</MapView>
	);
};

export default Map;
