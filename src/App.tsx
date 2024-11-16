import './App.css';
import Sidebar from './components/custom/sidebar';
import {
	Container
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
				<p>
					Welcome to my page! I'm a recent college graduate and full-stack web developer living in the Greater Seattle Area.</p>
				<br /><p>
					I'm most interested in backend web development roles. I've worked extensively with Express.js and would be comfortable working in any JavaScript or TypeScript role.
					I also have over 10 years of personal experience with C# and Unity 3D, and have contributed to 3D, 2D, and VR/AR projects.</p>
				<br /><p>
					On top of 18 months of professional experience, I also have over 10 years of personal experience developing .net C# applications - including both desktop and VR/AR work in Unity 3D.</p>
				<br /><p>
					When I'm not programming I like to take field recordings, make electronic music and tinker with synthesizer hardware.
					
				</p>
			</CenterBox>
			<CenterBox title="Skills and technologies">
				<p>C#, Unity, JavaScript, TypeScript, Python, React.js, Express.js, AWS, Google Firebase,
					Vite, C++, Java, HTML, CSS, Jira, Git, GitHub, JSON, Electron, and more
				</p>
			</CenterBox>
			<CenterBox title="Lookit this" dotted>
				Wowza!
			</CenterBox>
		</>
	);
}

export default App;
