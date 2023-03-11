const { calculateFormulas } = require("./config");

const main = () => {
    console.time("sync-flow");
    const formulas = calculateFormulas({ part: undefined })
    console.timeEnd("sync-flow");
};

main()