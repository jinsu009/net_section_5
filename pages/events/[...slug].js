import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data.js';
import EventList from '../../components/events/event-list';
import { Fragment } from 'react';
import ResultsTitle from '../../components/events/results-title.js';
import Button from '../../components/ui/button.js';
import ErrorAlert from '../../components/ui/error-alert.js';
function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // + : 형변환
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter. Plz adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Event</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Event</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
