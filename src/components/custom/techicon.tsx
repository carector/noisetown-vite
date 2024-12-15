import { Tooltip } from "@/components/ui/tooltip"

function TechIcon({ name, tooltip }: { name: string, tooltip: string }) {
	const url = `devicon-${name} colored`;
	return (
		<div>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>
			<Tooltip content={tooltip} showArrow openDelay={100} closeDelay={100} positioning={{ placement: 'top' }} interactive>
				<i style={{ fontSize: 48, margin: 10 }} className={url}></i>
			</Tooltip>
		</div>
	);
}

export default TechIcon;
