import { Typography } from '@mui/joy';
import { ReactNode } from 'react';
import { LinkButton, LinkButtonProps } from './LinkButton';
import { SxProps } from '@mui/joy/styles/types';

interface LinkCardProps {
  label: string;
  description: ReactNode;
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  sx?: SxProps;
}

export function LinkCard({ label, description, icon, size = 'md', sx, ...linkProps }: LinkCardProps & LinkButtonProps) {
  const titleLevel = (
    {
      sm: 'title-sm',
      md: 'title-md',
      lg: 'title-lg',
    } as const
  )[size];
  const descriptionLevel = (
    {
      sm: 'body-xs',
      md: 'body-sm',
      lg: 'body-md',
    } as const
  )[size];

  return (
    <LinkButton
      variant="outlined"
      color="neutral"
      startDecorator={icon}
      {...linkProps}
      sx={{
        p: 3,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
        borderRadius: '10px',
        backgroundColor: '#fff',
        borderColor: '#d8e5e8',
        transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 16px 32px rgba(7,45,67,.09)',
          borderColor: '#68adbc',
          backgroundColor: '#fff',
        },
        '& .MuiButton-startDecorator': {
          width: 44,
          height: 44,
          borderRadius: '8px',
          background: '#e4f4f5',
          color: '#007b99',
          display: 'grid',
          placeItems: 'center',
        },
        underline: 'none',
        ...sx,
      }}
    >
      <Typography level={titleLevel} mt={1}>
        {label}
      </Typography>
      <Typography level={descriptionLevel} component="div">
        {description}
      </Typography>
    </LinkButton>
  );
}
