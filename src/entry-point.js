import './global/global.styl';
import {importScripts, importStyles} from './tools/import-files';
import 'jquery';

const scripts = importScripts(
    require.context('./components/',
        true, /^\.\/.*\.(js|ts)$/)
);
importStyles(require.context('./components/',
    true, /^\.\/.*\.styl$/));

$(document).ready(() => {
    for (let key in scripts)
    {
        if (scripts[key].default) {
            scripts[key].default(true);
        }
    }
});

if(module.hot){
    module.hot.accept();
}
