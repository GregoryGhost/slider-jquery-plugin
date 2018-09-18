class ComponentsCenter
{
    private static _instance: Test;
    private _components: { [index: string]: IComponent } = {};

    private constructor() { }

    static get instance(): Test
    {
        return this._instance
            || (this._instance = new this());
    }

    findComponent(nameComponent: string): IComponent
    {
        return this._components[nameComponent];
    }

    addComponent(component: IComponent)
    {
        this._components[component.id] = component; 
    }
}

export {ComponentsCenter};
