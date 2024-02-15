import ja from './locale/ja';

export default (editor, opts = {}) => {
  const options = { ...{
    i18n: {
      // locale: 'ja', 
      // detectLocale: true,
      // localeFallback: 'ja',
      messages: {ja},
    },
    // default options
  },  ...opts };

  
  
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
      ja,
      ...options.i18n,
  });

  // TODO Remove
  editor.on('load', () =>
    editor.addComponents(
        `<div style="margin:100px; padding:25px;">
            Content loaded from the plugin
        </div>`,
        { at: 0 }
    ))
};