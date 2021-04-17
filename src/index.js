const parceros = [
    "oscar",
    "jeffer",
    "laura",
    "jose",
    "ana",
    "luisa",
    "carolina",
    "paulo",
    "fabian",
    "sofia"
];

const randomParceros = () => {
    const message = parceros[Math.floor(Math.random() *
         parceros.length)]
    console.log(message)
}

module.exports = { randomParceros };