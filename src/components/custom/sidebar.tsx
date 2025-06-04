import { Tabs } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

const white = '#E5E5E5';

const tabStyle = {
	background: 'none',

}

function Sidebar() {
	return (
		<>
			<Tabs.Root defaultValue="work" variant={'line'} fitted>
				<Tabs.List gap="2">
					<Tabs.Trigger value="work" css={tabStyle}>Work</Tabs.Trigger>
					<Tabs.Trigger value="projects" css={tabStyle}>Projects</Tabs.Trigger>
					<Tabs.Trigger value="about" css={tabStyle}>About</Tabs.Trigger>
				</Tabs.List>
			</Tabs.Root>
		</>
	);
}

export default Sidebar;
