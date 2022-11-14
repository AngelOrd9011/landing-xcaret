import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const PageFooter = ({ lang }: any) => {
	const [numbers, setNumbers] = useState([]);
	const [mainNumbers, setMainNumbers] = useState([]);

	useEffect(() => {
		let _mainNumbers = lang?.data?.prefooter?.numbers.filter((item: any) => item.main === true);
		let _numbers = lang?.data?.prefooter?.numbers.filter((item: any) => item.main !== true);
		setNumbers(_numbers);
		setMainNumbers(_mainNumbers);
	}, [lang]);

	const NumbersTemplate = (item: any) => {
		return (
			<div>
				<span>{item.name} </span>
				<br />
				<a href={item?.href}>{item?.number}</a>
			</div>
		);
	};

	return (
		<footer id={lang?.data?.navbar?.menu?.contact}>
			<div className="grid legals">
				<div className="col-12 md:col-6 md:col-offset-2 ">
					<p>{lang?.data?.legals}</p>
				</div>
			</div>
			<div className="grid pre-footer">
				<div className="col-12 md:col-8 md:col-offset-2 ">
					<div className="grid">
						<div className="col-12 md:col-6">
							<span>{lang?.data?.prefooter?.contactCenter?.title}</span>
							<br />
							<span>{lang?.data?.prefooter?.contactCenter?.email}</span>
						</div>
						<IconContext.Provider value={{ size: '1.3rem' }}>
							<div className="col-12 md:col-6 social">
								<a className="facebook" href={lang?.data?.prefooter?.social?.facebookUrl}>
									<FaFacebookF />
								</a>
								<a className="instagram" href={lang?.data?.prefooter?.social?.instagramUrl}>
									<BsInstagram />
								</a>
								<a className="twitter" href={lang?.data?.prefooter?.social?.twitterUrl}>
									<BsTwitter />
								</a>
							</div>
						</IconContext.Provider>
					</div>
					<div className="grid col-12 md:col-6 numbers-menu">
						{mainNumbers?.map((item: any) => {
							return (
								<div className="col-6 md:col-3" key={item.name}>
									{NumbersTemplate(item)}
								</div>
							);
						})}
						<div className="col-6 md:col-3">
							<select name="other-numbers">
								{numbers?.map((item: any) => (
									<option key={item.name} value={item.name}>
										{NumbersTemplate(item)}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className="grid footer">
				<div className="col-12 md:col-8 md:col-offset-2 ">
					<span>{lang?.data?.footer?.copy}</span>
				</div>
			</div>
		</footer>
	);
};
export default PageFooter;
