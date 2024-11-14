import './App.css';
import Sidebar from './components/custom/sidebar';
import {
	Container,
	Card,
	Box,
	SimpleGrid,
	Center,
	AspectRatio,
	Separator,
} from '@chakra-ui/react';
import Spinner from './components/custom/spinner';
import CenterBox from './components/custom/centerbox';

function App() {
	return (
		<>
			<Spinner></Spinner>
			<Container hideBelow="md">
				<Sidebar></Sidebar>
			</Container>
			<br></br>
			<CenterBox title="About me">
				<p>Welcome to my page! I'm a recent college graduate and full-stack web developer living in the Greater Seattle Area. On top of 18 months of professional experience, I also have over 10 years of personal experience developing .net C# applications - including desktop and VR/AR work in Unity 3D.</p>
			</CenterBox>
			<CenterBox title="Skills and technologies">
				<p>C#, Unity, JavaScript, TypeScript, Python, React.js, Express.js, AWS, Google Firebase,
					Vite, C++, Java, HTML, CSS, Jira, Git, GitHub, R, JSON, Electron, and more
				</p>
			</CenterBox>
			<CenterBox title="Lookit this" dotted={true}>
				Wowza!
			</CenterBox>
		</>
	);
}

export default App;
