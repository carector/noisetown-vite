import '../.././App.css';
import { Box, Card, Container, Heading, Spacer, Text } from '@chakra-ui/react';

interface CenterCardProps {
	title: string;
	dotted?: boolean;
	children?: React.ReactNode;
}

const yellow = '#FD972B';
const orange = '#DD4624';
const white = '#E5E5E5';
const purple = '#E5E5E5';

function CenterBox({ title, dotted, children }: CenterCardProps) {
	return (
		<>
			<Container
				alignItems={'left'}
				padding={0}
				fluid={true}
				maxW={{ md: 'xl', mdDown: '100vw' }}
			>
				<Heading
					padding={3}
					textAlign="left"
					size="xl"
					color={dotted ? orange : white}
					fontWeight={'normal'}
				>
					{title}
				</Heading>
				<Box
					border={dotted ? `1px dashed ${orange}` : '2px solid black'}
					css={{
						'background-color': '#3C2925',
						'color': white,
						'borderRadius': 5,
					}}
				>
					<Container padding={5} textAlign={'left'} fluid={true}>
						{children}
					</Container>
					{/* <Text whiteSpace="pre-line" fontSize="lg" textAlign={'left'} padding={5}>

					</Text> */}
				</Box>
			</Container>
		</>
	);
}

export default CenterBox;
