import Vue from 'vue'

const components = {
  HeaderOg: () => import('../../components/Header.og.vue' /* webpackChunkName: "components/header-og" */).then(c => c.default || c),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Project: () => import('../../components/Project.vue' /* webpackChunkName: "components/project" */).then(c => c.default || c),
  ProjectFeatureAlternate: () => import('../../components/ProjectFeatureAlternate.vue' /* webpackChunkName: "components/project-feature-alternate" */).then(c => c.default || c),
  SectionHeader: () => import('../../components/SectionHeader.vue' /* webpackChunkName: "components/section-header" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
