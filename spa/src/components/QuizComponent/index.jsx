import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
    GetJson,
    WithJson,
} from '../store/';
import GlobalFonts from '../../fonts/fonts';
import { QuizHandler } from '../quiz';
import MainPage from '../mainpage';


export function QuizComponent() {
    GetJson();
    const [page, setPage] = useState(1);
    const UpdatePage = () => setPage(2);
  
    const SwitchHandler = () => {
      let mycomponent;
      switch(page) {
        case 1:
          mycomponent = (
            <MainPage buttonFunc={ UpdatePage } />
          );
          break;
        case 2:
          mycomponent = (
            <QuizHandler />
          );
          break;
        default:
          mycomponent = null;
      }
      return mycomponent;
    }
    
    return (
        <WithJson>
          {myJson => myJson && myJson.JsonQuiz ? (
            <ThemeProvider theme={ { main: myJson.JsonQuiz.quizcolor } }>
              <GlobalFonts />
              { SwitchHandler(UpdatePage) }
            </ThemeProvider>
          ) : null }
        </WithJson>
    );
}