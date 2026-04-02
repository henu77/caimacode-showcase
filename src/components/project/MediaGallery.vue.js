const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "media-gallery" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-heading" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "gallery-grid" },
});
for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.figure, __VLS_intrinsicElements.figure)({
        key: (image),
        ...{ class: "gallery-item" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (image),
        alt: (`${__VLS_ctx.title} 图片 ${index + 1}`),
    });
}
/** @type {__VLS_StyleScopedClasses['media-gallery']} */ ;
/** @type {__VLS_StyleScopedClasses['section-heading']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
