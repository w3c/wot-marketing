'use client';

import { Button, ToggleButtonGroup, Typography } from '@mui/joy';

export function Filter({
  label,
  options,
  selectedOption,
  onClick,
  disabledOptions = [],
}: {
  label: string;
  options: string[];
  selectedOption: string;
  onClick: (value: string) => void;
  disabledOptions?: string[];
}) {
  return (
    <>
      <Typography level="title-sm" fontWeight={600}>
        {label}
      </Typography>
      <ToggleButtonGroup
        size="sm"
        value={selectedOption}
        onChange={(_, value) => value !== null && value !== selectedOption && onClick(value)}
      >
        {options.map((option) => (
          <Button
            value={option}
            key={option}
            disabled={disabledOptions.includes(option)}
            color={option === selectedOption ? 'primary' : 'neutral'}
            variant={option === selectedOption ? 'solid' : 'outlined'}
            sx={{
              borderSize: '1px',
            }}
          >
            {option}
          </Button>
        ))}
      </ToggleButtonGroup>
    </>
  );
}
