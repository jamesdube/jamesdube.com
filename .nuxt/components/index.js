export { default as HeaderOg } from '../../components/Header.og.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Project } from '../../components/Project.vue'
export { default as ProjectFeatureAlternate } from '../../components/ProjectFeatureAlternate.vue'
export { default as SectionHeader } from '../../components/SectionHeader.vue'

export const LazyHeaderOg = import('../../components/Header.og.vue' /* webpackChunkName: "components/header-og" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyProject = import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => c.default || c)
export const LazyProjectFeatureAlternate = import('../../components/ProjectFeatureAlternate.vue' /* webpackChunkName: "components/project-feature-alternate" */).then(c => c.default || c)
export const LazySectionHeader = import('../../components/SectionHeader.vue' /* webpackChunkName: "components/section-header" */).then(c => c.default || c)
