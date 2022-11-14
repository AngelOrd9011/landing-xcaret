import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { useAppSelector } from '../../redux/hooks';

const Card = ({ promotion }: any) => {
	const lang = useAppSelector((state) => state.language);

	const code = lang.language === 'es' ? 'Código: ' : 'Code: ';
	const buttonText = lang.language === 'es' ? 'Continuar' : 'OK';
	const cancel = lang.language === 'es' ? 'Cancelar' : 'Cancel';
	const thanks = lang.language === 'es' ? '¡Gracias por tu preferencia!' : 'Thanks for choosing us!';

	const bookDialog = () => {
		console.log(promotion.logoPromo);
		Swal.fire({
			title: promotion.title,
			text: code + uuidv4(),
			imageUrl: promotion.logoPromo,
			imageAlt: promotion.title,
			confirmButtonText: buttonText,
			confirmButtonColor: '#363636',
			cancelButtonText: cancel,
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					icon: 'success',
					title: thanks,
					confirmButtonText: buttonText,
					confirmButtonColor: '#363636',
				});
			}
		});
	};

	return (
		<>
			<img src={promotion.logoPromo} alt={promotion.title} />
			<h2>{promotion.title.toUpperCase()}</h2>
			<p className="sub-promotion">{promotion.Subtitle}</p>
			<p className="p-promotion">
				{promotion.paragraphs.map((item: any, index: number) => {
					return <span key={index}>{item + ' '}</span>;
				})}
			</p>
			<div className="book-button">
				<button onClick={() => bookDialog()}>{promotion.button.text}</button>
			</div>
		</>
	);
};

export default Card;
