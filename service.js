import _ from 'lodash';
// Fake word generator
// import faker from 'faker';

// Let's generate some tags
let banners = [{
        type: 'north',
        content: '暴学三年，天下去得，<br/>在学三年，寸步难行。'
    },
    {
        type: 'west',
        content: '处暑十八盆，<br/>白露身不露。'
    },
    {
        type: 'south',
        content: '船到桥<br/>直瞄瞄'
    },
    {
        type: 'east',
        content: '吃啥饭，当啥心<br/>敲啥木鱼念啥经'
    }
];

function fakeDelay(cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cb())
        }, 2000)
    })
}

export default {
    getBannerData(type) {
        return fakeDelay(() => _.filter(banners, banner => banner.type === type))
    }
};