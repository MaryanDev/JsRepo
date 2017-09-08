requirejs.config({
    baseUrl: 'Scripts/libs'
});

require(['jquery', 'kendo-all'],
    function ($, kendo) {
        $(function () {
            var animalsDataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "/Kendo/GetAnimals",
                        type: "get",
                        dataType: "json"
                    }
                }
            });

            $("#animal").kendoAutoComplete({
                dataSource: animalsDataSource
            });

            $("button").kendoButton();


            //var fields = [
            //{
            //        name: "name",
            //        type: "Full Name"
            //},{
            //    name: "yearsEmployed",
            //    type: "Number",
            //    min: 1,
            //    max: 30,
            //    decimals: 0
            //}, {
            //    name: "department",
            //    type: "Custom List",
            //    values: ["R+D", "Marketing", "HR"]
            //}, {
            //    name: "dob",
            //    type: "Date",
            //    min: "1/1/1950",
            //    max: "1/1/2000",
            //    format: "%m/%d/%Y"
            //}];

            //var url = 'https://api.mockaroo.com/api/generate.json?count=50&key=577f1980' +
            //    '&fields=' + encodeURIComponent(JSON.stringify(fields));

            var gridDataSource = new kendo.data.DataSource({
                type: "aspnetmvc-ajax",
                transport: {
                    read: {
                        url: "/Kendo/GetGridData",
                        type: "get",
                        dataType: "json"
                    },
                    update: {
                        url: "/Kendo/UpdateGrid",
                        type: "post"
                    }
                },
                //schema: {
                //    data: "items"
                //},
                change: function (data) {
                    console.log(data);
                }
            });


            $("#grid").kendoGrid({
                height: 500,
                sortable: {
                    mode: "multiple",
                    allowUnsort: true
                },
                columns: [
                    {
                        field: "Name",
                        title: "Name",
                        sortable: true
                    },
                    {
                        field: "YearsEmployed",
                        title: "Years Employed",
                        sortable: true
                    },
                    {
                        field: "Department",
                        title: "Department",
                        sortable: true
                    },
                    {
                        field: "DoB",
                        title: "Date of birth",
                        sortable: true
                    }
                ],
                editable: true,
                dataSource: gridDataSource
            });
        });
    });
