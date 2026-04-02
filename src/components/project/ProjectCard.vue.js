import { RouterLink } from 'vue-router';
const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({
    ...{ class: "project-card" },
    ...{ style: ({ '--project-accent': __VLS_ctx.project.accent }) },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "card-link" },
    to: (`/project/${__VLS_ctx.project.slug}`),
}));
const __VLS_2 = __VLS_1({
    ...{ class: "card-link" },
    to: (`/project/${__VLS_ctx.project.slug}`),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "cover-wrap" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "cover-image" },
    src: (__VLS_ctx.project.cover),
    alt: (__VLS_ctx.project.title),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card-body" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "subtitle" },
});
(__VLS_ctx.project.subtitle);
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.project.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "description" },
});
(__VLS_ctx.project.description);
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "tag-list" },
});
for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.project.tags))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (tag),
    });
    (tag);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "card-action" },
});
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['project-card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-link']} */ ;
/** @type {__VLS_StyleScopedClasses['cover-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['cover-image']} */ ;
/** @type {__VLS_StyleScopedClasses['card-body']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['description']} */ ;
/** @type {__VLS_StyleScopedClasses['tag-list']} */ ;
/** @type {__VLS_StyleScopedClasses['card-action']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
        };
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
