const { Packer } = require('roadroller')

module.exports = function (source) {
    const { mode } = this.getOptions()
    if(mode === "development") {
        return `  ${source}  ;console.log('lol')`
    }

    const callback = this.async()

    const inputs = [
        {
            data: source,
            type: 'js',
            action: 'eval',
        },
    ];

    const options = {};

    const packer = new Packer(inputs, options);
    packer.optimize().then(() => {
        const { firstLine, secondLine } = packer.makeDecoder();
        callback(null, firstLine + secondLine )
    })
}
