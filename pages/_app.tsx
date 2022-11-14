import '../styles/globals.css';
import 'primeflex/primeflex.css';
import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

MyApp.getInitialProps = async (appContext: AppContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};

export default MyApp;
