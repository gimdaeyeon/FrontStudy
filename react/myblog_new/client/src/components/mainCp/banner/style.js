import  styled from 'styled-components';

export const MainBannerTamplate = styled.section`
    background-color: ${(props)=>props.theme.mainColor};
    color: ${(props)=>props.theme.subColor};
    width: 100%;
    height: 20rem;
    display: flex;
    align-content: auto;
    flex-direction: auto;
    flex-wrap: auto;
    justify-content: cen;
    align-items: center;

    & > span{
      font-size: 3rem;
    }
`;

