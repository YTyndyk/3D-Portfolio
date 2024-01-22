import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Iuliia",
					from_email: form.email,
					to_email: "ytyndyk@gmail.com",
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				setIsLoading(false);
				setForm({ name: "", email: "", message: "" });
			})
			.catch((error) => {
				setIsLoading(false);
				console.log(error);
			});
	};

	const handleFocus = () => {};

	const handleBlur = () => {};

	return (
		<section className="relative flex lg:flex-row flex-col max-container">
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text"> Get in Touch</h1>

				<form
					className="w-full flex flex-col gap-7 mt-14"
					onSubmit={handleSubmit}
				>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="name"
							required
							value={form.name}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="name@gmail.com"
							required
							value={form.email}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Your message
						<textarea
							name="message"
							rows={4}
							className="textarea"
							placeholder="Write your thoughts here..."
							required
							value={form.message}
							onChange={handleChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
						/>
					</label>
					<button
						type="submit"
						className="btn"
						disabled={isLoading}
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
						{isLoading ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>

			<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
				<Canvas
					camera={{
						position: [0, 0, 5],
					}}
				>
					<Suspense fallback={null}>
						<Fox />
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Contact;