const coverage = require('@tact-lang/coverage');
const path = require('path');

module.exports = async () => {
    coverage.completeCoverage(path.resolve(__dirname, 'examples', 'output'));
    coverage.completeCoverage(path.resolve(__dirname, 'src', 'test', 'features', 'output'));
};