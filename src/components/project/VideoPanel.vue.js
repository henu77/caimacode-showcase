const __VLS_props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
    ...{ class: "video-panel" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "section-heading" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "video-grid" },
});
for (const [video] of __VLS_getVForSourceType((__VLS_ctx.videos))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({
        key: (video.title),
        ...{ class: "video-card" },
    });
    if (video.type === 'bilibili' && video.embedUrl) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
            ...{ class: "video-embed" },
            src: (video.embedUrl),
            title: (video.title),
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowfullscreen: true,
            referrerpolicy: "strict-origin-when-cross-origin",
        });
    }
    else if (video.available !== false && video.src) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.video, __VLS_intrinsicElements.video)({
            ...{ class: "video-player" },
            controls: true,
            playsinline: true,
            poster: (video.poster),
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.source)({
            src: (video.src),
            type: "video/mp4",
        });
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "video-placeholder" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (video.title);
}
/** @type {__VLS_StyleScopedClasses['video-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['section-heading']} */ ;
/** @type {__VLS_StyleScopedClasses['video-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['video-card']} */ ;
/** @type {__VLS_StyleScopedClasses['video-embed']} */ ;
/** @type {__VLS_StyleScopedClasses['video-player']} */ ;
/** @type {__VLS_StyleScopedClasses['video-placeholder']} */ ;
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
