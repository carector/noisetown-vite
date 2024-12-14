function TechIcon({ name }: { name: string }) {
	const url = `devicon-${name}-plain colored`;
	return (
		<>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
			/>
			<i style={{ fontSize: 48, margin: 10 }} className={url}></i>
		</>
	);
}

export default TechIcon;
