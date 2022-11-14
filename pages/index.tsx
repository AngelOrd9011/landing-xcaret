import { useEffect } from 'react';
import PageHeader from '../componentes/layout/PageHeader';
import PageFooter from '../componentes/layout/PageFooter';
import Landing from './Landing';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setLanguage } from '../redux/slices/languageSlice';

const Home = ({ language }: any) => {
	const dispatch = useAppDispatch();
	const lang = useAppSelector((state) => state.language);

	useEffect(() => {
		dispatch(setLanguage(language));
	}, []);

	return (
		<div className="container mx-auto px-4 flex min-h-screen flex-col">
			<PageHeader lang={lang} />
			<Landing lang={lang} />
			<PageFooter lang={lang} />
		</div>
	);
};

export const getStaticProps = async () => {
	const language = await fetch('http://localhost:3000/api/language', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json', Accept: '*/*' }),
		mode: 'cors',
		cache: 'no-cache',
		body: JSON.stringify({ lang: 'es' }),
	}).then((data) => data.json());
	return {
		props: {
			language,
		},
	};
};

export default Home;
