"use strict";var KTDatatableHtmlTableDemo={init:function(){var t;t=$(".kt-datatable").KTDatatable({data:{saveState:{cookie:!1}},search:{input:$("#generalSearch")}}),$("#kt_form_status").on("change",function(){t.search($(this).val().toLowerCase(),"Status")}),$("#kt_form_type").on("change",function(){t.search($(this).val().toLowerCase(),"Type")}),$("#kt_form_status,#kt_form_type").selectpicker()}};jQuery(document).ready(function(){KTDatatableHtmlTableDemo.init()});