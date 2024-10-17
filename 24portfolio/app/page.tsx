import {
	FaLinkedin,
	FaGithub,
	FaPython,
	FaJava,
	FaPhp,
	FaLinux,
	FaHtml5,
	FaCss3,
	FaChrome,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText, IoLogoJavascript } from "react-icons/io5";
import {
	SiFigma,
	SiFirebase,
	SiMetasploit,
	SiNextdotjs,
	SiNumpy,
	SiOpenai,
	SiOpencv,
	SiPytorch,
	SiScikitlearn,
	SiSolidity,
	SiWireshark,
	SiZsh,
} from "react-icons/si";

import { DiMysql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

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
					<h1 className="text-7xl text-[#FFFFFF]">👋 Hi, I'm</h1>
					<h1 className="text-9xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-[1.5]">
						Majed Althonayan
					</h1>

					<div className="flex flex-row justify-center items-center bg-[#121212] space-x-4">
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<FaLinkedin size={25} />
							LinkedIn
						</button>
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<FaGithub size={25} />
							GitHub
						</button>
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<MdEmail size={25} />
							Mail
						</button>
						<button className="w-1/4 rounded-lg px-10 py-2 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center">
							<IoDocumentText size={25} />
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
						Education & Certifications
					</h1>
				</div>
			</div>

			<div className="w-1/2 mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
				<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
					<div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-white text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>

					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-[#FFFFFF] shadow bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
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
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-[#FFFFFF] shadow bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
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
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-[#FFFFFF] shadow bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
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
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-white shadow bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
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
					<div className="rounded-lg w-[calc(100%-4rem)] md:w-[calc(50%-1rem)] p-4 rounded border border-white shadow bg-gray-800 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
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
			<div className="flex justify-center mt-20">
				<div className="text-left">
					<h1 className="text-left text-5xl mb-10 text-[#FFFFFF]">Projects</h1>
				</div>
			</div>

			{/* projects */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 text-center mx-auto mt-12 mb-10 sm:mt-16 max-w-6xl">
				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
						Official website
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-500 dark:text-gray-400 text-center mx-auto">
						Flowbite helps you connect with friends, family, and communities of
						people who share your interests.
					</p>
					<a
						href="#"
						title=""
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						role="button"
					>
						View case study
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2 -mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
						Management system
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-500 dark:text-gray-400 text-center mx-auto">
						Flowbite helps you connect with friends, family, and communities of
						people who share your interests.
					</p>

					<a
						href="#"
						title=""
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						role="button"
					>
						View case study
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2 -mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
						Official website
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-500 dark:text-gray-400 text-center mx-auto">
						Flowbite helps you connect with friends, family, and communities of
						people who share your interests.
					</p>
					<a
						href="#"
						title=""
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						role="button"
					>
						View case study
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2 -mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
						Management system
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-500 dark:text-gray-400 text-center mx-auto">
						Flowbite helps you connect with friends, family, and communities of
						people who share your interests.
					</p>

					<a
						href="#"
						title=""
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						role="button"
					>
						View case study
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2 -mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
						Official website
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-500 dark:text-gray-400 text-center mx-auto">
						Flowbite helps you connect with friends, family, and communities of
						people who share your interests.
					</p>
					<a
						href="#"
						title=""
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						role="button"
					>
						View case study
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2 -mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>

				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
						Management system
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-500 dark:text-gray-400 text-center mx-auto">
						Flowbite helps you connect with friends, family, and communities of
						people who share your interests.
					</p>

					<a
						href="#"
						title=""
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						role="button"
					>
						View case study
						<svg
							aria-hidden="true"
							className="w-5 h-5 ml-2 -mr-1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="my-10 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
			<div className="flex justify-center mt-20">
				<div className="text-left">
					<h1 className="text-left text-5xl mb-10 text-[#FFFFFF]">
						Technologies & Applications
					</h1>
				</div>
			</div>

			{/* ssadcaslkndcasl */}
			<div className="max-w-5xl mb-10 mx-auto text-balance text-gray-500">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:grid-cols-6">
					{/* <!-- Large box spanning 2x2 --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 md:row-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 ">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaPython size={50} />
							<p className="text-white font-bold">Python</p>
						</div>
					</div>

					{/* <!-- Tall box spanning 3 rows --> */}
					<div className="bg-gray-800 min-h-[250px] ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaJava size={50} />
							<p className="text-white font-bold">Java</p>
						</div>
					</div>

					{/* <!-- Regular box --> */}
					<div className="bg-gray-800 min-h-[250px] ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-3 lg:row-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaPhp size={50} />
							<p className="text-white font-bold">PHP</p>
						</div>
					</div>

					{/* <!-- Wide box spanning 2 columns --> */}
					<div className="bg-gray-800  ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<DiMysql size={50} />

							<p className="text-white font-bold">SQL</p>
						</div>
					</div>

					{/* <!-- Tall box spanning 2 rows --> */}
					<div className="bg-gray-800  ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-2 lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaLinux size={50} />
							<p className="text-white font-bold">Linux</p>
						</div>
					</div>

					{/* <!-- Regular boxes --> */}
					<div className="bg-gray-800  ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiZsh size={50} />
							<p className="text-white font-bold">zsh</p>
						</div>
					</div>
					<div className="bg-gray-800  ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaGithub size={50} />
							<p className="text-white font-bold">GitHub</p>
						</div>
					</div>

					{/* <!-- Wide box spanning 3 columns --> */}
					<div className="bg-gray-800  ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-3 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaHtml5 size={50} />
							<p className="text-white font-bold">HTML</p>
						</div>
					</div>

					{/* <!-- Regular boxes --> */}
					<div className="bg-gray-800 ] ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<IoLogoJavascript size={50} />
							<p className="text-white font-bold">Java Script</p>
						</div>
					</div>
					<div className="bg-gray-800 min-h-[160px] ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl col-span-full lg:col-span-1 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiNextdotjs size={50} />
							<p className="text-white font-bold">Next.js</p>
						</div>
					</div>
					{/* APPLICATIONS */}
					{/* <!-- Large box spanning 2x2 --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 md:row-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 ">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiOpenai size={50} />
							<p className="text-white font-bold">Chat GPT</p>
						</div>
					</div>

					{/* <!-- Tall box spanning 3 rows --> */}
					<div className="bg-gray-800 min-h-[250px] ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaCss3 size={50} />
							<p className="text-white font-bold">CSS</p>
						</div>
					</div>

					{/* <!-- Regular box --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-3 lg:row-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<FaChrome size={50} />
							<p className="text-white font-bold">Chrome</p>
						</div>
					</div>

					{/* <!-- Wide box spanning 2 columns --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiSolidity size={50} />
							<p className="text-white font-bold">Solidity</p>
						</div>
					</div>

					{/* <!-- Tall box spanning 2 rows --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:row-span-2 lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiPytorch size={50} />
							<p className="text-white font-bold">PyTorch</p>
						</div>
					</div>

					{/* <!-- Regular boxes --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiNumpy size={50} />
							<p className="text-white font-bold">Numpy</p>
						</div>
					</div>
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<VscVscode size={50} />
							<p className="text-white font-bold">VS Code</p>
						</div>
					</div>

					{/* <!-- Wide box spanning 3 columns --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-3 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiScikitlearn size={50} />
							<p className="text-white font-bold">Scikit Learn</p>
						</div>
					</div>

					{/* <!-- Regular boxes --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiOpencv size={50} />
							<p className="text-white font-bold">OpenCV</p>
						</div>
					</div>

					<div className="bg-gray-800 min-h-[160px] ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl col-span-full lg:col-span-1 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiWireshark size={50} />
							<p className="text-white font-bold">Wireshark</p>
						</div>
					</div>
					{/* <!-- Wide box spanning 3 columns --> */}

					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl col-span-full lg:col-span-1 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiFigma size={50} />
							<p className="text-white font-bold">Figma</p>
						</div>
					</div>
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl md:col-span-3 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiMetasploit size={50} />
							<p className="text-white font-bold">Metasploit</p>
						</div>
					</div>
					{/* <!-- Regular boxes --> */}
					<div className="bg-gray-800 ring-1 ring-inset ring-gray-200 shadow p-6 rounded-xl lg:col-span-2 hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200">
						<div className="flex flex-col justify-center items-center text-white text-center h-full">
							<SiFirebase size={50} />
							<p className="text-white font-bold">Firebase</p>
						</div>
					</div>
				</div>
			</div>
			<div className="my-5 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
			<div className="flex justify-center">
				<div className="text-center">
					<p className="text-[#FFFFFF]">Designed in Figma,</p>
					<p className="text-[#FFFFFF]">Coded in Visual Studio Code,</p>
					<p className="text-[#FFFFFF]">Built With Next.js and Tailwind CSS,</p>
					<p className="text-md mb-10 text-[#FFFFFF]">By Me!</p>
					<p className="text-[#FFFFFF] mb-10">
						A template of this portfolio can also be found on my{" "}
						<a className="font-bold underline">GitHub</a>
					</p>
				</div>
			</div>
		</main>
	);
}
