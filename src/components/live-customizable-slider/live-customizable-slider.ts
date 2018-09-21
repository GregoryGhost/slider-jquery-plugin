import {ComponentsCenter} from '../../ComponentsCenter.ts';
   
class LiveCustomSlider: IComponent
{
    public readonly id: string;
    private readonly _idSlider: string;
    private readonly _idConfigPanel: string;
    
    constructor(liveCustomSlider: HTMLDivElement)
    {
        let $lcs = $(liveCustomSlider);
        this.id = $lcs.id;
        this._idSlider = $lcs.data('id-slider');
        this._idConfigPanel = $lcs.data('id-config-panel');
    }
}

export default function render()
{
    const $components = $('.live-customizable-slider');

    if ($components.length > 0)
    {
        $components.map((index, node) =>
        {
            let lcs = new LiveCustomSlider(node);
            ComponentsCenter.instance.addComponent(lcs);
            return lcs;
        });
    }
}
