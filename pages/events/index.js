/**
 * 폴더 추가 방식 사용이유
 * - 단일 이벤트에 쓰일 중첩 라우트에 필요하기 때문
 */

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
