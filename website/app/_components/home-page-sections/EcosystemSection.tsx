'use client';

import memberOrganizations from '@/lib/generated/memberOrganizationsOutput.json';
import { LIAISONS } from '@/lib/liaisons';
import { ChevronDown, ExternalLink, Network, Users } from 'lucide-react';
import { useState } from 'react';

const groups = Object.entries(memberOrganizations);
const membershipCount = groups.reduce((total, [, members]) => total + members.length, 0);

export function EcosystemSection() {
  const [openGroups, setOpenGroups] = useState(() => new Set([groups[0][0], groups[1][0]])); // Open the first two groups by default

  function toggleGroup(group: string) {
    setOpenGroups((current) => {
      const next = new Set(current);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  }

  return (
    <section className="ecosystem section">
      <div className="shell">
        <header>
          <label>THE WOT ECOSYSTEM</label>
          <h2>Developed together, connected broadly.</h2>
          <p>
            Member organizations advance Web of Things across W3C groups, while liaison partners align the work with
            related standards and industry communities.
          </p>
        </header>

        <div className="ecosystem-summary" aria-label="Ecosystem summary">
          <div>
            <Users />
            <span>
              <strong>{membershipCount}</strong> organization memberships
            </span>
          </div>
          <div>
            <Network />
            <span>
              <strong>{LIAISONS.length}</strong> liaison partners
            </span>
          </div>
        </div>

        <div className="ecosystem-layout">
          <div className="member-groups">
            <div className="member-groups-scroll">
              <h3>Member organizations</h3>
              <p>Browse participating organizations by W3C group.</p>
              {groups.map(([group, members]) => {
                const isOpen = openGroups.has(group);
                const panelId = `member-group-${group.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                return (
                  <div className={`member-accordion${isOpen ? ' is-open' : ''}`} key={group}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleGroup(group)}
                    >
                      <span>{group}</span>
                      <span className="accordion-meta">
                        <small>{members.length} organizations</small>
                        <ChevronDown aria-hidden="true" />
                      </span>
                    </button>
                    <div className="accordion-content" id={panelId} aria-hidden={!isOpen}>
                      <ul>
                        {members.map((member) => (
                          <li key={`${group}-${member.title}`}>
                            {member.homepage ? (
                              <a
                                href={member.homepage}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex={isOpen ? undefined : -1}
                              >
                                {member.title}
                                <ExternalLink aria-hidden="true" />
                              </a>
                            ) : (
                              member.title
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="liaison-panel">
            <h3>Liaison partners</h3>
            <p>Organizations coordinating related protocols, semantics, and domains.</p>
            <ul>
              {LIAISONS.map((liaison) => (
                <li key={liaison.title}>
                  {liaison.url ? (
                    <a href={liaison.url} target="_blank" rel="noreferrer">
                      <span>{liaison.title}</span>
                      <ExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <span>{liaison.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
