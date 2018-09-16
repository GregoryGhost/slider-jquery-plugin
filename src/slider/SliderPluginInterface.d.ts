type Orientation =
    | 'vertical'
    | 'horizontal';

interface BasicOptions {
    min?: number;
    max?: number;
    value?: number;
    step?: number;
    orientation?: Orientation;
}

type Position =
    | 'handle'
    | 'handle_over'
    | 'handle_under';

interface FloatOptions {
    position?: Position;
}

type HideLabels = false

type LabelsOfPips =
    | string[]
    | Endpoints
    | HideLabels;

interface PipsOptions {
    labels?: LabelsOfPips
}

/**
 * Options for the example plugin.
 */
type SliderPluginOptions =
    | BasicOptions
    | PipsOptions
    | FloatOptions;

/**
 * Function to apply the example plugin to the selected elements of a jQuery result.
 */
interface SliderPluginFunction {
    /**
    * Apply the example plugin to the elements selected in the jQuery result.
    *
    * @param options Options to use for this application of the example plugin.
    * @returns jQuery result.
    */
    (options?: SliderPluginOptions): JQuery;
}

/**
 * Declaration of the example plugin.
 */
interface SliderPlugin extends SliderPluginFunction { }

/**
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
    /**
    * Extension of the example plugin.
    */
    sliderPlugin: SliderPlugin;
}
