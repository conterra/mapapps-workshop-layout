import Binding from "apprt-binding/Binding";
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import BasemapChangerWidget from "./BasemapChangerWidget.vue";

export default class BasemapChangerWidgetFactory {

    createInstance() {

        const vm = new Vue(BasemapChangerWidget);
        return VueDijit(vm);

    }

}
