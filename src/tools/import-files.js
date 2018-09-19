function importStyles(context){
    context.keys().forEach(key => context(key));
}

function importScripts(context){
    const scripts = {};
    context.keys().forEach(function (key){
        scripts[key] = context(key);
    });
    return scripts;
}

export {importScripts, importStyles};
