import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Use solid icons

export default function Home() {
	return (
		<main
			style={{
				fontFamily:
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
			}}
		>
			<div className="flex justify-center mt-20">
				<div className="text-left">
					<h1 className="text-5xl text-[#FFFFFF]">👋 Hi, I'm</h1>
					<h1 className="text-9xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-[1.5]">
						Majed Althonayan
					</h1>

					<div className="flex flex-row justify-center items-center bg-[#121212] space-x-4">
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<FontAwesomeIcon
								icon={faLinkedin}
								className="w-6 h-6 text-[#FFFFFF] mr-2" // LinkedIn color
							/>
							LinkedIn
						</button>
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<FontAwesomeIcon
								icon={faGithub}
								className="w-6 h-6 text-[#FFFFFF] mr-2" // GitHub color
							/>
							GitHub
						</button>
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<FontAwesomeIcon
								icon={faEnvelope}
								className="w-6 h-6 text-[#FFFFFF] mr-2" // Email color
							/>
							Mail
						</button>
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<FontAwesomeIcon
								icon={faFileAlt}
								className="w-6 h-6 text-[#FFFFFF] mr-2" // Resume color
							/>
							Resume
						</button>
					</div>
				</div>
			</div>
			<div className="my-10 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
			<div className="flex justify-center">
				<div className="w-1/2">
					<p className="text-left text-xl text-[#FFFFFF] mt-4 ">
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
				<div className="text-left">
					<h1 className="text-left text-5xl mb-10 text-[#FFFFFF]">
						Education & Certification
					</h1>
				</div>
			</div>

			<div className="w-1/2 mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					<div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-[#FFFFFF] shadow bg-[#121212] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div>
							<time className="font-caveat font-bold text-white">
								2016-2018
							</time>
						</div>
						<div className="flex items-center justify- space-x-2 mb-1">
							<div className="font-bold text-white">
								Secondary Education - GCSE's
							</div>
						</div>
						<br />
						<div className="text-white">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>

				{/* <!-- Item #2 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-4 h-4 rounded-full border border-white group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-[#FFFFFF] shadow bg-[#121212] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="text-right">
							<time className="font-caveat font-bold text-white text-right">
								2018-2020
							</time>
						</div>
						<div className="font-bold text-white text-right">
							Secondary Education - A Level's
						</div>

						<br />
						<div className="text-white text-right">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>
				{/* <!-- Item #3 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-[#FFFFFF] shadow bg-[#121212] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<time className="font-caveat text-white font-bold">2020-2023</time>
						<div className="font-bold text-white">Undergraduate Degree</div>

						<div className="font-bold text-white">
							Royal Holloway, University of London
						</div>
						<br />
						<div className="text-white">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus. retium lectus quam id leo. Urna e
							retium lectus quam id leo. Urna e retium lectus quam id leo. Urna
							e retium lectus quam id leo. Urna
						</div>
					</div>
				</div>

				{/* <!-- Item #4 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
					{/* <!-- Card --> */}
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-white shadow bg-[#121212] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						{/* <div className="flex items-center justify-between space-x-2 mb-1"> */}
						<div className="text-right">
							<time className="font-caveat font-bold text-white">
								2023-2024
							</time>
						</div>
						<div className="font-bold text-white text-right">
							Postgraduate Degree
						</div>

						{/* </div> */}
						<div className="font-bold text-white text-right">
							Imperial College London
						</div>
						<br />
						<div className="text-white text-right">
							Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
							morbi blandit cursus risus.
						</div>
					</div>
				</div>

				{/* <!-- Item #5 --> */}
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					{/* <!-- Icon --> */}
					<div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

					{/* <!-- Card --> */}
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-white shadow bg-[#121212] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<time className="font-caveat font-bold text-white">2024</time>

						<div className="font-bold text-white">Certifications</div>

						<br />
						<div className="text-white">
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
