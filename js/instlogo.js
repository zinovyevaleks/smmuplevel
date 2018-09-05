anime({
  targets: '#bigCircle',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: [1,-0.39,.3,1],
  duration:1500,
  delay: 1200,
  direction:'forwards',
});
anime({
  targets: '#square',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 1500,
  direction: 'forwards',
  easing: [.65,.03,.3,1]
});