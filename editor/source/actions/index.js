import * as menuAction from './menu';
import * as editorAction from './editor';
import * as toolbarAction from './toolbar';

const ACTION = {
    SHOW_LIST: 'SHOW_LIST',
    HIDE_LIST: 'HIDE_LIST',
    SHOW_LOADING: 'SHOW_LOADING',
    SELECT_ARTICLE: 'SELECT_ARTICLE',
    REFRESH_LIST: 'REFRESH_LIST',

    SET_HEADER: 'SET_HEADER',
    SET_CONTENT: 'SET_CONTENT',

    SAVE_CONTENT: 'SAVE_CONTENT'
};

export {
    ACTION,
    menuAction,
    editorAction,
    toolbarAction
};