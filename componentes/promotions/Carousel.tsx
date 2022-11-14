import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

const Carousel = () => {
	const lang = useAppSelector((state) => state.language);
	const [img, setImg] = useState(0);

	const changeImage = (type: string) => {
		if (type === 'decrement') {
			if (img === 0) setImg(5);
			else setImg(img - 1);
		}
		if (type === 'increment') {
			if (img === 5) setImg(0);
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
			{/* <ul>
				{lang?.data?.carousel?.desktop.map((img: any) => {
					return <li key={img.alt}>{img.alt}</li>;
				})}
			</ul> */}
		</div>
	);
};
export default Carousel;
