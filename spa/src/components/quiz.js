import React from 'react';
import { DContaider } from './QuizComponent/styled/cssGrid';
import {
    MainQuizBody,
    QuizBlock,
} from './QuizComponent/styled';
import QuestGenerator from './quest-generator';
import { SaleComponent } from './SaleComponents';
import { WithJson } from "./store/";
import { EndForm } from './QuizComponent/endform';

export class QuizHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            CurrentQuest: 0,
            saleCount: 0,
            answerArray: [],
        };
    }

    render() {
        return (
            <DContaider>
                <WithJson>
                    { store => (
                        <MainQuizBody>
                            <QuizBlock>
                                {store.JsonQuiz.quests[this.state.CurrentQuest] ? 
                                    <>
                                        <QuestGenerator
                                            AllAnswers={ this.state.answerArray }
                                            QuestNumber={ this.state.CurrentQuest }
                                            ChangeQuest={ this.ChangeQuest }
                                            GetBack={ this.backQuest }
                                        />
                                        <SaleComponent
                                            QuestNumber={ this.state.CurrentQuest }
                                            saleCount={ this.state.saleCount }
                                            handlerButton={ this.backQuest }
                                        />
                                    </>
                                : null}
                                { store.JsonQuiz.quests[this.state.CurrentQuest] ? null :
                                <EndForm
                                    saleCount={ this.state.saleCount }
                                    ChangeQuest={ this.ChangeQuest }
                                    AllAnswers={ this.state.answerArray }
                                /> }
                            </QuizBlock>
                        </MainQuizBody>
                    )}
                </WithJson>
            </DContaider>
        );
    }

    ChangeQuest = (myCount) => {
        let answerName = 'quest' + this.state.CurrentQuest;
        if(this.state.CurrentQuest === 6){
            this.setState(state => {
                let old = state.answerArray;
                old[answerName] = myCount;
                return {
                    CurrentQuest: this.state.CurrentQuest + 1,
                    answerArray: old,
                };
            });
        }
        else{
            this.setState(state => {
                let old = state.answerArray;
                old[answerName] = myCount;
                return {
                    CurrentQuest: this.state.CurrentQuest + 1,
                    answerArray: old,
                    saleCount: state.saleCount + 4,
                };
            });
        }
    }

    nextQuest = () => {}

    backQuest = () => {
        this.setState({
            CurrentQuest: this.state.CurrentQuest - 1,
            saleCount: this.state.saleCount - 4,
        });
    }
}