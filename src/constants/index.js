import {
	car,
	css,
	estate,
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
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
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
		// iconUrl: pricewise,
		theme: "btn-back-red",
		name: "3D-Portfolio",
		description:
			"Developed 3D portfolio with fun interactive parts, like a floating island and a fox that moves when you type. The website demonstrates your skills, abilities, achievements, and experience in a specific fields",
		link: "https://3-d-portfolio-neon-eta.vercel.app/",
	},
	{
		iconUrl: threads,
		theme: "btn-back-green",
		name: "Full Stack Threads Clone",
		description:
			'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: "https://github.com/adrianhajdin/threads",
	},
	{
		iconUrl: car,
		theme: "btn-back-blue",
		name: "Car Finding App",
		description:
			"Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
		link: "https://github.com/adrianhajdin/project_next13_car_showcase",
	},
	{
		iconUrl: snapgram,
		theme: "btn-back-pink",
		name: "Full Stack Instagram Clone",
		description:
			"Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
		link: "https://github.com/adrianhajdin/social_media_app",
	},
	{
		iconUrl: estate,
		theme: "btn-back-black",
		name: "Real-Estate Application",
		description:
			"Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
		link: "https://github.com/adrianhajdin/projects_realestate",
	},
	{
		iconUrl: summiz,
		theme: "btn-back-yellow",
		name: "AI Summarizer Application",
		description:
			"App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
		link: "https://github.com/adrianhajdin/project_ai_summarizer",
	},
];
