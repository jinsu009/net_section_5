import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventCotent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import ErrorAlert from '../../components/ui/error-alert';
function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Event Found</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventCotent>
        <p>{event.description}</p>
      </EventCotent>
    </Fragment>
  );
}

export default EventDetailPage;
