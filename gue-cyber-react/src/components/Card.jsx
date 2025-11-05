// Material Design Card component
export default function Card({ children, style = {}, ...props }) {
	return (
		<div
			className="card"
			style={{
				borderRadius: 16,
				boxShadow: "0 2px 8px rgba(66,128,236,0.10)",
				background: "var(--card-bg)",
				transition: "box-shadow 0.3s, transform 0.2s",
				...style
			}}
			{...props}
		>
			{children}
		</div>
	);
}
