function templates(hash){
    var hash = hash;

    //look for hash in url and load up html template based on hash
    function importTemplate(hash){
        var template = '.' + hash;
        var fileImport = '#' + hash;
        var getImport = document.querySelector(fileImport);
        var getContent = getImport.import.querySelector(template);
        var imported = document.getElementById("imported");
        imported.innerHTML='';
        imported.appendChild(document.importNode(getContent, true));
    }

    function supportsImports() {
        return 'import' in document.createElement('link');
    }

    if (supportsImports()) {
        // Good to go!
        importTemplate(hash);
    } else {
        // Use other libraries/require systems to load files.
        alert('HTML imports are NOT supported by this browser');
    }
    closeNav();
}