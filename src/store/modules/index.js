/* 此文件会自动将同级.js文件默认导出的模块添加到cache中，
将vuex的store的modules赋值为cache即可实现模块的自动注册 */
const cache = {}

function importAll(r) {
  r.keys().forEach(filePath => {
    // ./index.js是当前文件，无需处理
    if(filePath === './index.js') return
    // 模块路径转换为对应的模块名称
    const moduleName = filePath.replace(/^\.\/(.*)\.\w+$/,'$1')
    // 将模块的默认导出添加到cache对象中
    cache[moduleName] = r(filePath).default
  });
}
// 调用importAll函数，传入一个上下文模块，包含同级以.js结尾文件模块的引用
importAll(require.context('./', false, /\.js$/))
/* require.context() 创建自己的 context。
可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。 */

export default cache