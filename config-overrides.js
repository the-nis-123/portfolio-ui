//overrinding cra webpack configurations without ejecting
const { useBabelRc, override } = require('customize-cra');

module.exports = override(useBabelRc());