import React from 'react';
import { Redirect } from "react-router-dom";
import { clearStorageJWT } from '../../utils/session';
import { ExitApp } from '../store/';

export function ExitComponent ()
{
    clearStorageJWT();
    ExitApp();
    return (
        <Redirect to="/" />
    );
}