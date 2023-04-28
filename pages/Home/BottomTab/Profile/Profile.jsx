import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./Profile.style";
import { ScrollView, Linking } from "react-native";
import { TopNav } from "../../../../components/Common";
import MapView, { Marker } from "react-native-maps";
import { useUser } from "@clerk/clerk-expo";

const Profile = () => {
	const { user } = useUser();

	return (
		<ScrollView
			contentContainerStyle={{ paddingBottom: 50 }}
			style={styles.container}>
			<TopNav>Profile</TopNav>
			<View>
				<Image
					style={styles.cover_img}
					source={{
						uri: "https://images.unsplash.com/photo-1624396963238-df0e48367ff7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1436&q=80",
					}}
				/>
				<Image
					style={styles.img}
					source={{
						uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZQ_Z6Jir7-1quljeW8Nea3KQ3uXEVbtQ6w&usqp=CAU",
					}}
				/>
			</View>
			<View style={styles.content}>
				<Text style={styles.name}>Mahabubur Rahman</Text>
				<Text style={styles.loc}>Bogura, Bangladesh</Text>
				<Text>{user.emailAddresses[0].emailAddress}</Text>
				<View style={styles.tit_content}>
					<View>
						<Text style={styles.tit}>Tour</Text>
						<Text style={styles.tit_2}>500+</Text>
					</View>
					<View>
						<Text style={styles.tit}>Countries</Text>
						<Text style={styles.tit_2}>20+</Text>
					</View>
				</View>
				<View style={styles.map_content}>
					<Text style={styles.title}>About Us</Text>
					<Text style={styles.about}>
						The visuals on your about page make your brand more human. What’s
						even more important is to use visuals of real people, not stock
						photos. For instance, the HubSpot about us page has an image of our
						founders.
					</Text>
				</View>
				<View style={styles.map_content}>
					<Text style={styles.title}>Location</Text>
					<MapView
						style={styles.map}
						initialRegion={{
							latitude: 24.8481,
							longitude: 89.373,
							latitudeDelta: 20.0922,
							longitudeDelta: 20.0421,
						}}>
						<Marker
							coordinate={{
								latitude: 24.8481,
								longitude: 89.373,
							}}
							title={"Bangladesh"}
							description={"Make Happy"}
						/>
					</MapView>
				</View>
			</View>
		</ScrollView>
	);
};

export default Profile;
