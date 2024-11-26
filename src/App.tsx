import './App.css';
import Sidebar from './components/custom/sidebar';
import { Container } from '@chakra-ui/react';
//import Spinner from './components/custom/spinner';
import CenterBox from './components/custom/centerbox';
import { Cell, Tooltip, BarChart, XAxis, Bar } from 'recharts';
import { useEffect, useState } from 'react';
//import * as wakatime from './utils.js';

async function getAllTimeSinceToday() {
	const response = await fetch(
		'https://wakatime.com/share/@59402cab-1799-4733-b30d-ec5d8ed0a7c9/69dd4ca1-3a95-49d1-910b-85cab2183232.json'
	);
	return response.json();
}

const white = '#E5E5E5';
const magenta = '#BE2178';
//const blue = '#9CD9EE';
const red = '#D02E08';
const orange = '#FD972B';
const pink = '#F67B7E';
const chartColors = [orange, red, pink, magenta];

function App() {
	const [langData, setLangData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllTimeSinceToday();
			setLangData(res.data.slice(0, 5));
		}
		fetchData();
	}, []);

	return (
		<>
			{/* <Spinner></Spinner> */}

			<Container hideBelow="md">
				<Sidebar></Sidebar>
			</Container>
			<br></br>
			<CenterBox title="About me">
				<p>
					I'm a recent college graduate from the Greater Seattle Area
					specializing in full-stack web development. I'm currently in
					pursuit of full-time and contract work.
				</p>
				<br />
				<p>
					I'm most interested in backend web development roles. I have
					1 year of professional experience with Express.js and would
					be comfortable working in any JavaScript or TypeScript role.
					Technologies I worked with extensively at my most recent
					position include React.js, AWS, Postman, and Jira.
				</p>
				<br />
				<p>
					On top of my professional work, I also have over 10 years of
					personal experience with C# and Unity 3D, and have
					contributed to 3D, 2D, and VR/AR projects. I've notably used
					these skills to lead a team through several major game jam
					competitions, where we consistently ranked within the top 1%
					of all submissions (5000+).
				</p>
				<br />
				<p>
					When I'm not programming I like to take field recordings,
					make electronic music and tinker with synthesizer hardware.
					I love experimenting with anything audio-related - it's
					probably what I'd be doing if I didn't have all this code to
					write!
				</p>
				<br />
				<p>
					I'm always on the lookout for new projects I can contribute
					to, and I'd love to be a part of yours.
					<a href="mailto:calebrector77@gmail.com">
						{' '}
						Reach out to me here
					</a>{' '}
					if you'd like to connect or grab a cup of coffee. Let's
					build something together!
				</p>
			</CenterBox>
			<CenterBox title="Skills and technologies" dotted>
				<p>
					C#, Unity, JavaScript, TypeScript, Python, React.js,
					Express.js, AWS, Firebase, Vite, C++, Java, HTML, CSS, Jira,
					Git, GitHub, JSON, Electron, and more
				</p>
			</CenterBox>
			<CenterBox title="Work breakdown (past week)">
				<BarChart width={500} height={300} data={langData}>
					<XAxis stroke={white} dataKey="name" />
					<Tooltip />
					<Bar dataKey="decimal" fill={chartColors[0]}>
						{langData.map((_entry: any, index: any) => (
							<Cell
								key={`cell-${index}`}
								fill={chartColors[index % chartColors.length]}
							/>
						))}
					</Bar>
				</BarChart>
				<p>
					Powered by{' '}
					<a href="https://wakatime.com/dashboard">WakaTime</a>
				</p>
			</CenterBox>
		</>
	);
}

export default App;
