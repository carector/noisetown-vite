import './App.css';
import { Text, Separator, Stack, HStack, Tabs, Flex } from '@chakra-ui/react';
import TechIcon from './components/custom/techicon';
import Spinner from './components/custom/spinner';
import CenterBox from './components/custom/centerbox';
import {
	Cell,
	Tooltip,
	TooltipProps,
	BarChart,
	XAxis,
	//YAxis,
	Bar,
	ResponsiveContainer,
} from 'recharts';
import {
	ValueType,
	NameType,
} from 'recharts/types/component/DefaultTooltipContent';
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
	//const [maxHours, setMaxHours] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getAllTimeSinceToday();
			setLangData(res.data.slice(0, 5));
			//console.log(res.data);
			//setMaxHours(res.data[0]['decimal']);
			console.log(res.data[0]['decimal']);
		};
		fetchData();
	}, []);

	function getTextFromLangEntry(name: string) {
		const e = langData.find((element) => element['name'] == name);
		if (e === undefined) return 'N/A';
		return e['text'];
	}

	const WakatimeTooltip = ({
		active,
		payload,
		label,
	}: TooltipProps<ValueType, NameType>) => {
		if (active && payload && payload.length) {
			return (
				<div
					className="custom-tooltip"
					style={{
						// TODO - look into recharts css file, these classes should all be defined
						backgroundColor: brown,
						border: '2px',
						borderStyle: 'solid',
						borderColor: 'black',
						borderRadius: '8px',
						padding: '6px',
					}}
				>
					<p className="label">
						<b>{label}</b>
					</p>
					<p className="intro">{getTextFromLangEntry(label)}</p>
				</div>
			);
		}

		return null;
	};

	function DashedSeparator() {
		return <Separator flex="1" borderColor={white} variant={'dashed'} />;
	}

	return (
		<div style={{ verticalAlign: 'top' }}>
			<link rel="icon" type="image/x-icon" href="./assets/favicon.ico" />
			<Spinner></Spinner>
			<br></br>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>
			<h1>Caleb Rector</h1>
			<br />

			{/* <Container hideBelow="md">
			</Container> */}

			<Tabs.Root
				defaultValue="work"
				variant={'line'}
				fitted
				lazyMount
				unmountOnExit
			>
				<Tabs.List gap="2">
					<Tabs.Trigger value="work">Work</Tabs.Trigger>
					{/* <Tabs.Trigger value="projects">Projects</Tabs.Trigger> */}
					<Tabs.Trigger value="about">About</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content
					value="work"
					_open={{
						animationName: 'fade-in, scale-in',
						animationDuration: '300ms',
					}}
					_closed={{
						animationName: 'fade-out, scale-out',
						animationDuration: '120ms',
					}}
				>
					<CenterBox title="Unity Portfolio">
						<iframe
							width="100%"
							height="480"
							src="https://www.youtube.com/embed/aCm-gKr2SzQ?si=T93TEwMWz3Yl7z08&amp;controls=0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</CenterBox>
					<CenterBox title="Activity this week">
						<ResponsiveContainer width="90%" height={300}>
							<BarChart width={500} height={300} data={langData} maxBarSize={70}>
								<XAxis stroke={white} dataKey="name" />
								{/* <YAxis
									type="number"
									stroke={white}
									dataKey="decimal"
									range={[0, maxHours]}
								/> */}
								<Tooltip content={<WakatimeTooltip />} />
								<Bar dataKey="decimal" fill={chartColors[0]}>
									{langData.map((_entry: any, index: any) => (
										<Cell
											key={`cell-${index}`}
											fill={
												chartColors[
													index % chartColors.length
												]
											}
										/>
									))}
								</Bar>
							</BarChart>
						</ResponsiveContainer>
						<p style={{ fontStyle: 'italic', textAlign: 'center' }}>
							Stats powered by{' '}
							<a href="https://wakatime.com/dashboard">
								WakaTime
							</a>
						</p>
					</CenterBox>
				</Tabs.Content>
				{/* <Tabs.Content
					value="projects"
					_open={{
						animationName: 'fade-in, scale-in',
						animationDuration: '300ms',
					}}
					_closed={{
						animationName: 'fade-out, scale-out',
						animationDuration: '120ms',
					}}
				>
					<CenterBox title="2024"></CenterBox>
					<CenterBox title="2023"></CenterBox>
					<CenterBox title="2022"></CenterBox>
					<CenterBox title="2021"></CenterBox>
					<CenterBox title="2020"></CenterBox>

				</Tabs.Content> */}
				<Tabs.Content
					value="about"
					_open={{
						animationName: 'fade-in, scale-in',
						animationDuration: '300ms',
					}}
					_closed={{
						animationName: 'fade-out, scale-out',
						animationDuration: '120ms',
					}}
				>
					<CenterBox title="About me">
						<p>
							I'm a recent college graduate from the Greater
							Seattle Area specializing in full-stack web
							development. I'm currently in pursuit of full-time
							and contract work. Nice to meet you!
						</p>
						<br />
						<p>
							Backend web development is my specialty, and with my
							work experience I would be comfortable at any C#,
							JavaScript, or Python role. Technologies I worked
							with extensively at my most recent full stack
							position include Express.js, AWS, Postman, and Jira.
						</p>
						<br />
						<p>
							On top of my professional work, I also have over 10
							years of personal experience with C#.NET and Unity
							3D, and have contributed to 3D, 2D, and VR/AR
							projects. From 2020 - 2023 I notably used these
							skills to contribute to licensed WebGL titles, many
							of which were ranked within the top 1% of entries to
							major awards and competitions.
						</p>
						<br />
						<p>
							When I'm not programming I like to take field
							recordings, make electronic music and tinker with
							synthesizer hardware. I love experimenting with
							anything audio-related - it's probably what I'd be
							doing if I didn't have all this code to write!
						</p>
						<br />
						<p>
							I'm always on the lookout for new projects I can
							contribute to, and I'd love to be a part of yours.
							Feel free to reach out to me below if you'd like to
							connect or schedule a meeting.
						</p>
						<br />
						<Flex
							display="flex"
							flexWrap="wrap"
							gap="2"
							placeContent={'center'}
						>
							<a href="mailto:calebrector77@gmail.com">Email</a>
							<p>•</p>
							<a href="https://github.com/carector">GitHub</a>
							<p>•</p>
							<a href="https://linkedin.com/in/caleb-rector">
								LinkedIn
							</a>
						</Flex>
					</CenterBox>
					<CenterBox title="Skills" dotted>
						<Stack>
							<HStack>
								<Text flexShrink="0">Languages</Text>
								<DashedSeparator />
							</HStack>
							{/* <p style={{ textAlign: 'center' }}>Languages</p> */}
							<Flex
								display="flex"
								flexWrap="wrap"
								placeContent={'center'}
								gap="1"
							>
								<TechIcon name="csharp-plain" tooltip="C#" />
								<TechIcon
									name="javascript-plain"
									tooltip="JavaScript"
								/>
								<TechIcon
									name="typescript-plain"
									tooltip="TypeScript"
								/>
								<TechIcon
									name="python-plain"
									tooltip="Python"
								/>
								<TechIcon name="java-plain" tooltip="Java" />
								<TechIcon name="html5-plain" tooltip="HTML5" />
								<TechIcon name="css3-plain" tooltip="CSS" />
								<TechIcon name="json-plain" tooltip="JSON" />
								<TechIcon
									name="cplusplus-plain"
									tooltip="C++"
								/>
							</Flex>
							<HStack>
								<Text flexShrink="0">Technologies</Text>
								<DashedSeparator />
							</HStack>
							<Flex
								display="flex"
								flexWrap="wrap"
								placeContent={'center'}
								gap="1"
							>
								<TechIcon
									name="react-plain"
									tooltip="React.js"
								/>
								<TechIcon
									name="express-original"
									tooltip="Express.js"
								/>
								<TechIcon name="vite-plain" tooltip="Vite" />
								<TechIcon name="git-plain" tooltip="Git" />
								<TechIcon
									name="github-plain"
									tooltip="GitHub"
								/>
								<TechIcon name="jira-plain" tooltip="Jira" />
								<TechIcon
									name="postman-plain"
									tooltip="Postman"
								/>
								<TechIcon name="figma-plain" tooltip="Figma" />
								<TechIcon
									name="cloudflare-plain"
									tooltip="Cloudflare"
								/>
								<TechIcon name="axios-plain" tooltip="Axios" />
								<TechIcon name="mysql-plain" tooltip="MySQL" />
								<TechIcon
									name="antdesign-plain"
									tooltip="Ant Design"
								/>
								<TechIcon
									name="amazonwebservices-plain"
									tooltip="Amazon Web Services"
								/>
								<TechIcon
									name="firebase-plain"
									tooltip="Firebase"
								/>
								<TechIcon
									name="docker-plain"
									tooltip="Docker"
								/>
								<TechIcon
									name="swagger-plain"
									tooltip="Swagger.js"
								/>
								<TechIcon
									name="dotnetcore-plain"
									tooltip=".NET Core"
								/>
								<TechIcon
									name="electron-original"
									tooltip="Electron"
								/>
							</Flex>
							<HStack>
								<Text flexShrink="0">Software</Text>
								<DashedSeparator />
							</HStack>
							<Flex
								display="flex"
								flexWrap="wrap"
								placeContent={'center'}
								gap="1"
							>
								<TechIcon name="unity-plain" tooltip="Unity" />
								<TechIcon
									name="windows8-plain"
									tooltip="Windows"
								/>
								<TechIcon name="linux-plain" tooltip="Linux" />
								<TechIcon
									name="vscode-plain"
									tooltip="Visual Studio Code"
								/>
								<TechIcon
									name="visualstudio-plain"
									tooltip="Visual Studio"
								/>
								<TechIcon
									name="blender-original"
									tooltip="Blender"
								/>
								<TechIcon
									name="arduino-plain"
									tooltip="Arduino"
								/>
							</Flex>
						</Stack>
					</CenterBox>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	);
}

export default App;
