import { ButtonGroup, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { UserCheck2, HandHeart } from 'lucide-react';
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
        <ButtonGroup size="lg" spacing={1.5} sx={{ flexWrap: 'wrap', width: '100%' }}>
          <LinkButton
            endDecorator={<UserCheck2 />}
            color="primary"
            variant="solid"
            path="/participate/working-group"
            sx={{ width: { xs: '100%', md: '270px' } }}
          >
            Participate in W3C WoT
          </LinkButton>
          <LinkButton
            endDecorator={<Image src={GitHubIcon} alt="GitHub" width={24} height={24} />}
            external_url="https://github.com/w3c/wot"
            sx={{ width: { xs: '100%', md: '270px' } }}
          >
            Follow us on GitHub
          </LinkButton>
          <LinkButton
            endDecorator={<HandHeart />}
            external_url="https://www.w3.org/support-us/"
            sx={{ width: { xs: '100%', md: '270px' } }}
          >
            Support Us
          </LinkButton>
        </ButtonGroup>
      </Stack>
    </PageSection>
  );
}
