import $ from 'jquery';
import { SliderService } from './SliderService.ts';

// Определение функции плагина в точке расширения JQuery
// Note: Функция и обязательные глобальные параметры
//      по умолчанию объединяются
$.fn.sliderPlugin = Object.assign<SliderPluginFunction>(
    function (this: JQuery, options?: SliderPluginOptions): JQuery
    {
        //init SliderService
        return this;
    }
);
