import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				<img src={logo} alt="logo" className="w-32 object-contain" />
				<button
					type="button"
					onClick={() =>
						window.open(
							"https://github.com/Anubhav-Chauhan3367/Summazon.git"
						)
					}
					className="black_btn"
				>
					GitHub
				</button>
			</nav>
			<h1 className="head_text">
				Text Summarizer Powered By <br className="max-md:hidden" />
				<span className="green_gradient">OpenAI GPT-4</span>
			</h1>
			<h2 className="desc">Simplify your text with the power of AI</h2>
		</header>
	);
};

export default Hero;
