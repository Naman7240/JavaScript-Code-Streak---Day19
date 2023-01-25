//JS swap case
swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase('AaBbc'));
console.log(swapcase('VITbhopal'));
console.log(swapcase('Naman kHANDELWAL'));
console.log(swapcase('Coding STREAK'));
console.log(swapcase('jAVAsCRIPT'));
