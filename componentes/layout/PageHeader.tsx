import Head from 'next/head';
import { useAppDispatch } from '../../redux/hooks';
import { setLanguage } from '../../redux/slices/languageSlice';

const PageHeader = ({ lang }: any) => {
	const dispatch = useAppDispatch();

	const changeLanguage = async (lang: string) => {
		const language = await fetch('http://localhost:3000/api/language', {
			method: 'POST',
			headers: new Headers({ 'Content-Type': 'application/json', Accept: '*/*' }),
			mode: 'cors',
			cache: 'no-cache',
			body: JSON.stringify({ lang }),
		}).then((data) => data.json());
		dispatch(setLanguage(language));
	};

	return (
		<>
			<Head>
				<title>{lang.data?.header?.h1}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className="header-menu">
				<div>
					<img src={lang.data?.navbar?.logo} alt="logo" />
				</div>
				<div className="menu text-right">
					<a href={'#' + lang?.data?.navbar?.menu?.contact}>
						<span className="text-xs">{lang?.data?.navbar?.menu?.contact.toUpperCase()}</span>
					</a>
					-
					<button className="text-xs" onClick={() => changeLanguage(lang.data?.navbar?.menu?.lang?.title)}>
						{lang.data?.navbar?.menu?.lang?.title.toUpperCase()}
					</button>
					-
					<select className="text-xs">
						{lang.data?.navbar?.menu?.currency.map((item: any, index: number) => {
							return (
								<option key={index} value={item}>
									{item.toUpperCase()}
								</option>
							);
						})}
					</select>
				</div>
			</nav>
			<div className="header flex flex-1 flex-col items-center justify-center">
				<div className="title">
					<h1>{lang.data?.header?.h1.toUpperCase()}</h1>
					<div className="grid h-content">
						<div className="discount flex flex-1 flex-col items-center justify-center col-12 md:col-3">
							<h1>{lang.data?.header?.discount}</h1>
						</div>
						<div className="p-header col-12 md:col-9">
							{/* <p>{lang.data?.header?.paragraphs[0]}</p> */}
							<p>
								{lang.data?.header?.paragraphs.map((item: any, index: number) => {
									return <span key={index}>{item + ' '}</span>;
								})}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageHeader;
