// Class Component
// ===============
// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<p>This is our first component.</p>
// 			</div>
// 		);
// 	}
// }

// Function Component
// ==================

function Hello() {
	return (
		<div>
			<h1>Hello there!</h1>
			<p>This is our first component.</p>
		</div>
	)
}

ReactDOM.render(<Hello />, document.getElementById('root'))