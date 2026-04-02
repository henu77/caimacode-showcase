import MarkdownIt from 'markdown-it';
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import MarkdownRenderer from '../components/project/MarkdownRenderer.vue';
import MediaGallery from '../components/project/MediaGallery.vue';
import VideoPanel from '../components/project/VideoPanel.vue';
import { projects, readmeContentByKey } from '../content/projects';
const markdown = new MarkdownIt({
    html: false,
    breaks: true,
    linkify: true,
});
const route = useRoute();
const project = computed(() => projects.find((item) => item.slug === String(route.params.slug)));
const renderedReadme = computed(() => {
    if (!project.value) {
        return '';
    }
    const rawReadme = readmeContentByKey[project.value.readmeKey] ?? '# README 暂未提供';
    return markdown.render(rawReadme);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
if (__VLS_ctx.project) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: "page detail-page" },
        ...{ style: ({ '--project-accent': __VLS_ctx.project.accent }) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-shell" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-topbar" },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: "back-link" },
        to: "/",
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: "back-link" },
        to: "/",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    var __VLS_3;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "detail-hero panel" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-copy" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "hero-kicker" },
    });
    (__VLS_ctx.project.subtitle);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.project.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "detail-description" },
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
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-cover-wrap" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        ...{ class: "detail-cover" },
        src: (__VLS_ctx.project.cover),
        alt: (__VLS_ctx.project.title),
    });
    /** @type {[typeof MediaGallery, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(MediaGallery, new MediaGallery({
        images: (__VLS_ctx.project.gallery),
        title: (__VLS_ctx.project.title),
    }));
    const __VLS_5 = __VLS_4({
        images: (__VLS_ctx.project.gallery),
        title: (__VLS_ctx.project.title),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    /** @type {[typeof VideoPanel, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(VideoPanel, new VideoPanel({
        videos: (__VLS_ctx.project.videos),
    }));
    const __VLS_8 = __VLS_7({
        videos: (__VLS_ctx.project.videos),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    /** @type {[typeof MarkdownRenderer, ]} */ ;
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(MarkdownRenderer, new MarkdownRenderer({
        html: (__VLS_ctx.renderedReadme),
    }));
    const __VLS_11 = __VLS_10({
        html: (__VLS_ctx.renderedReadme),
    }, ...__VLS_functionalComponentArgsRest(__VLS_10));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({
        ...{ class: "page missing-page" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: "panel missing-panel" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "section-label" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    const __VLS_13 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ class: "back-link" },
        to: "/",
    }));
    const __VLS_15 = __VLS_14({
        ...{ class: "back-link" },
        to: "/",
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    __VLS_16.slots.default;
    var __VLS_16;
}
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-page']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-shell']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-topbar']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-hero']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-copy']} */ ;
/** @type {__VLS_StyleScopedClasses['hero-kicker']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-description']} */ ;
/** @type {__VLS_StyleScopedClasses['tag-list']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-cover-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['missing-page']} */ ;
/** @type {__VLS_StyleScopedClasses['panel']} */ ;
/** @type {__VLS_StyleScopedClasses['missing-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['section-label']} */ ;
/** @type {__VLS_StyleScopedClasses['back-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            MarkdownRenderer: MarkdownRenderer,
            MediaGallery: MediaGallery,
            VideoPanel: VideoPanel,
            project: project,
            renderedReadme: renderedReadme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
