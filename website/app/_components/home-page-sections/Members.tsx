'use client';

import { Box, Button, DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { useState } from 'react';
import { LinkButton } from '../LinkButton';
import memberOrganizations from '@/lib/generated/memberOrganizationsOutput.json';
import { useDictionary } from '../i18n/LocaleProvider';

export function Members() {
  const t = useDictionary().home.members;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const subgroups = Object.values(memberOrganizations);
  const total = subgroups.reduce((acc, subgroup) => {
    return acc + subgroup.length;
  }, 0);
  return (
    <PageSection title={t.title}>
      <Stack gap={4}>
        <Typography>{t.intro}</Typography>
        <Button variant="outlined" onClick={() => setIsModalOpen(true)}>
          <Stack>
            <Typography level="h2" color="primary">
              {total}
            </Typography>
            <Typography>{t.organizations}</Typography>
          </Stack>
        </Button>
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalDialog size="lg" sx={{ width: '80%', maxWidth: '1500px', pb: 0 }}>
            <ModalClose />
            <DialogTitle component="h3" style={{ fontSize: '26px' }}>
              {t.modalTitle}
            </DialogTitle>
            <DialogContent sx={{ pt: 3 }}>
              {Object.entries(memberOrganizations).map(([group, members]) => (
                <Stack key={group} mb={4}>
                  <Typography level="title-lg" mb={2}>{`${group} (${members.length})`}</Typography>
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                      gridAutoRows: '1fr',
                      gap: 2,
                    }}
                  >
                    {members.map((member, index) => (
                      <LinkButton
                        key={member.title + index}
                        external_url={member.homepage}
                        sx={{ pointerEvents: member.homepage ? 'auto' : 'none' }}
                      >
                        {member.title}
                      </LinkButton>
                    ))}
                  </Box>
                </Stack>
              ))}
            </DialogContent>
          </ModalDialog>
        </Modal>
      </Stack>
    </PageSection>
  );
}
