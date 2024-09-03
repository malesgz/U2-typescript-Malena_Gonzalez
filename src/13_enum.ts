enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
};

const getColor = (color: Color): string => {
    return `The color is ${color}`;
};

console.log(getColor(Color.Red));
console.log(getColor(Color.Green));
console.log(getColor(Color.Blue));