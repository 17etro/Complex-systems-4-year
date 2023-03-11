const fs = require('fs'); 
const path = require('path');
const { MIN_FLOAT, 
    MAX_FLOAT,
    MATRIX_X,
    MATRIX_Y,
    JSON_DATA_NAME,
    FORMULAS_RESULT_NAME } = require('./constants')

// function for generate random value from floats range
const generateRandomValue = (minFloat, maxFloat) => {
    return minFloat + Math.random() * (maxFloat - minFloat);
};

// function for generate vector with random numbers
const generateVector = (length, minFloat, maxFloat) => {
    let vector = [];

    for (let i = 0; i < length; i++) {
        vector.push(generateRandomValue(minFloat, maxFloat));
    }

    vector = vector.sort((a, b) => a > b ? 1 : a === b ? 0 : -1)

    return vector;
};

const generateMatrix = (matrix_x, matrix_y, minFloat, maxFloat) => {
    const matrix = [];

    for (let i = 0; i < matrix_y; i++) {
        const matrixRow = [];
        for (let j = 0; j < matrix_x; j++) {
            matrixRow.push(generateRandomValue(minFloat, maxFloat));
        }
        matrix.push(matrixRow.sort((a, b) => a > b ? 1 : a === b ? 0 : -1))
    }

    return matrix;
};

const createData = () => {
    const MB = generateMatrix(MATRIX_X, MATRIX_Y, MIN_FLOAT, MAX_FLOAT)
    const MT = generateMatrix(MATRIX_X, MATRIX_Y, MIN_FLOAT, MAX_FLOAT)
    const MC = generateMatrix(MATRIX_X, MATRIX_Y, MIN_FLOAT, MAX_FLOAT)
    const MM = generateMatrix(MATRIX_X, MATRIX_Y, MIN_FLOAT, MAX_FLOAT)

    const D = generateVector(MATRIX_X, MIN_FLOAT, MAX_FLOAT);
    const C = generateVector(MATRIX_X, MIN_FLOAT, MAX_FLOAT);

    fs.writeFile(JSON_DATA_NAME,  JSON.stringify({ MB, MT, MC, MM, D, C }, null, 4), (error) => {
        if (error) throw error;

        console.log(`Successfully saved results in ${JSON_DATA_NAME}`)
    })
    fs.unlink(path.join(__dirname, FORMULAS_RESULT_NAME), (error) => {
    })
}

createData();