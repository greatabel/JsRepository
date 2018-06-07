Vue.directive("focus", {
        inserted: function(el){
            el.focus();
            console.log('focus')
        }
    });

new Vue({
    el: "#app"
});
