(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _iec_curve_iec_curve_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iec-curve/iec-curve.component */ "./src/app/projects/iec-curve/iec-curve.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/__ivy_ngcc__/fesm2015/ngx-markdown.js");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/__ivy_ngcc__/fesm2015/angular-plotly.js.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _iec_page_iec_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./iec-page/iec-page.component */ "./src/app/projects/iec-page/iec-page.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _help_dialog_help_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./help-dialog/help-dialog.component */ "./src/app/projects/help-dialog/help-dialog.component.ts");


















class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forChild(),
            angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__["PlotlyViaWindowModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_iec_curve_iec_curve_component__WEBPACK_IMPORTED_MODULE_2__["IecCurveComponent"], _iec_page_iec_page_component__WEBPACK_IMPORTED_MODULE_11__["IecPageComponent"], _help_dialog_help_dialog_component__WEBPACK_IMPORTED_MODULE_15__["HelpDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"], angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__["PlotlyViaWindowModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_iec_curve_iec_curve_component__WEBPACK_IMPORTED_MODULE_2__["IecCurveComponent"], _iec_page_iec_page_component__WEBPACK_IMPORTED_MODULE_11__["IecPageComponent"], _help_dialog_help_dialog_component__WEBPACK_IMPORTED_MODULE_15__["HelpDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forChild(),
                    angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__["PlotlyViaWindowModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=projects-projects-module-es2015.js.map