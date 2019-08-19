import eventsMock from 'mocks/events.json';
const mockData = JSON.stringify(eventsMock, null);

export function setWallContent(config) {
    return config
    ? localStorage.setItem('wall-content', config)
    : localStorage.setItem('wall-content', mockData)
};

export function getWallContent() {
    return localStorage.getItem('wall-content')
};

export function updateWallContent() {
    return getWallContent() ? getWallContent() : setWallContent();
};

export function postCommet(type, value) {
    const localWallContent = getWallContent();
    let wallContent = JSON.parse(localWallContent);
    let newPost = {
        id: new Date().getTime(),
        avatar: 'https://raw.githubusercontent.com/kopenhamn/study/master/projects/DevelopexTest/wallTask/src/components/Comment/images/defaultImage.png',
        firstName: 'Michael',
        lastName: 'Feninets',
        date: new Date().toDateString(),
        message: value,
        comments: []
    };

    wallContent[type].unshift(newPost);
    return wallContent;
}