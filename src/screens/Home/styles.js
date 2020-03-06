import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Page = styled.div`
  display: flex;
`;
export const ButtonPaginate = styled(Button)`
  &:first-child {
    margin-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  margin-top: 20px;
  margin-bottom: 20px;
`;
