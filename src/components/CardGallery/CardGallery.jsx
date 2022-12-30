import { Link } from 'react-router-dom';
import { Card } from '../Card';
import {
	ccdmImage,
	jekAcademyImage,
	quebrajazzImage
} from '../../assets';

import styles from './CardGallery.module.scss';

export const CardGallery = () => {
	return (
		<div className={styles.cardGalleryContainer}>
			<Link to='/work/jek-academy'>
				<Card
					title='jeK Academy'
					imgSrc={jekAcademyImage}
				/>
			</Link>
			<Link to='/work/quebrajazz'>
				<Card
					title='quebra jazz'
					imgSrc={quebrajazzImage}
				/>
			</Link>
			<Link to='/work/ccdm'>
				<Card
					title='ccdm'
					imgSrc={ccdmImage}
				/>
			</Link>
		</div>
	)
}
