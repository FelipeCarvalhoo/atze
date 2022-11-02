function firstLatter(name : String) {
    let firstletter = name.charAt(0).toUpperCase();
    return firstletter+name.substring(1);
}
firstLatter('felipe')