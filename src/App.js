import React, { Component, Suspense } from 'react';
const Example = React.lazy(() => import('./components/Example'));
class App extends Component {
	render() {
		return (
			<Suspense fallback={<div>Loading...</div>}>
				<Example />
			</Suspense>
		);
	}
}

export default App;
