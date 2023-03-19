const fs = require("fs");
const path = require("path");
const {
  MATRIX_X,
  JSON_DATA_NAME,
  FORMULAS_RESULT_NAME,
  STREAMS_COUNT,
} = require("./constants");
const { kahanSum } = require("./kahan");

// formulas
// MG = MB * MT + MC * (MB * MM + MT)
// B = D * MT - min(D) * C

const { MB, MT, MC, MM, D, C } = (() =>
  JSON.parse(fs.readFileSync(path.join(__dirname, JSON_DATA_NAME))))();

const calculateFormulas = ({ part }) => {
  let offset = 0;
  let limit = MATRIX_X;

  if (part !== undefined) {
    offset = Math.floor((MATRIX_X / STREAMS_COUNT) * part);
    limit = Math.floor(MATRIX_X / STREAMS_COUNT);
  }

  const B = [];
  const MG = [];

  for (let i = offset; i < Math.min(offset + limit, MATRIX_X); i++) {
    B.push(kahanSum([D[i] * MT[i][i], -Math.min.apply(null, D) * C[i]]));

    const MG_row = [];

    for (let j = offset; j < Math.min(offset + limit, MATRIX_X); j++) {
      MG_row.push(
        kahanSum([
          MB[i][j] * MT[i][j],
          MC[i][j] * (MB[i][j] * kahanSum(MM[i][j], MT[i][j])),
        ])
      );
    }

    MG.push(MG_row);
  }

  fs.appendFile(
    path.join(__dirname, FORMULAS_RESULT_NAME),
    JSON.stringify({ B, MG }, null, 4),
    () => {}
  );

  return {
    B,
    MG,
  };
};

module.exports = {
  calculateFormulas,
};
