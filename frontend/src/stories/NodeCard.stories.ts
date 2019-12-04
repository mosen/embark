import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NodeCard from "../components/NodeCard.vue";

storiesOf('components/NodeCard', module)
    .add('default', () => ({
        components: { NodeCard },
        template: '<NodeCard host="192.168.1.1"></NodeCard>'
    }));
