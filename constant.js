const constants = {
  apiUrl: 'https://api.video.wiki',
  url: 'https://video.wiki'
};
if (process.env.NODE_ENV === 'production') {
  constants.apiUrl = 'https://api.video.wiki';
  constants.url = 'https://video.wiki';
}
export default constants;
