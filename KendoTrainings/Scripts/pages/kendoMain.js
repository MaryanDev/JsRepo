requirejs.config({
    baseUrl: '/Scripts/libs',
    paths: {
        kendoFolder: '../pages/kendo-trainings'
    }
});

require(['jquery', 'kendoFolder/home'],
    function ($, kendoHome) {
        $(function () {
            kendoHome.initialyze();
        });
    });
