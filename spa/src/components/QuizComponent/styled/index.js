import styled, { keyframes } from 'styled-components';
//import cfg from './../../../cfg/';
/*
let CustomColor = props => props.theme.main;
let BackgroundColor = props => props.theme.main;
let InputColor = props => props.theme.main;
let SendButtonColor = props => props.theme.main;
let BlockHoverColor = props => props.theme.main;
*/
let BackgroundColor = '#BFA072';
let InputColor = '#BFA072';
let SendButtonColor = '#BFA072';
let BlockHoverColor = '#BFA072';


export const MainQuizBody = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 20%;
    min-height: 400px;
    background-color: #fff;
    border: 1px solid #e4e3e3;
    border: 5px solid var(--color-bg-7,#e6e6e6);
    box-shadow: 0 7px 15px 0 rgba(0,0,0,.15);
    font-family: 'OpenSans';
`;

export const MainQuizBlock = styled.div`
    @media (min-width: 768px){
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
    @media (min-width: 992px){
        flex-direction: row;
        flex-wrap: nowrap;
    }
    @media (min-width: 1200px){
        flex-direction: row;
        flex-wrap: nowrap;
    }

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0px;
    font-family: 'OpenSans';
`;

export const QuizBlock = styled.div`
    @media (min-width: 768px){
        flex-wrap: wrap;
        flex-direction: column;
    }
    @media (min-width: 992px){
        flex-direction: row;
        flex-wrap: nowrap;
    }
    @media (min-width: 1200px){
        flex-direction: row;
        flex-wrap: nowrap;
    }

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0px;
    font-family: 'OpenSans';
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
    color: ${InputColor};
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
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
    @media (min-width: 768px){
        font-size: 2rem;
    }
    @media (min-width: 992px){
        font-size: 2.5rem;
    }
    @media (min-width: 1200px){
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    font-family: 'OpenSans';
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: 800;
    margin-top: 2rem !important;
    margin-bottom: 2rem;
`;

export const MainH3 = styled.p `
    font-family: 'OpenSans';
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 400;
    margin-top: 2.5rem !important;
    margin-bottom: 2rem;

    @media (max-width: 768px){
        font-size: 1.8rem;
    }
    @media (min-width: 768px){
        font-size: 1.8rem;
    }
    @media (min-width: 992px){
        font-size: 2.0rem;
    }
    @media (min-width: 1200px){
        font-size: 2.5rem;
    }
`;

export const MainH4 = styled.p `
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
    @media (min-width: 768px){
        font-size: 1.5rem;
    }
    @media (min-width: 992px){
        font-size: 1.2rem;
    }
    @media (min-width: 1200px){
        font-size: 1.2rem;
    }

    font-family: 'OpenSans';
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 700;
    margin-top: 1rem !important;
    margin-bottom: 1rem;
`;

export const MainP = styled.p`
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
`;

export const MainColoredP = styled.p`
    font-family: 'OpenSans';
    font-size: 1.2rem;
    color: ${SendButtonColor};
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const MainMutedP = styled.p`
    font-family: 'OpenSans';
    font-size: 1rem;
    color: #3c3c3c52;
    font-weight: 400;
    margin-bottom: 1rem;
`;

export const MainSmallP = styled.p`
    font-family: 'OpenSans';
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
`;

export const FromP = styled.p`
    font-family: 'OpenSans';
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

export const MainSendButton = styled.button`
    @media (max-width: 768px){
        font-size: 2rem;
        padding: 15px;
    }
    @media (min-width: 768px){
        font-size: 2rem;
        padding: 15px;
    }
    @media (min-width: 992px){
        font-size: 1rem;
        padding: 15px;
    }
    @media (min-width: 1200px){
        font-size: 1rem;
        padding: 15px;
    }

    cursor: pointer;
    margin: auto;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 10px;
    background-color: #BFA072;
    border: 2px solid #BFA072;
    -webkit-transition: all 0.3s;
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

export const FormSendButton = styled.button`
    @media (min-width: 768px){
        font-size: 1rem;
        padding: 10px;
    }
    @media (min-width: 992px){
        font-size: 1rem;
        padding: 10px;
    }
    @media (min-width: 1200px){
        font-size: 1rem;
        padding: 10px;
    }

    width: 100%;
    cursor: pointer;
    margin: auto;
    margin-bottom: 1rem;
    color: white;
    font-size: 1.3rem;
    font-weight: 400;
    padding: 10px;
    background-color: #BFA072;
    border: 2px solid #BFA072;
    -webkit-transition: all 0.3s;
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

export const FormMessengersButton = styled.button`
    @media (min-width: 768px){
        font-size: 1rem;
        padding: 10px;
    }
    @media (min-width: 992px){
        font-size: 1rem;
        padding: 10px;
    }
    @media (min-width: 1200px){
        font-size: 1rem;
        padding: 10px;
    }

    width: 100%;
    cursor: pointer;
    margin: auto;
    margin-bottom: 1.5rem;
    color: black;
    font-size: 1.3rem;
    font-weight: 200;
    padding: 10px;
    background-color: #dcdcdc;
    border: none;
    -webkit-transition: all 0.3s;
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



export const MainImage = styled.div `
    @media (min-width: 768px) {
        height: 400px;
    }

    @media (min-width: 992px) {
        height: auto;
    }

    @media (min-width: 1200px){
        height: auto;
    }

    -webkit-box-flex: 0;
    -ms-flex: 0 0 500px;
    flex: 0 0 500px;
    background-position: 50%;
    background: var(--color-bg-quiz,#fff) no-repeat 0 40%;
    background-size: cover;
    display: block;
    -ms-flex-preferred-size: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    padding: .75rem;
`;

export const DLeftColMain = styled.div`
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    display: block;

    @media (min-width: 768px){
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        display: block;
        flex: 0 0 220px;
        background-position: 50%;
    }

    @media (min-width: 992px){
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        height: auto;
        display: block;
    }

    @media (min-width: 1200px){
        -ms-flex: 0 0 50.0%;
        flex: 0 0 50.0%;
        max-width: 50.0%;
        display: block;
    }

    position: relative;
    padding-top: .5rem!important;
    text-align: left;
    padding-left: 40px;
    padding-right: 30px;

    opacity: 0;
    transition: 1s;
    animation: ${show} 1s 1; 
    animation-fill-mode: forwards;
    animation-delay: 0s;
`;
export const DLeftCol = styled.div`
    @media (min-width: 768px) {
    }
    @media (min-width: 992px)  {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    @media (min-width: 1200px) {
        -ms-flex: 0 0 66.666667%;
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    
    position: relative;
    text-align: left;
    opacity: 0;
    transition: 1s;
    animation: ${show} 1s 1; 
    animation-fill-mode: forwards;
    animation-delay: 0s;
    margin-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 30px;
`;

export const DRightColMain = styled.div`
    @media (min-width: 768px){
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }

    @media (min-width: 992px){
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (min-width: 1200px){
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    flex-shrink: inherit !important;
    background-color: #f7f6f6;
`;


export const DRightCol = styled.div`
    @media (min-width: 768px) {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
        display: block;
    }
    @media (min-width: 992px) {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        display: block;
        border-bottom-right-radius: 9px;
        border-top-right-radius: 9px;
        padding: 15px;
    }
    @media (min-width: 1200px) {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        display: block;
        border-bottom-right-radius: 9px;
        border-top-right-radius: 9px;
        padding: 15px;
    }

    display: block;
    flex-shrink: inherit !important;
    width: 100%;
    background-color: #f7f6f6;
    padding-top: 40px;
`;

export const RowAnswer = styled.div`
    @media (min-width: 768px) {
        flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-direction: column;
    }
    @media (min-width: 992px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media (min-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
    display: flex;
    display: -ms-flexbox;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-direction: row;
    padding-top: .5rem!important;
    align-content: flex-start;

    max-height: 400px;
    overflow-y: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        background-color: #a5a5a5;
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000000;
        border-radius: inherit;
        box-shadow: inset 1px 1px 10px #010101;
    }
`;

export const AnswerColumn = styled.div`
    @media (min-width: 768px) {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
    }
    @media (min-width: 992px) {
        flex-direction: row;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media (min-width: 1200px) {
        flex-direction: row;
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
    }

    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
`;

export const KRowAnswer = styled.div`
    display: flex;
    ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center!important;
`;

export const RowForm = styled.div`
    display: flex;
    ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center!important;
`;

export const FlexRow  = styled.div`
    @media (max-width: 768px) {
        flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-direction: column;
    }
    @media (min-width: 992px) {
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media (min-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: row;
    }

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    height: 100%;
`;

export const FlexChild  = styled.div`
    @media (min-width: 768px) {
        width: 100%;
    }
    @media (min-width: 992px) {
        width: 50%;
    }
    @media (min-width: 1200px) {
        width: 50%;
    }
    width: 50%;
`;

export const FlexChildLeft  = styled.div`
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (min-width: 768px) {
        width: 100%;
    }
    @media (min-width: 992px) {
        width: 60%;
    }
    @media (min-width: 1200px) {
        width: 60%;
    }
    width: 60%;
    align-self: stretch;
`;

export const FlexChildRight  = styled.div`
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (min-width: 768px) {
        width: 100%;
    }
    @media (min-width: 992px) {
        width: 40%;
        -webkit-box-shadow: -14px 0px 25px -5px rgb(206 206 206 / 46%);
        -moz-box-shadow: -14px 0px 25px -5px rgb(206 206 206 / 46%);
        box-shadow: -14px 0px 25px -5px rgb(206 206 206 / 46%);
    }
    @media (min-width: 1200px) {
        width: 40%;
        -webkit-box-shadow: -14px 0px 25px -5px rgb(206 206 206 / 46%);
        -moz-box-shadow: -14px 0px 25px -5px rgb(206 206 206 / 46%);
        box-shadow: -14px 0px 25px -5px rgb(206 206 206 / 46%);
    }

    width: 40%;
    align-self: stretch;
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

export const AnswerCard = styled.div`
    cursor: pointer;
    border: 1px solid #ffffff;
    background-color: whitesmoke;
    margin: 5px;
    transition: 0.3s;
    font-family: 'OpenSans';
    height: 80%;

    &:hover{
        border-color: ${BlockHoverColor};
        -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
    }
`;
export const AnswerImage = styled.img`
    width: 100%;
    height: auto;
    display: none;
`;

export const AnswerText = styled.p`
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 992px) {
        font-size: 1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1rem;
    }
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1rem;
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

    position: relative;
    width: 50%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const AssistantImg = styled.img`
    width: 90%;
    height: auto;
    border-radius: 100%;
`;

export const AssistantRCol = styled.div`

    @media (min-width: 1200px){
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    @media (min-width: 992px){
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }

    @media (min-width: 768px){
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
    }
    position: relative;
    width: 50%;
    padding-right: 15px;
    padding-left: 15px;
`;

export const SalesBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const SalesChildBlock = styled.div`
    @media (max-width: 768px) {    
        width: 70%;
    }
    @media (min-width: 768px) {
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 100%;
    }
    @media (min-width: 1200px) {
        width: 100%;
    }

    width: 100%;
`;

export const AssistantTitle = styled.div`
    @media (max-width: 768px) {    
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        font-size: 2rem;
    }
    @media (min-width: 992px) {
        font-size: 1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1rem;
    }

    font-size: 16px;
    font-weight: 500;
    margin: 0;
    color: #2e2e54;
    line-height: 1.125;
    font-family: 'OpenSans';
`;
export const AssistantSubtitle = styled.div`
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 992px) {
        font-size: 1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1rem;
    }

    font-size: 12px;
    color: #69748c;
    font-weight: 400;
    line-height: 1.15;
    margin: 0;
    font-family: 'OpenSans';
`;
export const AssistantMessage = styled.div`
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 992px) {
        font-size: 1rem;
    }
    @media (min-width: 1200px) {
        font-size: 1rem;
    }

    color: #b1b1b1;
    font-size: 12px;
    font-weight: 400;
    margin-top: 0.5rem!important;
    margin-bottom: 1rem!important;
    font-family: 'OpenSans';
`; 

export const SaleCount = styled.div`
    @media (min-width: 768px){
        font-size: 2rem;
        padding: 15px;
    }

    @media (min-width: 992px){
        font-size: 1rem;
        padding: 15px;
    }

    @media (min-width: 1200px){
        font-size: 1rem;
        padding: 15px;
    }

    text-align: center;
    margin: auto;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 10px;
    background-color: #BFA072;
    border: 2px solid #BFA072;
    font-family: 'OpenSans';
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
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid #e0e0e0;
    transition: 0.5s;
    font-family: 'OpenSans';

    ::placeholder {
        font-family: 'OpenSans' !impotrant;
    }

    &:focus{
        outline: none;
        border: 2px solid ${InputColor};
        border-radius: 0px;
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
    font-family: 'OpenSans' !impotrant;

    &:hover{
        background-color: white;
        color: ${BackgroundColor};
    }
    &:focus{
        outline: none;
    }
`;