import { Image } from '@chakra-ui/react';
import orangeCirc from '../../assets/bg_orange_circle.svg';
import '../.././App.css';

function Spinner() {
	return (
			<Image
				style={{
					position: 'fixed',
					margin: 'auto',
					left: 0,
					right: 0,
					zIndex: -1,
					top: '55%',
					width: '80%',
					maxWidth: '600',
					animation: `spin 3s linear infinite`,
				}}
				src={orangeCirc}
			/>
	);
}

export default Spinner;
