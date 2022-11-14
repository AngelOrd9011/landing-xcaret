import Promotion from '../componentes/promotions/Promotion';

const Landing = ({ lang }: any) => {
	return (
		<main className="main-content flex w-full flex-1 flex-col items-center justify-center text-center">
			{lang?.data?.promotions?.map((promotion: any, index: number) => {
				return <Promotion key={index} promotion={promotion} index={index} />;
			})}
		</main>
	);
};

export default Landing;
