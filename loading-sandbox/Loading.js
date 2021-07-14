const Loading = (() => {

    let _counter = 0;

    const _template = `
<div class="my-loading">
  <div class="my-loading-mark"></div>
</div>
    `

    return class Loading {

        static show() {
            _counter++;
            if (_counter !== 1) {
                return;
            }
            //0から1になったとき
            const loading = document.createElement('div')
            document.body.append(loading)
            loading.outerHTML = _template
        }

        static hide() {
            _counter--;
            if (_counter !== 0) {
                return;
            }
            //1から0になった時
            const loadings = document.querySelectorAll('.my-loading')
            loadings.forEach(elem => elem.remove())
        }
    }
})()