define(['jquery', 'kendo-all'],
    function($, kendo) {
        var _self = {};

        _self.initialyze = function() {
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
        }

        return _self;
    });