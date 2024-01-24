import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="header">
			<NavLink
				to="/"
				className="w-16 h-10 rounded-lg bg-transparent items-center justify-center flex font-medium shadow-md text-lg"
			>
				<p className="blue-gradient_text">Home</p>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-blue-500" : "text-black"
					}
				>
					About
				</NavLink>
				<NavLink
					to="/projects"
					className={({ isActive }) =>
						isActive ? "text-blue-500" : "text-black"
					}
				>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
