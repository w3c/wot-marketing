import { Box, Table } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { ReactNode } from 'react';

type Props = {
  header?: (string | HeaderWithSx)[];
  rows: Row[];
  sx: SxProps;
};

type Row = { onClick?: () => void; cells: ReactNode[]; sx?: SxProps };

interface HeaderWithSx {
  label: string;
  sx?: SxProps;
}

export function StyledTable({ header, rows, sx }: Props) {
  const isClickable = rows.some((r) => r.onClick);
  // Joy's Table defaults to `table-layout: fixed`, which makes the browser
  // ignore `min-width`/`max-width` on columns. Switch to `auto` when a header
  // requests explicit sizing so values like `minWidth` are honored.
  const hasHeaderSx = header?.some((h) => typeof h !== 'string' && h.sx);
  return (
    <Table
      borderAxis="bothBetween"
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        ...(hasHeaderSx && { tableLayout: 'auto' }),
        ...(isClickable && {
          '& tr:hover': {
            backgroundColor: '#f2f2f2',
            cursor: 'pointer',
          },
        }),
        ...sx,
      }}
    >
      {header && (
        <thead>
          <tr>
            {header.map((h) =>
              typeof h === 'string' ? (
                <th key={h}>{h}</th>
              ) : (
                <Box component="th" key={h.label} sx={h.sx}>
                  {h.label}
                </Box>
              )
            )}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, i) => (
          <Box component="tr" key={i} onClick={row.onClick} sx={row.sx}>
            {row.cells.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </Box>
        ))}
      </tbody>
    </Table>
  );
}
