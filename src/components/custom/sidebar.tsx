import { Tabs } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

function Sidebar() {
	return (
		<>
			<Card.Root>
				<Tabs.Root variant={'enclosed'} fitted css={{
					'background-color': 'clear'
				}}>
					<Tabs.List gap="2">
						<Tabs.Trigger value="About">About</Tabs.Trigger>
						<Tabs.Trigger value="Projects">Projects</Tabs.Trigger>
						<Tabs.Trigger value="Personal">Personal</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
			</Card.Root>
		</>
	);
}

export default Sidebar;
