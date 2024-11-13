import { Tabs } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

function Sidebar() {
	return (
		<>
			<Card.Root>
				<Tabs.Root>
					<Tabs.List gap="2">
						<Tabs.Trigger value="wanna">Wanna</Tabs.Trigger>
						<Tabs.Trigger value="try">Try</Tabs.Trigger>
						<Tabs.Trigger value="drugs">Drugs</Tabs.Trigger>
					</Tabs.List>
				</Tabs.Root>
			</Card.Root>
		</>
	);
}

export default Sidebar;
