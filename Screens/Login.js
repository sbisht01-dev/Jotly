import { View, Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useState } from "react";
import CredInput from "../Components/CredInput";
export default function Login() {
	const [fontsLoaded] = useFonts({
		Lexend: require("../assets/Fonts/Lexend-Bold.ttf"),
	});
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log("email", email);
	console.log("password", password);
	const [emailHeading, setEmailHeading] = useState("Email");
	const [passwordHeading, setPasswordHeading] = useState("Password");

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ padding: 24 }}>
				<View>
					<View style={{ marginBottom: 20, marginTop: 24 }}>
						<Text
							style={{ fontSize: 32, fontWeight: "bold", fontFamily: "Lexend" }}
						>
							Login
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: "#2C2C2CFF",
								fontWeight: 400,
							}}
						>
							Login into your Account
						</Text>
					</View>
					<View>
						<CredInput
							heading={emailHeading}
							obscure="false"
							value={(text) => setEmail(text)}
						/>
						<CredInput
							heading={passwordHeading}
							obscure="true"
							value={(text) => setPassword(text)}
						/>
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: "#00668BFF",
							height: 50,
							width: "100%",
							marginTop: 24,
							justifyContent: "center",
							borderRadius: 12,
							alignItems: "center",
						}}
					>
						<Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
