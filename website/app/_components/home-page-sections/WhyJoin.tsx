import { ButtonGroup, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { UserCheck2 } from 'lucide-react';
import DiscordIcon from '@/public/discord.png';
import { LinkButton } from '../LinkButton';
import Image from 'next/image';
import GitHubIcon from '@/public/github.png';

export function WhyJoin() {
  return (
    <PageSection title="Why join?">
      <Stack gap={4}>
        <Typography>
          We develop the Web of Things standards and guidelines to ensure long-term IoT interoperability. By joining,
          you drive W3C standards that shape future device integration and build a cohesive connected ecosystem.
        </Typography>
        <Typography>
          Our standardization work happens in the open on GitHub. While formal contributions to the specifications
          require W3C and Working Group membership, anyone can follow the latest developments, raise issues, and share
          their use cases. We welcome your input.
        </Typography>
        <ButtonGroup
          size="lg"
          spacing={1.5}
          sx={{ flexDirection: { xs: 'column', md: 'row' }, width: '100%', maxWidth: 800 }}
        >
          <LinkButton
            fullWidth
            startDecorator={<UserCheck2 />}
            color="primary"
            variant="solid"
            path="/participate/working-group"
          >
            Participate in W3C WoT
          </LinkButton>
          <LinkButton
            fullWidth
            startDecorator={<Image src={DiscordIcon} alt="Discord" width={24} />}
            external_url="https://discord.gg/WP3MqCfKQ"
          >
            Join the discussion
          </LinkButton>
          <LinkButton
            fullWidth
            startDecorator={<Image src={GitHubIcon} alt="GitHub" width={24} height={24} />}
            external_url="https://github.com/w3c/wot"
          >
            Follow us on GitHub
          </LinkButton>
        </ButtonGroup>
      </Stack>
    </PageSection>
  );
}
