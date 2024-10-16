export default function Home() {
	return (
		<main>
			<div className="flex justify-center mt-20">
				<div
					className="text-left"
					style={{ fontFamily: "'Playfair Display', serif" }}
				>
					<h1 className="text-5xl text-[#FFFFFF]">Hi, I'm</h1>
					<h1 className="text-9xl text-[#BFA181]">Majed Althonayan</h1>

					<div className="flex flex-col justify-center items-center bg-[#121212]">
						<h1
							className="text-center text-5xl text-[#A9A9A9] font-light mt-4"
							style={{ fontFamily: "'Lato', sans-serif" }}
						>
							Developer | Security Engineer | ML Engineer
						</h1>
						<button className=" mt-6 w-1/4 px-10 py-2 bg-[#BFA181] text-[#111111] font-bold rounded hover:bg-[#a68d6b] shadow-lg hover:shadow-xl transition-shadow duration-200">
							Contact Me
						</button>
					</div>
				</div>
			</div>
			<div className="my-10 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
			<div className="flex justify-center">
				<div className="w-1/2">
					<p className="text-left text-xl text-[#FFFFFF] mt-4">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
						imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
						mollis pretium. Integt dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
					</p>
				</div>
			</div>
			<div className="my-10 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
		</main>
	);
}
