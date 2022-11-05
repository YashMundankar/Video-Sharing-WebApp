import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Box from "@mui/material/Box";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Box display='flex'>
				<BrowserRouter>
					<Menu
						darkMode={darkMode}
						setDarkMode={setDarkMode}
					/>
					<Box sx={{ flex: 7, backgroundColor: "#181818" }}>
						<Navbar />
						<Box sx={{ padding: "22px 96px" }}>
							<Routes>
								<Route path='/'>
									<Route
										index
										element={<Home />}
									/>
									<Route
										path='signin'
										element={<SignIn />}
									/>
									<Route path='video'>
										<Route
											path=':id'
											element={<Video />}
										/>
									</Route>
								</Route>
							</Routes>
						</Box>
					</Box>
				</BrowserRouter>
			</Box>
		</ThemeProvider>
	);
}

export default App;
