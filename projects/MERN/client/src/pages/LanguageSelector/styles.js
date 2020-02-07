export const styles = () => ({
  selectorIcon: {
    fill: '#C3C6C8',
    display: 'block',
    transition: 'all .1s, transform .5s',
    cursor: 'pointer',
    '&:hover': {
      fill: '#888D92',
    },
  },
  gridContainer: {
    width: 'auto',
    marginRight: '15px',
    alignItems: 'center',
    cursor: 'pointer',
  },
  selectedLanguageLabel: {
    color: '#888d92',
  },
  growElement: {
    transformOrigin: 'center bottom',
  },
  rotated: {
    transform: 'rotate(270deg)',
  },
});
