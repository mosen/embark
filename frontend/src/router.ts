import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/consumer-groups',
            name: 'consumer-groups',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "consumer_groups" */ './views/ConsumerGroups.vue'),
        },
        {
            path: '/consumer-group/:name',
            name: 'consumer-group',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "consumer_group" */ './views/ConsumerGroup.vue'),
        },
        {
            path: '/topics',
            name: 'topics',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "topics" */ './views/Topics.vue'),
        },
        {
            path: '/topic/:name/:tab?',
            name: 'topic',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "topic" */ './views/Topic.vue'),
        },
        {
            path: '/connectors',
            name: 'connectors',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "connectors" */ './views/Connectors.vue'),
        },
        {
            path: '/connectors/:name/:tab?',
            name: 'connector',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "connector" */ './views/Connector.vue'),
        },
        {
            path: '/new/connector/browse',
            name: 'new-connector-gallery',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "new-connector-gallery" */ './views/NewConnectorGallery.vue'),
        },
        {
            path: '/new/connector/class/:classname',
            name: 'new-connector',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "new-connector" */ './views/NewConnector.vue'),
        },
        {
            path: '/connector-plugins',
            name: 'connector-plugins',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "connector_plugins" */ './views/ConnectorPlugins.vue'),
        },
        {
            path: '/subjects',
            name: 'subjects',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "subjects" */ './views/Subjects.vue'),
        },
        {
            path: '/subject/:name/versions/:version',
            name: 'subject',
            component: (): Promise<typeof import('*.vue')> =>
                import(/* webpackChunkName: "subject" */ './views/Subject.vue'),
        },
        // {
        //     path: '/ksql',
        //     name: 'ksql',
        //     component: (): Promise<typeof import('*.vue')> =>
        //         import(/* webpackChunkName: "ksql" */ './views/KSQL.vue'),
        // }
    ],
});
