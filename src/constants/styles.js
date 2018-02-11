const sizes = {
    mobileSW: 570,
    mobileSH: 320,
    mobileMW: 670,
    mobileMH: 375,
    mobileLW: 760,
    mobileLH: 425
};

module.exports = {
    ...sizes,
    queryMobile: `(orientation: landscape) and (min-height: ${sizes.mobileLH}px),
    (orientation: portrait) and (min-width: ${sizes.mobileLH}px)`
};

