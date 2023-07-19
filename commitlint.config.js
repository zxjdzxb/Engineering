/**
 * feat 新功能
 * fix 修补bug
 * docs 文档修改
 * style 样式修改
 * build 代码编译
 * refactor 代码重构
 * code 代码优化
 * test 测试用例
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'build', 'refactor', 'test', 'code']],
  },
}
