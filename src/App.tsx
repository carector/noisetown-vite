import './App.css';
import Sidebar from './components/custom/sidebar';
import {
	Container,
	Card,
	Box,
	SimpleGrid,
	Center,
	AspectRatio,
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
			
			<CenterBox title="Hey now">
				<p>Don't even THINK about it man</p>
				<br />
				<p>
					Ohhh you're thinking about
					itddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
				</p>
			</CenterBox>
			<CenterBox title="Lookit this" dotted={true}></CenterBox>
		</>
	);
}

export default App;
