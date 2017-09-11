requirejs.config({
    baseUrl: '/Scripts/libs',
    paths: {
        vueFolder: '../pages/vue-trainings'
    }
});

require(['jquery', 'vueFolder/home', 'vueFolder/components'],
    function ($, vueHome, vueComponents) {
        $(function () {
            vueHome.initialyze();
            vueComponents.initialyze();
        });
    });
