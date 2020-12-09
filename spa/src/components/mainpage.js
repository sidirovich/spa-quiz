import React from 'react';
import {
    MainQuizBody,
    MainQuizBlock,
    MainH2,
    MainP,
    MainColoredP,
    MainMutedP,
    MainSmallP,
    MainSendButton,
    MainImage,
    DRightColMain,
} from './QuizComponent/styled/';
import {
    DContaider,
} from './QuizComponent/styled/cssGrid';
import { WithJson } from "./../components/store";

class MainPage extends React.Component {
    render(){
        return (
            <React.Fragment>
                <WithJson>
                {myJson => myJson && myJson.JsonQuiz ? (
                <DContaider>
                    <MainQuizBody>
                        <MainQuizBlock>
                            <DRightColMain style={{ paddingTop: 40, paddingBottom: 40, paddingLeft: 40, paddingRight: 30 }} >
                                <MainH2>Ответь на несколько вопросов</MainH2>
                                <MainP>Пройди тест, посмотри, как он работает, и открой доступ к 14-дневному пробному периоду и другим бонусам!</MainP>
                                <MainSendButton onClick={ () => { this.props.buttonFunc() } }>Пройти тест</MainSendButton>
                                <MainColoredP>{myJson.JsonQuiz.mainpage.phone ? myJson.JsonQuiz.mainpage.phone : null }</MainColoredP>
                                <MainMutedP>Есть вопрос? Звоните!</MainMutedP>
                            </DRightColMain>
                            <MainImage style={{ backgroundImage: 'url("https://quiz.joint-studio.ru/image/main-notebook.png")' }}/>
                        </MainQuizBlock>
                    </MainQuizBody>
                </DContaider>
                ) : null}
                </WithJson>
            </React.Fragment>
        );
    }
}

export default MainPage;