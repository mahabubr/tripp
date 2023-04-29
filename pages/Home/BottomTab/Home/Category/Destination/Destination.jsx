import { View } from "react-native";
import React from "react";

import styles from "./Destination.style";
import { TopNav } from "../../../../../../components/Common";
import { useGetDestinationQuery } from "../../../../../../redux/feature/category/destination/destinationApi";

import MapView, { Marker } from "react-native-maps";

const Destination = () => {
	const { data } = useGetDestinationQuery();

	return (
		<View style={styles.container}>
			<TopNav>Destination</TopNav>
			<View>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 20.78825,
						longitude: 50.4324,
						latitudeDelta: 10.0922,
						longitudeDelta: 1000.0421,
					}}>
					{data?.map((item) => (
						<Marker
							key={item._id}
							draggable
							title={item.name}
							description={item.location}
							coordinate={{
								latitude: item.latitude,
								longitude: item.longitude,
							}}
						/>
					))}
				</MapView>
			</View>
		</View>
	);
};

export default Destination;
