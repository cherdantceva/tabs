import { css } from 'styled-components';
import { sizes, device } from '../variables/variables';

export const Container = () => css`
  width: 100%;
  padding: 0 ${sizes.paddingContainer};
  @media ${device.mobile} {
    padding: 0 ${sizes.paddingContainerMobile};
  }
`;
