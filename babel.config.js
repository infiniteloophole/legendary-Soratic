module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript'
    ],
    plugins: [
      'nativewind/babel',
      '@babel/plugin-transform-modules-commonjs',
      ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
    ],
  };
};
