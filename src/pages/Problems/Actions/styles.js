import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  position: relative;
  .modal {
    font-size: 20px;
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid ${colors.black};
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
    > hr {
      border: ${colors.dddddd} 1px solid;
      margin-bottom: 10px;
      margin-top: 30px;
    }
    > img {
      margin-top: 20px;
      height: 36px;
      width: 234px;
    }
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: ${colors.light};
    border-radius: 18px;
    border: 1px solid ${colors.gray_cf};
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: 0;
  position: relative;
  width: 50px;
`;

export const ActionList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 10px);
  background: ${colors.light};
  border-radius: 4px;
  padding: 15px 5px;
  border: #00000026 solid 1px;
  z-index: 1;
  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Action = styled.div`
  color: ${colors.gray_99};
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 13px;
    line-height: 18px;
  }
`;