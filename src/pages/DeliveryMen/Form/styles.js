// import styled from 'styled-components';
// import colors from '~/styles/colors';

// export const Container = styled.div`
//   padding: 5px 120px;
//   display: flex;
//   flex-direction: column;
// `;

// export const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// export const TitleArea = styled.div`
//   width: 62%;
//   max-width: 980px;
// `;

// export const ButtonArea = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 38%;
//   max-width: 240px;
// `;

// export const Card = styled.div`
//   background: ${colors.light};
//   margin-top: 20px;
//   height: 401px;
//   border-radius: 4px;
//   display: flex;
//   flex-direction: column;
//   margin-top: 30px 10px;

//   label {
//     text-align: left;
//     font-weight: bold;
//     margin: 0 20px;
//   }

//   input {
//     background: ${colors.light};
//     border: 1px solid ${colors.dddddd};
//     border-radius: 4px;
//     height: 40px;
//     padding: 0 7px;
//     color: ${colors.dark};
//     margin: 10px 20px;
//     &::placeholder {
//       color: rgba(153, 153, 153, 0.7);
//     }
//   }

//   span {
//     color: #fb6f91;
//     align-self: flex-start;
//     margin: 0 20px 8px 20px;
//     font-weight: bold;
//     font-size: 13px;
//   }
// `;

import styled from 'styled-components';
import { Form } from '@unform/web';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const UnForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: ${colors.light};
  width: 100%;
  border-radius: 4px;
  div:nth-last-child(2) {
    display: grid;
    grid-template-columns: 3fr 0.8fr 0.8fr;
    grid-column-gap: 10px;
    label {
      margin: auto 0;
      margin-top: 18px;
    }
    input {
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
    margin-bottom: 10px;
  }
  div:nth-last-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    label {
      margin: auto 0;
    }
  }
`;
