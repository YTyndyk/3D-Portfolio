import {
	css,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	mui,
	nextjs,
	nodejs,
	react,
	redux,
	sass,
	tailwindcss,
	typescript,
} from "../assets/icons";

export const skills = [
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},

	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: nextjs,
		name: "Next.js",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
];

export const experiences = [
	{
		title: "Full stack Developer",
		company_name: "GoIT",

		iconBg: "white",
		date: "Octovber 2022 - September 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

export const socialLinks = [
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/YTyndyk",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://linkedin.com/in/iuliia-tyndyk",
	},
];

export const projects = [
	{
		theme: "btn-back-red",
		name: "3D-Portfolio",
		description:
			"Developed 3D portfolio with fun interactive parts, like a floating island and a fox that moves when you type. The website demonstrates your skills, abilities, achievements, and experience in a specific fields.",
		link: "https://3-d-portfolio-neon-eta.vercel.app/",
	},
	{
		theme: "btn-back-green",
		name: "Phonebook",
		description:
			"A phonebook connected to Swager backend API - you can register, log in, add, remove or filter contacts, and log out. [React (Hooks, Routers, Redux, Redux Toolkit, Redux-Persist, React-Hot-Toast, JS, Ant Design].",
		link: "https://ytyndyk.github.io/goit-react-hw-08-phonebook/",
	},
	{
		theme: "btn-back-blue",
		name: "WebStudio",
		description:
			"A landing page with a home page describing what this web studio does and the development team. The second page shows examples of work.",
		link: "https://ytyndyk.github.io/goit-markup-hw-08/",
	},
	{
		theme: "btn-back-pink",
		name: "Movies",
		description:
			"Developed a movie search application which allows you to find your favorite movie and provides comprehensive information about it.",
		link: "https://ytyndyk.github.io/goit-react-hw-05-movies/",
	},
	{
		theme: "btn-back-black",
		name: "Ice cream",
		description:
			"Developed website featuring a responsive layout, burger menu, modal window, and an attractive design. The website facilitates searches favorite flavors and connects buyers with sellers.",
		link: "https://roman10rb.github.io/team-iceCream/",
	},
	{
		theme: "btn-back-yellow",
		name: "Image finder",
		description:
			"App for searching images by keyword using Pixabay API. A simple interface, fast and reliable performance in searching for the needed images. It includes statistics on preferences and downloads.",
		link: "https://ytyndyk.github.io/goit-js-hw-11/",
	},
];
