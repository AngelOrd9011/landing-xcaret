import Card from './Card';
import Carousel from './Carousel';

const Promotion = ({ promotion, index }: any) => {
	return (
		<div key={index} className="grid promotion">
			<div className="col-12 md:col-10 md:col-offset-1">
				<div className="grid">
					{(index + 2) % 2 === 0 ? (
						<>
							<div className="col-12 md:col-7">
								<Carousel />
							</div>
							<div className="col-12 md:col-5 text-left">
								<Card promotion={promotion} />
							</div>
						</>
					) : (
						<>
							<div className="col-12 md:col-5 text-right even">
								<Card promotion={promotion} />
							</div>
							<div className="col-12 md:col-7">
								<Carousel />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default Promotion;
