import {ComponentsCenter} from '../../ComponentsCenter.ts';
   
class ConfigPanel: IComponent
{
    constructor(public readonly id: string)){ };
}

export default function render()
{
    const $components = $('.config-panel-js');

    if ($components.length > 0)
    {
        $components.map((index, node) =>
        {
            let panel = new ConfigPanel(node.id);
            ComponentsCenter.instance.addComponent(panel);
            return panel;
        });
    }
}
