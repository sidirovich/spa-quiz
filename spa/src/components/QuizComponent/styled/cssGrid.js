import styled from 'styled-components';

export const DContaider = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        max-width: 90%;
    }
    @media (min-width: 768px) {
        max-width: 90%;
    }
    @media (min-width: 992px){
        max-width: 1080px;
    }
`;

export const DRow = styled.div`
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
`;

export const DCol = styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;

    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const DCol4 = styled.div`
    width: 30%;
`;

export const DCol6 = styled.div`
    width: 70%;
`;