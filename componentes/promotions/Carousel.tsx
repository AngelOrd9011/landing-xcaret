import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

const Carousel = () => {
	const lang = useAppSelector((state) => state.language);
	const [img, setImg] = useState(0);

	const changeImage = (type: string) => {
		const max = lang?.data?.carousel?.desktop.length - 1;
		if (type === 'decrement') {
			if (img === 0) setImg(max);
			else setImg(img - 1);
		}
		if (type === 'increment') {
			if (img === max) setImg(0);
			else setImg(img + 1);
		}
	};

	return (
		<div className="carousel">
			<div className="carousel-buttons ">
				<button className="increment" onClick={() => changeImage('increment')}>
					{'>'}{' '}
				</button>
				<br />
				<button className="decrement" onClick={() => changeImage('decrement')}>
					{'<'}
				</button>
			</div>

			<img src={lang?.data?.carousel?.desktop[img]?.src} alt={lang?.data?.carousel?.desktop[img]?.alt} />
		</div>
	);
};
export default Carousel;
