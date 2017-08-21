(function(window, _) {

  var vm = new Vue({
    el: '.c-markdown-editor',
    template: '#t-markdown-editor',
    data: {
      rawHtml: '',
      markdown: '',
    },
    methods: {
      update: _.debounce(function(e) {
        this.markdown = marked(e.target.value);
      }, 300)
    }
  })

})(window, _);
