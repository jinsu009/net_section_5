import Link from 'next/link';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import styles from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props) {
  const { title, img, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAdd = location.replace(',', '\n');

  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <img src={'/' + img} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAdd}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
