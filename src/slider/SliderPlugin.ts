import $ from 'jquery';
import { SliderService } from './SliderService.ts';

// Определение функции плагина в точке расширения JQuery
// Note: Функция и обязательные глобальные параметры
//      по умолчанию объединяются
$.fn.examplePlugin = Object.assign<ExamplePluginFunction, ExamplePluginGlobalOptions>(
    function (this: JQuery, options: ExamplePluginOptions): JQuery
    {
        options = $.extend({}, $.fn.examplePlugin.options, options);

        if (!options.outputSelector) {
            console.error('Example plugin options are \
                missing required parameter "outputSelector": ',
                    JSON.stringify(options));
            return this;
        }

        // Do what the plugin should do. Here we create an instance of the separate service which is then used when the
        // user clicks the element that the plugin is attached to. It produces a greeting message and appends it to the output.
        let exampleService = new ExampleService();
        this.click(function (event: JQuery.Event<HTMLElement>) {
            let messageText = exampleService.getExampleMessage(event.currentTarget.textContent);
            let messageElement = $('<p>' + messageText + '</p>');
            if (options.outputColor) {
                messageElement.css('color', options.outputColor);
            }
            $(options.outputSelector).append(messageElement);
        });

        return this;
    },
    // Определение глобальных настроек по умолчанию
    {
        options: {
            outputSelector: null
        }
    }
);
