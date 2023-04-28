import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Linking,
} from "react-native";
import React from "react";

import styles from "./GuideProfile.style";
import { TopNav } from "../../../../../../../components/Common";
import { cover } from "../../../../../../../constants/logo";
import { useRoute } from "@react-navigation/native";
import { useGetSingleGuideQuery } from "../../../../../../../redux/feature/category/guide/guideApi";

import MapView, { Marker } from "react-native-maps";

const GuideProfile = () => {
	const {
		params: { id },
	} = useRoute();

	const { data } = useGetSingleGuideQuery(id);

	return (
		<ScrollView
			contentContainerStyle={{ paddingBottom: 50 }}
			style={styles.container}>
			<TopNav>Guide Profile</TopNav>
			{data && (
				<>
					<View>
						<Image
							style={styles.cover_img}
							source={cover}
						/>
						<Image
							style={styles.img}
							source={{ uri: data.image }}
						/>
					</View>
					<View style={styles.content}>
						<Text style={styles.name}>{data.name}</Text>
						<Text style={styles.loc}>
							International Tour Guide In {data.location}
						</Text>
						<View style={styles.tit_content}>
							<View>
								<Text style={styles.tit}>Experience</Text>
								<Text style={styles.tit_2}>{data.experience}</Text>
							</View>
							<View>
								<Text style={styles.tit}>Guide People</Text>
								<Text style={styles.tit_2}>{data.guide}+</Text>
							</View>
						</View>
						<View style={styles.btn_content}>
							<TouchableOpacity style={styles.btnTouch}>
								<Text style={styles.btnText}>Message</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.btnTouch1}
								onPress={() => Linking.openURL(`tel:${data.phone}`)}>
								<Text style={styles.btnText1}>Call Now</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.map_content}>
							<Text style={styles.title}>About Us</Text>
							<Text style={styles.about}>
								The visuals on your about page make your brand more human.
								What’s even more important is to use visuals of real people, not
								stock photos. For instance, the HubSpot about us page has an
								image of our founders.
							</Text>
						</View>
						<View style={styles.map_content}>
							<Text style={styles.title}>Location</Text>
							<MapView
								style={styles.map}
								initialRegion={{
									latitude: data.latitude,
									longitude: data.longitude,
									latitudeDelta: 20.0922,
									longitudeDelta: 20.0421,
								}}>
								<Marker
									coordinate={{
										latitude: data.latitude,
										longitude: data.longitude,
									}}
									title={"Hello"}
									description={"Hello"}
								/>
							</MapView>
						</View>
					</View>
				</>
			)}
		</ScrollView>
	);
};

export default GuideProfile;
