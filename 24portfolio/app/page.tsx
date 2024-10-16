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

			<div className="flex justify-center mt-20">
				<div
					className="text-left"
					style={{ fontFamily: "'Playfair Display', serif" }}
				>
					<h1 className="text-left text-5xl mb-10 text-[#BFA181]">
						Education & Certification
					</h1>
				</div>
			</div>

			<div className="w-1/2 mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#BFA181] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

					<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-[#A9A9A9] shadow bg-[#A9A9A9] hover:bg-[#BDBDBD]">
						<div className="flex items-center justify-between space-x-2 mb-1">
							<div className="font-bold text-slate-900">
								Secondary Education - GCSE's
							</div>
							<time className="font-caveat font-medium text-black">
								2016-2018
							</time>
						</div>
						<div className="text-slate-500">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>

				{/* <!-- Item #2 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#BFA181] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow bg-[#A9A9A9]">
						<div className="flex items-center justify-between space-x-2 mb-1">
							<div className="font-bold text-slate-900">
								Secondary Education - A Level's
							</div>
							<time className="font-caveat font-medium text-black">
								2018-2020
							</time>
						</div>
						<div className="text-slate-500">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>
				{/* <!-- Item #3 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#BFA181] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow bg-[#A9A9A9]">
						<div className="flex items-center justify-between space-x-2 mb-1">
							<div className="font-bold text-slate-900">
								Undergraduate Degree
							</div>
							<time className="font-caveat font-medium text-black">
								2020-2023
							</time>
						</div>
						<div className="text-slate-500">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>

				{/* <!-- Item #4 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#BFA181] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow bg-[#A9A9A9]">
						<div className="flex items-center justify-between space-x-2 mb-1">
							<div className="font-bold text-slate-900">
								Postgraduate Degree
							</div>
							<time className="font-caveat font-medium text-black">
								2023-2024
							</time>
						</div>
						<div className="text-slate-500">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>

				{/* <!-- Item #5 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#BFA181] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow bg-[#A9A9A9]">
						<div className="flex items-center justify-between space-x-2 mb-1">
							<div className="font-bold text-slate-900">Certifications</div>
							<time className="font-caveat font-medium text-black">2024</time>
						</div>
						<div className="text-slate-500">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>
			</div>
			<div className="my-10 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
		</main>
	);
}
