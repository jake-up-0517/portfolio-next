'use client';

export default function SpotifyEmbed() {
  window.onSpotifyIframeApiReady = (obj) => {
    const player = document.getElementById('embed');
    const options = {
      uri: 'spotify:track:5YJtMNWKe55yr49cyJgxva',
    };
    const callback = (obj) => {};
    obj.createController(player, options, callback);
  };
  return <div id="embed"></div>;
}
