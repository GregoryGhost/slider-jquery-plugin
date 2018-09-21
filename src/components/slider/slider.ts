import 'jquery-ui-touch-punch';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/slider.css';
import 'plugins/jquery-ui-slider-pips/jquery-ui-slider-pips.js';
import 'plugins/jquery-ui-slider-pips/jquery-ui-slider-pips.css';
import {ComponentsCenter} from '../../ComponentsCenter.ts';
   
class Slider: IComponent
{
    public readonly id: string;
    
    constructor(slider: HTMLDivElement)
    {
        let $slider = $(slider);
        this.id = $slider.id;
        
        const s = $slider.slider({
            min: $slider.data('min'),
            max: $slider.data('max'),
            value: $slider.data('value'),
            step: $slider.data('step'),
        });
        
        if ($slider.is('[data-fill]'))
        {
            s.slider({
                range: 'min',
            });
        }
        
        if ($slider.is('[data-float]'))
        {
            s.slider('float');
        }
        
        if ($slider.is('[data-pips]'))
        {
            s.slider("pips", {
                rest: "label"
            });
        }
    }
}

export default function render()
{
    const $components = $('.slider-js');

    if ($components.length > 0)
    {
        $components.map((index, node) =>
        {
            let slider = new Slider(node);
            ComponentsCenter.instance.addComponent(slider);
            return slider;
        });
    }
}
