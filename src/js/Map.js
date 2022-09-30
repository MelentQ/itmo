export class Map {
    constructor(element, props) {
        const defaultConfig = {
            icon: {
                url: null,
                size: [60, 60],
                offset: [-30, -60]
            },
            center: [55.76, 37.64],
            zoom: 7,
            controls: []
        };
        this.config = Object.assign(defaultConfig, props);

        if (!element) return;

        this.el = element;

        this.instance = this._init();
    }

    _init() {
        const instance = new ymaps.Map(this.el, {
            center: this.config.center,
            zoom: this.config.zoom,
            controls: this.config.controls
        });

        instance.behaviors.disable('scrollZoom');

        return instance;
    }

    addPlace(coords) {
        const placemarkProperties = {};

        const placemarkOptions = {
            iconLayout: 'default#image',
            iconImageHref: this.config.icon.url,
            iconImageSize: this.config.icon.size,
            iconImageOffset: this.config.icon.offset
        };

        const placemark = new ymaps.Placemark(coords, placemarkProperties, placemarkOptions);

        this.instance.geoObjects.add(placemark);

        return placemark;
    }
}
