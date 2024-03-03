import Link from 'next/link';
import styles from './event-item.module.css';

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
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAdd}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
