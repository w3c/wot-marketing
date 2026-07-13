import { ARTICLES } from '@/lib/articles';
import { EVENTS } from '@/lib/events';
import { ArrowRight, CalendarDays, ExternalLink, Newspaper } from 'lucide-react';
import Link from 'next/link';

const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

export function RecentActivities() {
  return (
    <section className="recent-activities section">
      <div className="shell">
        <header>
          <label>RECENT ACTIVITIES</label>
          <h2>See what&apos;s happening across Web of Things.</h2>
          <p>Explore recent coverage, announcements, and opportunities to meet the community.</p>
        </header>

        <div className="activity-columns">
          <div className="activity-column">
            <div className="activity-heading">
              <Newspaper aria-hidden="true" />
              <h3>Latest publications</h3>
            </div>
            <div className="activity-list">
              {ARTICLES.slice(0, 3).map((article) => (
                <a href={article.url} target="_blank" rel="noreferrer" key={article.url}>
                  <span className="activity-meta">
                    {article.publisher} <i aria-hidden="true" /> {article.type} <i aria-hidden="true" /> {article.date}
                  </span>
                  <strong>{article.title}</strong>
                  <ExternalLink aria-hidden="true" />
                </a>
              ))}
            </div>
            <Link className="activity-more" href="/about/articles">
              View all publications <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="activity-column">
            <div className="activity-heading">
              <CalendarDays aria-hidden="true" />
              <h3>Latest events</h3>
            </div>
            <div className="activity-list">
              {EVENTS.slice(0, 3).map((event) => {
                const isUpcoming = new Date(event.date) >= currentDate;

                return (
                  <a href={event.url} target="_blank" rel="noreferrer" key={event.url}>
                    <span className="activity-meta">
                      {event.date_display}
                      {isUpcoming && <em>Upcoming</em>}
                    </span>
                    <strong>{event.name}</strong>
                    <ExternalLink aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <Link className="activity-more" href="/participate/working-group/events">
              View all events <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
