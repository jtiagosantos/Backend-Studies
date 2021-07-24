module.exports = function getFlag(flag) {
    const args = process.argv;
    let valueFlag = '';

    args.forEach((arg, index) => {
        if(arg == flag) {
            valueFlag = args[index+1];
        }
    });

    return valueFlag;
};