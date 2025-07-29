const { register } = require('@babel/register');

register({
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  cache: false,
});
