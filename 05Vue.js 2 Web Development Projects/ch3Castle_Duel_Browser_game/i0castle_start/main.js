new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: '<div id="#pp">{{ worldRatio }} \
    </div>',

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
