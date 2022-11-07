function firstLatterUpperCase(name : string) {
    let firstletter = name.charAt(0).toUpperCase();
    return firstletter+name.substring(1);
}


firstLatterUpperCase('felipe')//vai deixar a primeira letra maiuscula