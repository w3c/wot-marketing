'use client';

import '../../mastodon.css';

import Image from 'next/image';
import { Stack } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { useEffect } from 'react';
import { PageSection } from '../PageSection';

export function MastodonFeed({ sx }: { sx?: SxProps }) {
  // The feed is on multiple pages and on navigation the script has to be reloaded
  useEffect(() => {
    const scriptId = 'emfed-loader';
    // Remove if already exists to ensure it runs again
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'module';
    script.innerHTML = `
      import { loadAll } from 'https://esm.sh/emfed@1/dist/core.js';
      loadAll();
    `;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <Stack gap={2} sx={sx}>
      <PageSection
        title={
          <Stack direction="row" alignItems="center" gap={1.6}>
            <Image width={24} height={24} alt="Mastodon" src="https://www.cdnlogo.com/logos/m/33/mastodon.svg" />
            Latest on Mastodon
          </Stack>
        }
      >
        <div
          className="mastodon-scroll"
          style={{
            overflowY: 'auto',
            background: '#fff',
            border: '1px solid #dbe7f0',
            borderRadius: 8,
            padding: '0 16px',
            flexGrow: 1,
            minHeight: 0,
            height: '600px',
          }}
        >
          <a className="mastodon-feed" href="https://w3c.social/@wot" data-toot-limit="20">
            WoT in Mastodon
          </a>
        </div>
      </PageSection>
    </Stack>
  );
}
