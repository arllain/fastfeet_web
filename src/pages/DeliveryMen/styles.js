import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 5px 120px;
  display: flex;
  flex-direction: column;

  div#first-row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    /* form {
      display: flex;
      align-items: center;
      border: 1px solid ${colors.dddddd};
      border: 1px solid #dddddd;
      border-radius: 4px;
      background: ${colors.light} 0 0 no-repeat padding-box;

      input {
        display: flex;
        width: 237px;
        height: 36px;
        border: none;
        border-radius: 4px;
        opacity: 1;
      }
    } */

    /* button {
      display: flex;
      justify-content: center;
      width: 142px;
      height: 36px;
      background: ${colors.purple} 0 0 no-repeat padding-box;
      opacity: 1;
      color: ${colors.light};
      border: 0;
      border-radius: 4px;
      text-transform: uppercase;
      letter-spacing: 0;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    } */
  }
`;

// import styled from 'styled-components';
// import { darken } from 'polished';
// import colors from '~/styles/colors';

// export const Container = styled.div`
//   padding: 5px 120px;
//   display: flex;
//   flex-direction: column;

//   div#first-row {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 20px;

//     form {
//       display: flex;
//       align-items: center;
//       border: 1px solid ${colors.dddddd};
//       border: 1px solid #dddddd;
//       border-radius: 4px;
//       background: ${colors.light} 0 0 no-repeat padding-box;

//       input {
//         display: flex;
//         width: 237px;
//         height: 36px;
//         border: none;
//         border-radius: 4px;
//         opacity: 1;
//       }
//     }

//     button {
//       display: flex;
//       justify-content: center;
//       width: 142px;
//       height: 36px;
//       background: ${colors.purple} 0 0 no-repeat padding-box;
//       opacity: 1;
//       color: ${colors.light};
//       border: 0;
//       border-radius: 4px;
//       text-transform: uppercase;
//       letter-spacing: 0;
//       align-items: center;
//       transition: background 0.2s;
//       &:hover {
//         background: ${darken(0.03, '#7d40e7')};
//       }
//     }
//   }
// `;
