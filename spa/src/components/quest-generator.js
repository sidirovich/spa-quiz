import React from 'react';
import {
    AnswerImage,
} from './answers/stylesheets';
import {
    DLeftCol,
    MainH2,
    MainP,
    MainSendButton,
    RowAnswer,
    AnswerColumn,
    AnswerCard,
    AnswerText,
} from './QuizComponent/styled/';
import { WithJson } from "./../components/store";
 
class QuestGenerator extends React.Component{
    render() {
       return (
            <WithJson>
                {store => store && store.JsonQuiz ? (
                    <DLeftCol>
                        <MainP><i class="fas fa-tasks"></i> Шаг { this.props.QuestNumber + 1 } из 5</MainP>
                        <MainH2>{ store.JsonQuiz.quests[this.props.QuestNumber].quest }</MainH2>
                        <RowAnswer>
                            { store.JsonQuiz.quests[this.props.QuestNumber].answers.map(answer => (
                                <AnswerColumn onClick={() => { this.SelectAnswer(answer.text) }}>
                                        <AnswerCard>
                                            {answer.image ? <AnswerImage src={ answer.image } /> : null }
                                            <AnswerText>{answer.text}</AnswerText>
                                        </AnswerCard>
                                </AnswerColumn>
                            )) }
                        </RowAnswer>
                        { this.props.QuestNumber !== 0 ? <MainSendButton style={{ marginTop: 30 }} onClick={ () => { this.props.GetBack() } } >Назад</MainSendButton> : null }
                    </DLeftCol>
                ) : null}
            </WithJson>
        );
    }

    SelectAnswer = (myAnswer) => {
        this.props.ChangeQuest(myAnswer);
    }
}

export default QuestGenerator;
