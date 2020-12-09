import React from 'react';
import {
    MainH2,
    MainH4,
    MainP,
    MainMutedP,
    FromP,
    FlexRow,
    FlexChild,
    FlexChildLeft,
    FlexChildRight,
    QuizInput,
    FormSendButton,
    FormMessengersButton,
} from './styled/index';
import { JsonQuiz, WithJson } from "./../../components/store";

export class EndForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            СonditionSent: true,
        };
        this.InputHandler = this.InputHandler.bind(this);
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    render(){
        let FormHandler;
        if(this.state.СonditionSent){
            FormHandler = (
                    <WithJson>
                        {myJson => myJson && myJson.JsonQuiz ? (
                        <FlexRow>
                            <FlexChildLeft>
                                <div style={{ marginTop: '10%', marginBottom: '5%',  textAlign: 'center', paddingRight: '10%', paddingLeft: '10%' }}>
                                    <MainP>Последний шаг</MainP>
                                    <MainMutedP>Оставьте телефон: мы закрепим скидку за вашим номером, а также, предоставим расчёт полной стоимости проекта</MainMutedP>
                                    <MainP style={{ marginTop: '20%' }}>Скидка действует в течение 30 дней!</MainP>
                                </div>
                            </FlexChildLeft>
                            <FlexChildRight>
                                <form
                                    onSubmit={ this.SubmitHandler }
                                    style={{
                                        textAlign: 'left',
                                        paddingTop: '30px',
                                        paddingBottom: '30px',
                                        paddingLeft: '30px',
                                        paddingRight: '20px'
                                    }}
                                >
                                    <MainH4>Заберите вашу скидку!</MainH4>
                                    <MainMutedP>Ваша скидка составляет: <span style={{ color: '#000', fontWeight: '700' }}>20%</span></MainMutedP>
                                    <div style={{ display: 'flex' }}>
                                        <QuizInput
                                            name="name"
                                            type="text"
                                            placeholder="Имя"
                                            onChange={ this.InputHandler }
                                            required
                                        />
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <QuizInput
                                            name="phone"
                                            type="phone"
                                            placeholder="Номер телефона"
                                            onChange={ this.InputHandler }
                                            required
                                        />
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <QuizInput
                                            name="email"
                                            type="email"
                                            placeholder="Почта"
                                            onChange={ this.InputHandler }
                                            required
                                        />
                                    </div>
                                    <FlexRow style={{ marginTop: '10px' }}>
                                        <FlexChild style={{ width: '100%' }}>
                                            <FormSendButton><i className="far fa-check-square"></i> Отправить</FormSendButton>
                                            <FormMessengersButton><i className="far fa-comments"></i> Использовать мессенджер</FormMessengersButton>
                                        </FlexChild>
                                    </FlexRow>
                                </form>
                            </FlexChildRight>
                        </FlexRow>
                    ) : null}
                </WithJson>
            );
        }
        else{
            FormHandler = (
                <MainP>Ваша заявка отправлена. Наш менеджер свяжется с вами в ближайшее время.</MainP>
            );
        }
        return (
            <WithJson>
                {myJson => myJson && myJson.JsonQuiz ? (
                <FlexRow style={{ width: '100%', textAlign: 'center' }}>
                    { FormHandler }
                </FlexRow>
            ) : null}
        </WithJson>
        );
    }

    SubmitHandler(e){
        e.preventDefault();
        let QuizData = {
            Name: this.state.name,
            Phone: this.state.phone,
            Answer: this.props.AllAnswers,
        };
        fetch(JsonQuiz.getState().zaiperlink, {
            method: 'post',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(QuizData)
        }).then(response => response.json());

        this.setState({
            СonditionSent: false,
        });
    }

    InputHandler(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
}