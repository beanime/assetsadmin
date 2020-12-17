"use strict";
var KTDatatableDataLocalDemo = {
    init: function() {
        var t;
        t = $("#kt_datatable").KTDatatable({
            data: {

                type: "remote",
                source: {
                    read: {
                        url: HOST_URL + "/api/admin/posts/datapost",
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
                input: $("#kt_datatable_search_query")
            },
            columns: [{
                field: "post_id",
                title: "ID",
                width: 30,
                textAlign: "center"
            }, {
                field: "updated_at",
                title: "Update",
            }, {
                field: "post_name",
                title: "Name",
            }, {
                field: "post_image",
                title: "Image",
                template: function(t) {
                    return '<a href="'+HOST_URL+'/images/posts/200/'+t.post_image+'" target="_blank"><img class="lazyload" data-src="/images/posts/90/'+t.post_image+'" alt=""></a>'
                }
            }, {
                field: "category_name",
                title: "Category"
            }, {
                field: "sub_name",
                title: "Anime"
            }, {
                field: "post_url",
                title: "Url"
            }, {
                field: "post_episodes",
                title: "Episode",
            }, {
                field: "Actions",
                width: 125,
                title: "Actions",
                sortable: !1,
                autoHide: !1,
                template: function(t) {
                    return '<form action="'+HOST_URL+'/admin/posts/delete/'+t.post_id+'" method="post" class="form-horizontal"><input type="hidden" name="_method" value="DELETE"><a href="'+HOST_URL+'/admin/posts/edit/'+t.post_id+'" class="btn btn-warning btn-sm">Edit</a><a href="javascript:void(0);" id="editrow" data-row="'+t.post_id+'" class="btn btn-brand btn-sm">add video</a><button type="submit" id="delete" class="btn btn-danger btn-sm">Delete</button></form>'
                }
            }]
        })
    }
};
jQuery(document).ready((function() {
    KTDatatableDataLocalDemo.init()
}));
