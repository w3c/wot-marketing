import { Table } from '@mui/joy';
import { ReactNode } from 'react';

type Props = {
  header?: (string | HeaderWithSize)[];
  rows: Row[];
};

type Row = { onClick?: () => void; cells: ReactNode[]; style?: React.CSSProperties };

interface HeaderWithSize {
  label: string;
  size?: string;
}

export function StyledTable({ header, rows }: Props) {
  const isClickable = rows.some((r) => r.onClick);
  return (
    <Table
      borderAxis="bothBetween"
      variant="outlined"
      sx={{
        borderRadius: 'sm',
        ...(isClickable && {
          '& tr:hover': {
            backgroundColor: '#f2f2f2',
            cursor: 'pointer',
          },
        }),
      }}
    >
      {header && (
        <thead>
          <tr>
            {header.map((h, i) =>
              typeof h === 'string' ? (
                <th key={h}>{h}</th>
              ) : (
                <th key={h.label} style={{ width: h.size }}>
                  {h.label}
                </th>
              )
            )}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} onClick={row.onClick} style={row.style}>
            {row.cells.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
