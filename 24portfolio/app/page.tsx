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
	FaAws,
	FaDocker,
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
	SiKubernetes,
	SiPandas,
} from "react-icons/si";

import { DiMysql } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaA } from "react-icons/fa6";

export default function Home() {
	return (
		<main
			style={{
				fontFamily:
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
			}}
		>
			<div className="flex justify-center mt-20">
				<div className="text-left w-full px-4 lg:px-0 lg:w-3/4 xl:w-2/3">
					<h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF]">
						👋 Hello, I&apos;m
					</h1>
					<h1 className="text-6xl pb-2 md:text-8xl lg:text-9xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight md:leading-snug">
						Majed Althonayan
					</h1>

					<div className="flex flex-col sm:flex-row justify-center items-center bg-[#121212] space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
						<a
							href="https://www.linkedin.com/in/majedalthonayan/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-1/4 rounded-lg px-6 py-3 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center"
						>
							<FaLinkedin size={25} />
							<span className="ml-2">LinkedIn</span>
						</a>

						<a
							href="https://github.com/majedalthonayan/"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-1/4 rounded-lg px-6 py-3 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center"
						>
							<FaGithub size={25} />
							GitHub
						</a>

						<a
							href="mailto:majedalthonayan123@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-1/4 rounded-lg px-6 py-3 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center"
						>
							<MdEmail size={25} />
							Mail
						</a>

						<a
							href="/Docs/Majed_Althonayan_CV.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-1/4 rounded-lg px-6 py-3 bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 flex items-center justify-center"
						>
							<IoDocumentText size={25} />
							Resume
						</a>
					</div>
				</div>
			</div>

			<div className="my-10 w-1/2 border-b border-[#FFFFFF] mx-auto border-2" />
			<div className="flex justify-center">
				<div className="w-1/2">
					<p className="text-left text-xl text-gray-400 mt-4 ">
						I am a technology enthusiast based in{" "}
						<span className="text-white font-normal">London, England</span>,
						specialising in{" "}
						<span className="text-white font-normal">
							Cyber Security, Machine Learning, and Software Development
						</span>
						. Along this journey, I have obtained degrees, earned professional
						certifications and gained hands-on experience that has helped me
						develop my skills in{" "}
						<span className="text-white font-normal">
							systems analysis, problem solving, and building innovative
							solutions
						</span>
						. I’m passionate about continuous learning and love staying at the
						forefront of development, mostly working with{" "}
						<span className="text-white font-normal">
							Python, Java, Typescript and Solidity
						</span>
						. I enjoy tackling complex challenges and creating scalable,
						efficient applications. I’m excited to bring my expertise to
						forward-thinking teams and contribute to meaningful projects in
						today’s fast-moving landscape.
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
								Secondary Education - GCSE&apos;s
							</div>
						</div>
						<br />
						<div className="text-white underline font-bold">
							12 GCSE&apos;s (A*-B).
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
							Secondary Education - A Level&apos;s
						</div>

						<br />
						<div className="text-white text-right">
							<span className="underline font-bold">A*AA</span> in Mathematics,
							Computer Science and Chemistry.
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
						<div className="font-bold text-white">
							Royal Holloway, University of London
						</div>
						<div className="font-bold text-white">Undergraduate Degree</div>

						<br />
						<div className="text-white">
							BSc in Computer Science with a{" "}
							<span className="underline font-bold">First Class Honours</span>{" "}
							and an overall average of{" "}
							<span className="underline font-bold">81%</span>.
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
							Imperial College London
						</div>
						<div className="font-bold text-white text-right">
							Postgraduate Degree
						</div>

						<br />
						<div className="text-white text-right">
							MSc in Computing (Security & Reliability) with a{" "}
							<span className="underline font-bold">Distinction.</span>
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
							<span className="underline font-bold">Comptia Security+</span> and{" "}
							<span className="underline font-bold">Google Cyber Security</span>
							.
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 text-center mx-auto  mb-10 max-w-6xl">
				<div className="space-y-4">
					<h3 className="text-2xl font-bold leading-tight text-white">
						Blind Backrunning With Fully Homomorphic Encryption
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-400 text-center mx-auto">
						This protocol utilises Fully Homomorphic Encryption (FHE) to enable
						searchers to blindly backrun private user transactions on
						decentralised exchanges on the Ethereum blockchain.
					</p>
					<a
						href="https://github.com/MajedAlthonayan/FHEBackrun"
						title=""
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 justify-center inline-flex items-center focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						role="button"
					>
						View Code
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
					<h3 className="text-2xl font-bold leading-tight text-white">
						Brain Graph Prediction Using Generative GNN&apos;s
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-400 text-center mx-auto">
						This machine learning model leverages the capabilities of generative
						Graph Neural Networks (GNNs) to predict high-resolution brain MRIs
						from their low-resolution counterparts.
					</p>

					<a
						href="https://github.com/MajedAlthonayan/GenerativeGNN"
						title=""
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 justify-center inline-flex items-center focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						role="button"
					>
						View Code
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
					<h3 className="text-2xl font-bold leading-tight text-white">
						Neural Network for California House Price Prediction
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-400 text-center mx-auto">
						This project implements a custom, low-level implementation of a
						multi-layered neural network, built from scratch and incorporating a
						backpropagation algorithm to predict house prices in California.
						This model was developed entirely from scratch, without relying on
						any external machine learning libraries.
					</p>
					<a
						href="https://github.com/MajedAlthonayan/NeuralNetwork"
						title=""
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 justify-center inline-flex items-center focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						role="button"
					>
						View Code
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
					<h3 className="text-2xl font-bold leading-tight text-white">
						Decision Tree for Location Detection Using Wi-Fi Signal Strengths
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-400 text-center mx-auto">
						A decision tree algorithm designed to accurately determine indoor
						locations by analysing Wi-Fi signal strengths collected from a
						mobile phone. This approach leverages the unique signal profiles to
						provide precise location estimations within indoor environments.
					</p>

					<a
						href="https://github.com/MajedAlthonayan/DecisionTrees"
						title=""
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 justify-center inline-flex items-center focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						role="button"
					>
						View Code
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
					<h3 className="text-2xl font-bold leading-tight text-white">
						On-Chain Ticketing Service using NFTs
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-400 text-center mx-auto">
						This on-chain ticketing service consists of three core components: a
						non-fungible token (NFT) contract that defines the ticket logic, a
						primary marketplace where users can create tickets by deploying new
						instances of the NFT contract, and a secondary marketplace that
						allows users to sell and place bids for re-sold tickets.
					</p>
					<a
						href="https://github.com/MajedAlthonayan/BlockchainTicketing"
						title=""
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 justify-center inline-flex items-center focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						role="button"
					>
						View Code
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
					<h3 className="text-2xl font-bold leading-tight text-white">
						PCAP Visualiser for Improved Network Traffic Analysis
					</h3>
					<p className="text-lg max-w-md font-normal text-gray-400 text-center mx-auto">
						A packet visualiser which enhances the traditional Wireshark user
						interface by providing advanced filtering and grouping capabilities,
						enabling users to conduct more efficient analysis of network
						traffic.
					</p>

					<a
						href="https://github.com/MajedAlthonayan/PCAP-Visualiser"
						title=""
						target="_blank"
						rel="noopener noreferrer"
						className="text-white bg-[#121212] text-[#FFFFFF] font-bold shadow-lg hover:bg-[#2D2D2D] hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 justify-center inline-flex items-center focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
						role="button"
					>
						View Code
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
			<div className="flex justify-center">
				<div className="text-center">
					<p className="text-[#FFFFFF] mb-10 text-2xl">
						Check out some of my other projects on{" "}
						<a
							href="https://github.com/MajedAlthonayan/"
							target="_blank"
							rel="noopener noreferrer"
							className="font-bold underline"
						>
							GitHub
						</a>
					</p>
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
							<FaDocker size={50} />
							<p className="text-white font-bold">Docker</p>
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
							<SiPandas size={50} />
							<p className="text-white font-bold">Pandas</p>
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
							<FaAws size={50} />
							<p className="text-white font-bold">AWS</p>
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
							<SiKubernetes size={50} />
							<p className="text-white font-bold">Kubernetes</p>
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
					<p className="text-md mb-10 text-[#FFFFFF]">By Majed (me) 😁</p>
					<p className="text-[#FFFFFF] mb-10">
						A template of this portfolio can also be found on my{" "}
						<a
							href="https://github.com/MajedAlthonayan/24Portfolio"
							target="_blank"
							rel="noopener noreferrer"
							className="font-bold underline"
						>
							GitHub
						</a>
					</p>
				</div>
			</div>
		</main>
	);
}
