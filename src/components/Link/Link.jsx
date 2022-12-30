import { tickerIcon } from '../../assets';
import styles from './Link.module.scss';

export const Link = ({ linkText, isHovered, onLinkClick }) => {
	return (
		<li className={styles.linkContainer} onClick={onLinkClick && onLinkClick}>
			{isHovered && <img src={tickerIcon} alt='ticker-icon' />}
			{linkText}
		</li>
	)
}
