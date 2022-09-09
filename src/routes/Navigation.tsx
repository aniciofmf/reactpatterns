import logo from "../logo.svg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
								Home
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="*" element={<h1>404!</h1>} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
