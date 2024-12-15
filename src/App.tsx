import './App.css';
// import Sidebar from './components/custom/sidebar';
import { Text, Grid, Separator, Stack, HStack } from '@chakra-ui/react';
import TechIcon from './components/custom/techicon';
import Spinner from './components/custom/spinner';
import CenterBox from './components/custom/centerbox';
import { Cell, Tooltip, BarChart, XAxis, YAxis, Bar } from 'recharts';
import { useEffect, useState } from 'react';
//import * as wakatime from './utils.js';

async function getAllTimeSinceToday() {
	const response = await fetch(
		'https://wakatime.com/share/@59402cab-1799-4733-b30d-ec5d8ed0a7c9/69dd4ca1-3a95-49d1-910b-85cab2183232.json'
	);
	return response.json();
}

// const darkbrown = '#1a1a1a';
const brown = '#2f1c18';
const white = '#E5E5E5';
const magenta = '#BE2178';
//const blue = '#9CD9EE';
const red = '#D02E08';
const orange = '#FD972B';
const pink = '#F67B7E';
const chartColors = [orange, red, magenta, pink];

function App() {
	const [langData, setLangData] = useState([]);
	const [maxHours, setMaxHours] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllTimeSinceToday();
			setLangData(res.data.slice(0, 5));
			console.log(res.data[0]['decimal']);
			setMaxHours(res.data[0]['decimal']);
		};
		fetchData();
	}, []);

	const CustomTooltip = ({
		active,
		payload,
		label,
	}: {
		active: any;
		payload: any;
		label: any;
	}) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="label">{`${label} : ${payload[0].value}`}</p>
					<p className="intro">{`huh?`}</p>
					<p className="desc">
						Anything you want can be displayed here.
					</p>
				</div>
			);
		}

		return null;
	};

	function DashedSeparator() {
		return <Separator flex="1" borderColor={white} variant={'dashed'} />;
	}

	return (
		<>
			<Spinner></Spinner>

			{/* <Container hideBelow="md">
				<Sidebar></Sidebar>
			</Container> */}
			<br></br>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>
			<h1>Caleb Rector</h1>
			<br />
			<CenterBox title="">
				<p>
					GitHub:{' '}
					<a href="https://github.com/carector">
						github.com/carector
					</a>
				</p>
				<p>
					LinkedIn:{' '}
					<a href="https://linkedin.com/in/caleb-rector">
						linkedin.com/in/caleb-rector
					</a>
				</p>
				<p>
					Creative projects:{' '}
					<a href="https://noise.town">noise.town</a>
				</p>
			</CenterBox>
			<CenterBox title="Skills" dotted>
				<Stack>
					<HStack>
						<Text flexShrink="0">Languages</Text>
						<DashedSeparator />
					</HStack>
					{/* <p style={{ textAlign: 'center' }}>Languages</p> */}
					<Grid
						templateRows="repeat(1, 1fr)"
						templateColumns="repeat(9, 1fr)"
					>
						<TechIcon name="csharp-plain" tooltip='C#' />
						<TechIcon name="javascript-plain" tooltip='JavaScript' />
						<TechIcon name="typescript-plain" tooltip='TypeScript' />
						<TechIcon name="python-plain" tooltip='Python' />
						<TechIcon name="java-plain" tooltip='Java' />
						<TechIcon name="html5-plain" tooltip='HTML5' />
						<TechIcon name="css3-plain" tooltip='CSS' />
						<TechIcon name="json-plain" tooltip='JSON' />
						<TechIcon name="cplusplus-plain" tooltip='C++' />
					</Grid>
					<HStack>
						<Text flexShrink="0">Technologies</Text>
						<DashedSeparator />
					</HStack>
					<Grid
						templateRows="repeat(1, 1fr)"
						templateColumns="repeat(9, 1fr)"
					>
						<TechIcon name="react-plain" tooltip='React.js' />
						<TechIcon name="express-original" tooltip='Express.js' />
						<TechIcon name="vite-plain" tooltip='Vite' />
						<TechIcon name="git-plain" tooltip='Git' />
						<TechIcon name="github-plain" tooltip='GitHub' />
						<TechIcon name="jira-plain" tooltip='Jira' />
						<TechIcon name="postman-plain" tooltip='Postman' />
						<TechIcon name="figma-plain" tooltip='Figma' />
						<TechIcon name="cloudflare-plain" tooltip='Cloudflare' />
						<TechIcon name="axios-plain" tooltip='Axios' />
						<TechIcon name="mysql-plain" tooltip='MySQL' />
						<TechIcon name="antdesign-plain" tooltip='Ant Design' />
						<TechIcon name="amazonwebservices-plain" tooltip='Amazon Web Services' />
						<TechIcon name="firebase-plain" tooltip='Firebase' />
						<TechIcon name="docker-plain" tooltip='Docker' />
						<TechIcon name="swagger-plain" tooltip='Swagger.js' />
						<TechIcon name="dotnetcore-plain" tooltip='.NET Core' />
						<TechIcon name="electron-original" tooltip='Electron' />
					</Grid>
					<HStack>
						<Text flexShrink="0">Software</Text>
						<DashedSeparator />
					</HStack>
					{/* <p style={{ textAlign: 'center' }}>Languages</p> */}
					<Grid
						templateRows="repeat(1, 1fr)"
						templateColumns="repeat(7, 1fr)"
					>
						<TechIcon name="unity-plain" tooltip='Unity' />
						<TechIcon name="windows8-plain" tooltip='Windows' />
						<TechIcon name="linux-plain" tooltip='Linux' />
						<TechIcon name="vscode-plain" tooltip='Visual Studio Code' />
						<TechIcon name="visualstudio-plain" tooltip='Visual Studio' />
						<TechIcon name="blender-original" tooltip='Blender' />
						<TechIcon name="arduino-plain" tooltip='Arduino' />
					</Grid>
				</Stack>
			</CenterBox>
			<CenterBox title="Work breakdown (hours this week)">
				<BarChart width={500} height={300} data={langData}>
					<XAxis stroke={white} dataKey="name" />
					<YAxis
						type="number"
						stroke={white}
						dataKey="decimal"
						range={[0, maxHours]}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: brown,
							borderColor: 'black',
							borderRadius: '8px',
						}}
					/>
					<Bar dataKey="decimal" fill={chartColors[0]}>
						{langData.map((_entry: any, index: any) => (
							<Cell
								key={`cell-${index}`}
								fill={chartColors[index % chartColors.length]}
							/>
						))}
					</Bar>
				</BarChart>
				<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
					Stats powered by{' '}
					<a href="https://wakatime.com/dashboard">WakaTime</a>
				</p>
			</CenterBox>
			<CenterBox title="About me">
				<p>
					I'm a recent college graduate from the Greater Seattle Area
					specializing in full-stack web development. I'm currently in
					pursuit of full-time and contract work.
				</p>
				<br />
				<p>
					I'm most interested in backend web development jobs.
					I have 1 year of professional experience with Express.js and would
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
		</>
	);
}

export default App;
