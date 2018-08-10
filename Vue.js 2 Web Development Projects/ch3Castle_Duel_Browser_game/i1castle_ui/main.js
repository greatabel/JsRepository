new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: '<div id="#pp">\
                <top-bar/> \
               </div>',

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
