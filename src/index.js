module.exports = function reverse (n) {
    let str = n.toString();
    
    str = str.split("").reverse().join("");
    str = parseInt(str); 
    return str;
}
