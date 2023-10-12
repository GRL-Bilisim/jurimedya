"use strict";
(self["webpackChunkapex_admin"] = self["webpackChunkapex_admin"] || []).push([["default-src_app_shared_data_sweet-alerts_ts"],{

/***/ 645:
/*!*********************************************!*\
  !*** ./src/app/shared/data/sweet-alerts.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicAlert": function() { return /* binding */ BasicAlert; },
/* harmony export */   "WithTitle": function() { return /* binding */ WithTitle; },
/* harmony export */   "WithFooter": function() { return /* binding */ WithFooter; },
/* harmony export */   "HtmlAlert": function() { return /* binding */ HtmlAlert; },
/* harmony export */   "PositionTopStart": function() { return /* binding */ PositionTopStart; },
/* harmony export */   "PositionTopEnd": function() { return /* binding */ PositionTopEnd; },
/* harmony export */   "PositionBottomStart": function() { return /* binding */ PositionBottomStart; },
/* harmony export */   "PositionBottomEnd": function() { return /* binding */ PositionBottomEnd; },
/* harmony export */   "BounceInAnimation": function() { return /* binding */ BounceInAnimation; },
/* harmony export */   "FadeInAnimation": function() { return /* binding */ FadeInAnimation; },
/* harmony export */   "FlipXAnimation": function() { return /* binding */ FlipXAnimation; },
/* harmony export */   "TadaAnimation": function() { return /* binding */ TadaAnimation; },
/* harmony export */   "ShakeAnimation": function() { return /* binding */ ShakeAnimation; },
/* harmony export */   "TypeSuccess": function() { return /* binding */ TypeSuccess; },
/* harmony export */   "TypeInfo": function() { return /* binding */ TypeInfo; },
/* harmony export */   "TypeWarning": function() { return /* binding */ TypeWarning; },
/* harmony export */   "TypeError": function() { return /* binding */ TypeError; },
/* harmony export */   "CustomIcon": function() { return /* binding */ CustomIcon; },
/* harmony export */   "AutoClose": function() { return /* binding */ AutoClose; },
/* harmony export */   "OutsideClick": function() { return /* binding */ OutsideClick; },
/* harmony export */   "PromptFunction": function() { return /* binding */ PromptFunction; },
/* harmony export */   "AjaxRequest": function() { return /* binding */ AjaxRequest; },
/* harmony export */   "ConfirmText": function() { return /* binding */ ConfirmText; },
/* harmony export */   "ConfirmColor": function() { return /* binding */ ConfirmColor; }
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

//-------------- Basic --------------
// Simple Alert
function BasicAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Any fool can use a computer',
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    });
}
// Alert with Title
function WithTitle() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'The Internet?',
        text: "That thing is still around?",
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Alert with footer
function WithFooter() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href = "javascript:void(0);">Why do I have this issue?</a>',
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    });
}
//  HTML Alert
function HtmlAlert() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html: 'You can use <b>bold text</b>, ' +
            '<a href="https://pixinvent.com/" target="_blank">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-o-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-o-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
        buttonsStyling: false,
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
        },
    });
}
//-------------- Position --------------
// Top-start
function PositionTopStart() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        position: 'top-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Top-end
function PositionTopEnd() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Bottom-start
function PositionBottomStart() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        position: 'bottom-start',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Bottom-end
function PositionBottomEnd() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        position: 'bottom-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
//-------------- Animations --------------
// Bounce-in
function BounceInAnimation() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Bounce In Animation',
        showClass: {
            popup: 'animated bounceIn'
        },
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Fade-in
function FadeInAnimation() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Fade In Animation',
        showClass: {
            popup: 'animated fadeIn'
        },
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false
    });
}
// Flip-in
function FlipXAnimation() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Flip In Animation',
        showClass: {
            popup: 'animated flipInX'
        },
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Tada
function TadaAnimation() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Tada Animation',
        showClass: {
            popup: 'animated tada'
        },
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Shake
function ShakeAnimation() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Shake Animation',
        showClass: {
            popup: 'animated shake'
        },
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
//-------------- Types --------------
// Success
function TypeSuccess() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Info
function TypeInfo() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Info!",
        text: "You clicked the button!",
        icon: "info",
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Warning
function TypeWarning() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Warning!",
        text: "You clicked the button!",
        icon: "warning",
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Error
function TypeError() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Error!",
        text: "You clicked the button!",
        icon: "error",
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
//-------------- Options --------------
// Custom Icon
function CustomIcon() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'assets/img/gallery/13.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Auto close
function AutoClose() {
    var timerInterval;
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
        onBeforeOpen: function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            timerInterval = setInterval(function () {
                var content = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getContent();
                if (content) {
                    var b = content.querySelector('b');
                    if (b) {
                        b.textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getTimerLeft().toString();
                    }
                }
            }, 100);
        },
        onClose: function () {
            clearInterval(timerInterval);
        }
    }).then(function (result) {
        /* Read more about handling dismissals below */
        if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.timer)) {
            console.log('I was closed by the timer');
        }
    });
}
// Allow Outside Click
function OutsideClick() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Outside click is disabled!',
        text: 'This is a cool message!',
        allowOutsideClick: false,
        customClass: {
            confirmButton: 'btn btn-primary'
        },
        buttonsStyling: false,
    });
}
// Prompt Function
function PromptFunction() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3'],
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
    }).queue([{
            title: 'Question 1',
            text: 'Chaining swal2 modals is easy'
        },
        'Question 2',
        'Question 3'
    ]).then(function (result) {
        if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'All done!',
                html: 'Your answers: <pre><code>' +
                    JSON.stringify(result.value) +
                    '</code></pre>',
                confirmButtonText: 'Lovely!'
            });
        }
    });
}
// Ajax Request
function AjaxRequest() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
        },
        preConfirm: function (login) {
            return fetch("//api.github.com/users/" + login)
                .then(function (response) {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
                .catch(function (error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showValidationMessage("Request failed: " + error);
            });
        },
        allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().isLoading(); }
    }).then(function (result) {
        if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: result.value.login + "'s avatar",
                imageUrl: result.value.avatar_url
            });
        }
    });
}
//-------------- Confirm-options --------------
// Confirm Text
function ConfirmText(kayitid, formid) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Kayıt Silinsin mi?' + kayitid,
        text: "Değişiklik geri alınamayacaktır!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Evet Sil',
        cancelButtonText: 'İptal',
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "success",
                title: 'Silme işlemi başarılı!',
                text: 'Seçilen kayıt silindi',
                customClass: {
                    confirmButton: 'btn btn-success'
                },
            });
        }
    });
}
// Confirm Color
function ConfirmColor() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2F8BE6',
        cancelButtonColor: '#F55252',
        confirmButtonText: 'Yes, delete it!',
        customClass: {
            confirmButton: 'btn btn-warning',
            cancelButton: 'btn btn-danger ml-1'
        },
        buttonsStyling: false,
    }).then(function (result) {
        if (result.value) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "success",
                title: 'Deleted!',
                text: 'Your imaginary file has been deleted.',
                customClass: {
                    confirmButton: 'btn btn-success'
                },
            });
        }
        else if (result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Cancelled',
                text: 'Your imaginary file is safe :)',
                icon: 'error',
                customClass: {
                    confirmButton: 'btn btn-success'
                },
            });
        }
    });
}


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_data_sweet-alerts_ts.js.map