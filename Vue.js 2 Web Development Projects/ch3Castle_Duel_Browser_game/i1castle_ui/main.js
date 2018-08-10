new Vue({
    name: 'game',
    el: '#app',

    data: state,
    template: '<div id="#pp">\
                <top-bar :turn="turn" :current-player-index="currentPlayerIndex"\
                         :players="players"/> \
               </div>',

})


window.addEventListener('resize', () => {
    state.worldRatio = getWorldRatio()
})
