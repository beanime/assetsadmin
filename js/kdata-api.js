"use strict";
var KTDatatableDataLocalDemo = {
    init: function() {
        var t;
        t = $("#kt_datatable").KTDatatable({
            data: {

                type: "remote",
                source: {
                    read: {
                        url: HOST_URL + "/api/admin/komiks/datapost",
                        map: function(t) {
                            var a = t;
                            return void 0 !== t.data && (a = t.data), a
                        }
                    }
                },
                pageSize: 10,
                serverPaging: !0,
            },
            layout: {
                scroll: !1,
                footer: !1
            },
            sortable: !0,
            pagination: !0,
            search: {
                input: $("#generalSearch")
            },
            columns: [{
                field: "komik_id",
                title: "ID",
                width: 30,
                sortable: 'desc',
                type: "number",
                textAlign: "center"
            }, {
                field: "komik_name",
                title: "Name",
            }, {
                field: "komik_image",
                title: "Image",
                template: function(t) {
                    return '<a href="https://images.weserv.nl/?url=beanime.xyz/images/komik/200/'+t.komik_image+'" target="_blank"><img class="lazyload" data-src="https://images.weserv.nl/?url=beanime.xyz/images/komik/50/'+t.komik_image+'" alt=""></a>'
                }
            }, {
                field: "ksub_name",
                title: "Anime Manga"
            }, {
                field: "komik_chap",
                title: "Chpater"
            }, {
                field: "komik_url",
                title: "Url"
            }, {
                field: "ksub_status",
                title: "Status",
            }, {
                field: "created_at",
                title: "Create",
            }, {
                field: "updated_at",
                title: "Update",
            }, {
                field: "Actions",
                width: 125,
                title: "Actions",
                sortable: !1,
                autoHide: !1,
                template: function(t) {
                    return '<form action="'+HOST_URL+'/admin/komiks/delete/'+t.komik_id+'" method="post" class="form-horizontal"><input type="hidden" name="_method" value="DELETE"><a href="'+HOST_URL+'/admin/komiks/edit/'+t.komik_id+'" class="btn btn-warning btn-sm">Edit</a><button type="submit" id="delete" class="btn btn-danger btn-sm">Delete</button></form>'
                }
            }]
        })
    }
};
jQuery(document).ready((function() {
    KTDatatableDataLocalDemo.init()
}));
