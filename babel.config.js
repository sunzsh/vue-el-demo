module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [ 
    '@babel/plugin-proposal-optional-chaining' ,  //可选链 ?.
    '@babel/plugin-proposal-nullish-coalescing-operator'  //空值合并 ??
] 
}
