import React from 'react';
import {
    DRow,
    DCol,
    DCol4,
    DCol6,
} from './QuizComponent/styled/cssGrid';
import {
    SalesBlock,
    SalesChildBlock,
    SaleCount,
    DRightCol,
    AssistantImg,
    AssistantTitle,
    AssistantSubtitle,
    AssistantMessage,
} from './QuizComponent/styled';

export function SaleComponent(props) {
    return (
        <DRightCol style={{ height: '100%' }}>
            <SalesBlock>
                <SalesChildBlock>
                    <DRow>
                        <DCol4>
                            <AssistantImg src="https://randomuser.me/api/portraits/women/21.jpg"/>
                        </DCol4>
                        <DCol6 style={{ paddingLeft: '15px' }}>
                            <AssistantTitle>Валентина</AssistantTitle>
                            <AssistantSubtitle>Консультант</AssistantSubtitle>
                            <AssistantMessage>Вы экономите наше время. Поэтому за каждый ответ ваша скидка растет.</AssistantMessage>
                        </DCol6>
                    </DRow>
                    <DRow>
                        <DCol>
                            <SaleCount>Ваша скидка: { props.saleCount } %</SaleCount>
                        </DCol>
                    </DRow>
                </SalesChildBlock>
            </SalesBlock>
        </DRightCol>
    );
}
