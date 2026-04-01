module.exports = {
  title: 'UTC TechBook vol.1',
  author: 'UTC（ウベテックコミュニティ）',
  language: 'ja',
  size: 'A5',
  theme: [
    'vivliostyle-theme-macneko-techbook@0.5.0',
    '@mitsuharu/vivliostyle-theme-noto-sans-jp@0.1.4',
    'theme/theme-custom',
  ],
  entry: [
    // 目次
    'index.md',
    // はじめに
    'preface.md',

    // 各章の原稿
    // （順番は適当で大丈夫です。ここはコンフリクトしやすいので注意してください）
    'emoto.md',

    'ejiri.md', // 最後に追加してください

    // 著者紹介
    'authors.md',
    // 奥付
    'colophon.md',
  ],
  entryContext: './manuscripts',
  output: ['output/ebook.pdf'],
  workspaceDir: '.vivliostyle',
  toc: false,
  cover: undefined,
}
