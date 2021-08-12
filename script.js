const length = document.getElementById('g-length')
const button = document.getElementById('g-button')
const string = '0123456789@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'


button.addEventListener('click', () => {
    generate()
})

const generate = () => {
    if (length.value >= 5) {
        let result = ''
        for (let i = 0; i < length.value; i++) {
            const letter = string.charAt(Math.floor(Math.random() * string.length))
            result += letter
        }
        copyToClipboard(result)
    } else {
        alert('Too short')
    }
}

const copyToClipboard = (text) => {
    let copyText = text;
    let textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}