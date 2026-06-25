import { PageLayout } from '@/app/_components/PageLayout';
import { Card, CardContent, Typography, Link, List, ListItem, Stack, CardOverflow, Box } from '@mui/joy';
import { communityGroups } from '@/lib/communityGroups';
import { Metadata } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/participate/community-groups', {
    title: dict.pages.communityGroups.title,
    description: dict.pages.communityGroups.subtitle,
  });
}

export default async function CommunityGroupsPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return (
    <PageLayout title={dict.pages.communityGroups.title} subtitle={dict.pages.communityGroups.subtitle}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1', md: 'repeat(2, 1fr)' }, gap: 2 }}>
        {communityGroups.map((group) => (
          <Card variant="outlined" key={group.id} sx={{ p: 0 }}>
            <Card variant="soft" sx={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0, py: 1.5 }}>
              <Typography level="title-lg" id={group.id}>
                {group.title}
              </Typography>
            </Card>
            <CardContent sx={{ p: 2, pt: 0.5 }}>
              {group.description.map((desc, index) => (
                <Typography
                  key={`desc-${index}`}
                  sx={{
                    mb: !group.list && !group.afterListDescription && index === group.description.length - 1 ? 2 : 0,
                  }}
                >
                  {desc}
                </Typography>
              ))}

              {group.list && (
                <List marker="disc" sx={{ pl: 3 }} size="sm">
                  {group.list.map((item, index) => (
                    <ListItem key={`list-${index}`} sx={{ display: 'list-item' }}>
                      {item}
                    </ListItem>
                  ))}
                </List>
              )}

              {group.afterListDescription &&
                group.afterListDescription.map((desc, index) => (
                  <Typography
                    key={`after-${index}`}
                    sx={{ mb: index === group.afterListDescription!.length - 1 ? 2 : 0 }}
                  >
                    {desc}
                  </Typography>
                ))}

              <Typography>
                <strong>{group.chairLabel}:</strong> {group.chairs}
              </Typography>
              <Typography>
                <strong>Website:</strong>{' '}
                <Link href={group.website} target="_blank" rel="noopener noreferrer">
                  {group.website}
                </Link>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </PageLayout>
  );
}
