const photosMap = {
  ferran: 'https://avatars3.githubusercontent.com/u/774577?v=3&s=460',
  pawlucci: 'https://avatars2.githubusercontent.com/u/19506882?v=3&s=400',
  jakub: 'https://avatars0.githubusercontent.com/u/1694993?v=3&s=400',
  luke: 'http://callstack.io/static/images/team-luke-small.png',
  mike: 'https://pbs.twimg.com/profile_images/795757249939591172/Os_rLYF6.jpg',
  mike2: 'http://callstack.io/static/images/team-mike2-small.jpg',
  radek: 'http://callstack.io/static/images/team-radek-small.jpg',
  dratwa: 'https://avatars3.githubusercontent.com/u/16336501?v=3&s=400'
};

const defaultPhoto = 'https://www.iconexperience.com/_img/g_collection_png/standard/128x128/hipster.png';

export default (name: string) => {
  return photosMap[name] || defaultPhoto;
};
