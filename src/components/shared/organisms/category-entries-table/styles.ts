import styled from 'styled-components';
import { Table } from '@radix-ui/themes';
import '@radix-ui/themes/tokens/colors/gray.css';

export const TableContainer = styled.div`
    margin: ${16 / 16}rem 0;
`;

export const RowTotal = styled(Table.Row)`
    background: var(--gray-3);
`;
