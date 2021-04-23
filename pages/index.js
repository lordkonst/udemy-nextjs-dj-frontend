import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import Link from 'next/link';

const HomePage = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map(evt => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All events</a>
        </Link>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    revalidate: 1,
  };
}

export default HomePage;
