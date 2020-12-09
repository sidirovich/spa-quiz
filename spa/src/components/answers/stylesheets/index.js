import styled, {keyframes} from 'styled-components';
let BackgroundColor = props => props.theme.main;
let InputColor = props => props.theme.main;
let SendButtonColor = props => props.theme.main;

export const MainQuizBody = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 60px;
    background-color: #fff;
    border: 1px solid #e4e3e3;
    border: 5px solid var(--color-bg-7,#e6e6e6);
    box-shadow: 0 7px 15px 0 rgba(0,0,0,.15);
    font-family: 'OpenSans';
`;

export const QuizBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin: 0px;
    font-family: 'OpenSans';

    @media (max-width: 768px){
        flex-wrap: wrap;
        width: 100%;
    }

`;

export const HR = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
`;

export const QuizTitle = styled.p`
    font-size: 2vh;
    font-weight: 400;
    padding: 5px;
    font-family: 'OpenSans';
`;

export const SpanTitleIconColor = styled.span`
    color: #000;
`;

export const H3 = styled.h3`
    font-family: 'OpenSans';
    font-size: 1.75rem;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
`;

export const H5 = styled.h5`
    font-family: 'OpenSans';
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.2;
`;

const show = keyframes`
    0%{
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`;

export const MainH2 = styled.p `
    font-family: 'OpenSans';
    font-size: 2rem;
    margin-bottom: 1.5rem;
`;

export const MainImage = styled.img `
    width: 100%;
    height: auto;
    border-bottom-left-radius: 9px;
    border-top-left-radius: 9px;

    @media (min-width: 1200px){
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    @media (min-width: 992px){
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    @media (min-width: 768px){
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    
    @media (max-width: 768px){
        -ms-flex: 0 0 0%;
        flex: 0 0 0%;
        max-width: 0%;
    }

    border-radius: 8px 8px 8px 8px;
`;

export const DLeftColMain = styled.div`
@media (min-width: 1200px){
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    display: block;
}

@media (min-width: 992px){
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    height: auto;
    display: block;
}

@media (min-width: 768px){
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    display: block;
}

display: none;
position: relative;
padding-top: .5rem!important;
text-align: left;
padding: 10px;

opacity: 0;
transition: 1s;
animation: ${show} 1s 1; 
animation-fill-mode: forwards;
animation-delay: 0s;
`;
export const DLeftCol = styled.div`

    @media (min-width: 1200px){
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    @media (min-width: 992px){
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    @media (min-width: 768px){
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    
    position: relative;
    width: 100%;
    padding-top: .5rem!important;
    text-align: left;
    padding: 50px;

    opacity: 0;
    transition: 1s;
    animation: ${show} 1s 1; 
    animation-fill-mode: forwards;
    animation-delay: 0s;
`;

export const DRightCol = styled.div`
    flex-shrink: inherit !important;
    border-bottom-right-radius: 9px;
    border-top-right-radius: 9px;
    width: 100%;
    background-color: #f7f6f6;
    padding: 15px;
    padding-top: 40px;

    @media (min-width: 1200px){
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    @media (min-width: 992px){
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    @media (min-width: 768px){
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
`;

export const RowAnswer = styled.div`
    @media (min-width: 1200px){
    }

    @media (min-width: 992px){
    }

    @media (min-width: 768px){
    }
    display: flex;
    display: -ms-flexbox;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    padding-top: .5rem!important;
    align-content: flex-start;
`;

export const KRowAnswer = styled.div`
    display: flex;
    ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center!important;
`;

export const RowForm = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2rem;
    display: flex;
    ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center!important;
`;

export const K100Count  = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
`;

export const KitchenImgColumn = styled.div`

    @media (min-width: 1200px){
        flex: 0 0 80%;
        max-width: 80%;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 992px){
        flex: 0 0 80%;
        max-width: 80%;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 768px){
        flex: 0 0 80%;
        max-width: 80%;
        padding-right: 15px;
        padding-left: 15px;
    }

    text-align: center;
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const LengthColumn = styled.div`

    @media (min-width: 1200px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 992px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        padding-right: 15px;
        padding-left: 15px;
    }

    @media (min-width: 768px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        padding-right: 15px;
        padding-left: 15px;
    }
    
    text-align: center;
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const ButtonColumn = styled.div`
    text-align: center;
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;
export const AnswerColumn = styled.div`
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
`;

export const AnswerCard = styled.div`
    cursor: pointer;
    margin: 5px;
    transition: 0.3s;
    font-family: 'OpenSans';
    background-color: #f7f6f6;
    border: 1px solid #f7f6f6;
    display: flow-root;
    height: 80%;

    &:hover{
        border: 1px solid #c1bfbf;
        background-color: #f7f6f6;
    }
`;

export const AnswerImage = styled.img`
    width: 100%;
    height: auto;
    display: none;
`;

export const AnswerText = styled.p`
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.8vh;
    font-family: 'OpenSans';
`;

export const AssistantRow = styled.div`
    @media (min-width: 1200px){
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        margin-bottom: 1.5rem!important;
    }
    @media (min-width: 992px){    display: flex;
        flex-wrap: wrap;
        margin: 0px;
        margin-bottom: 1.5rem!important;
    }
    @media (min-width: 768px){
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        margin-bottom: 1.5rem!important;
    }
    display: none;
`;

export const AssistantLCol = styled.div`
    @media (min-width: 1200px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    @media (min-width: 992px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    @media (min-width: 768px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    position: relative;
    width: 50%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const AssistantImg = styled.img`
    width: 80%;
    height: auto;
    border-radius: 100%;
`;

export const AssistantRCol = styled.div`
    @media (min-width: 1200px){
        flex: 0 0 40%;
        max-width: 40%;
    }
    @media (min-width: 992px){
        flex: 0 0 40%;
        max-width: 40%;
    }
    @media (min-width: 768px){
        flex: 0 0 40%;
        max-width: 40%;
    }
    position: relative;
    width: 40%;
`;

export const AssistantTitle = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    color: #2e2e54;
    line-height: 1.125;
    font-family: 'OpenSans';
`;
export const AssistantSubtitle = styled.div`
    font-size: 12px;
    color: #69748c;
    font-weight: 400;
    line-height: 1.15;
    margin: 0;
    font-family: 'OpenSans';
`;
export const AssistantMessage = styled.div`
    padding: 5px 10px;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    max-height: 100%;
    color: #2e2e49;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.54;
    margin-top: 1rem!important;
    margin-bottom: 1.5rem!important;
    font-family: 'OpenSans';
`;

export const MobileSaleLabel = styled.label`
    @media (min-width: 1200px){
        display: none;
    }

    @media (min-width: 992px){
        display: none;
    }

    @media (min-width: 768px){
        display: none;
    }
    font-size: 14px;
    font-weight: 600;
`;
    

export const SaleCount = styled.div`
    font-size: 1.5vh;
    background-color: #ffffff;
    color: #010101;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: 'OpenSans';
    padding: 15px;
`;

export const BackQuiest = styled.button`
    text-decoration: none!important;
    color: #4a505e!important;
    background-color: #fafafa!important;
    border: 1px solid #e5e5e5!important;
    padding: 10px;
    border-radius: 8px;
    margin-top: 15px;
    transition: 0.5s;
    font-family: 'Open Sans';
    &:hover{
        color: #ffffff!important;
        background-color: ${BackgroundColor}!important;
    }
    &:focus{
        outline: none;
    }
`;

export const DLeftColForm = styled.div`
    @media (min-width: 1200px){
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    @media (min-width: 992px){
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    @media (min-width: 768px){
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    
    position: relative;
    width: 100%;
    text-align: left;
`;

export const LeftRowForm = styled.div`
    @media (min-width: 1200px){
        display: flex;
        ms-flex-wrap: wrap;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center!important;
    }

    @media (min-width: 992px){
        display: flex;
        ms-flex-wrap: wrap;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center!important;
    }

    @media (min-width: 768px){
        display: flex;
        ms-flex-wrap: wrap;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center!important;
    }
    display: none;

`;

export const FormBigImg = styled.div`
    @media (min-width: 1200px){
        display: block;
    }

    @media (min-width: 992px){
        display: block;
    }

    @media (min-width: 768px){
        display: block;
    }
    display: none;
`;


export const DefaultParagraph = styled.p`
    font-size: 12px;
    font-family: 'OpenSans';
`;

export const FormAgreement = styled.p`
    font-size: 12px;
    font-family: 'OpenSans';
`;

export const FormLabel = styled.p`
    font-weight: 300;
    margin: 0em;
    font-size: 2.5vh;
    font-family: 'OpenSans';
`;

export const QuizInput = styled.input`
    width: 90%;
    padding: 10px;
    border: 2px solid #e0e0e0;
    transition: 0.5s;
    font-family: 'OpenSans';
    margin-bottom: 1.3rem;

    &:focus{
        outline-color: ${InputColor};
        border: 2px solid ${InputColor};
    }
`;

export const WidthInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 2px solid #e0e0e0;
    text-align: center;
    transition: 0.5s;
    font-family: 'OpenSans';

    &:focus{
        outline-color: ${InputColor};
        border: 2px solid ${InputColor};
    }
`;

export const WidthButton = styled.button`
    cursor: pointer;
    margin: auto;
    background-color: ${SendButtonColor};
    border: none;
    color: white;
    font-size: 16px;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.29);
    border: 3px solid ${SendButtonColor};
    transition: 0.5s;
    font-family: 'OpenSans';

    &:hover{
        background-color: white;
        color: ${SendButtonColor};
        border: 3px solid ${SendButtonColor};
    }
    &:focus{
        outline: none;
    }
`;

export const MainSendButton = styled.button`
    cursor: pointer;
    margin: auto;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 19px;
    padding: 10px;
    background-color: ${BackgroundColor};
    border: 2px solid ${BackgroundColor};
    border-radius: 5px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.29);
    transition: all 0.3s;
    font-family: 'OpenSans';

    &:hover{
        background-color: white;
        color: ${BackgroundColor};
    }
    &:focus{
        outline: none;
    }
`;

export const SendButton = styled.button`
    cursor: pointer;
    margin: auto;
    background-color: ${BackgroundColor};
    border: 2px solid ${BackgroundColor};
    color: white;
    font-size: 19px;
    padding: 10px;
    margin-bottom: 1.3rem;
    border-radius: 5px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.29);
    transition: all 0.3s;
    font-family: 'OpenSans';

    &:hover{
        background-color: white;
        color: ${BackgroundColor};
    }
    &:focus{
        outline: none;
    }
`;

export const LegalLink = styled.a`
    text-decoration: none;
    color: rgb(168, 171, 169);
    transition: all 0.3s;

    &:hover{
        text-decoration: underline;
        color: ${SendButtonColor};
    }
`;