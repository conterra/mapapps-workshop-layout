/*
 * Copyright (C) con terra GmbH
 */
import mobile_portrait from "dojo/text!./seasons_mobile_portrait.html";
import mobile_landscape from "dojo/text!./seasons_mobile_landscape.html";
import seasons from "dojo/text!./seasons.html";
import "dijit/layout/BorderContainer";
import "dijit/layout/ContentPane";
import "ct/ui/template/OverlayContainer";
import "windowmanager/WindowDockingBar";

export default {
    widgets: [{
        widgetRole: "full-screen-window",
        window: {
            marginBox: {
                l: 0,
                t: 0,
                r: 0,
                b: 0
            },
            fixEdgesInViewPort: {
                t: true,
                b: true,
                l: true,
                r: true
            },
            autofocus: false,
            resizable: false,
            minimizeOnClose: true,
            dndDraggable: false,
            draggable: false,
            maximizable: false
        }
    }
    ],
    layouts: [
        {
            requiredExecutionEnvironment: ['iPad'],
            orientation: 'landscape',
            templateString: seasons,
            name: 'tablet_landscape'
        },
        {
            requiredExecutionEnvironment: ['iPad'],
            orientation: 'portrait',
            templateString: seasons,
            name: 'tablet_portrait'
        },
        {
            requiredExecutionEnvironment: ['mobile'],
            orientation: 'portrait',
            templateString: mobile_portrait,
            name: 'mobile_portrait'
        },
        {
            requiredExecutionEnvironment: ['mobile'],
            orientation: 'landscape',
            templateString: mobile_landscape,
            name: 'mobile_landscape'
        },
        {
            requiredExecutionEnvironment: ['android'],
            orientation: 'landscape',
            templateString: seasons,
            name: 'tablet_landscape'
        },
        {
            requiredExecutionEnvironment: ['android'],
            orientation: 'portrait',
            templateString: seasons,
            name: 'tablet_portrait'
        },
        {
            maxWidth: 768,
            orientation: 'portrait',
            templateString: mobile_portrait,
            name: 'mobile_portrait'
        },
        {
            maxWidth: 768,
            orientation: 'landscape',
            templateString: mobile_landscape,
            name: 'mobile_landscape'
        },
        {
            maxWidth: 992,
            orientation: 'portrait',
            templateString: seasons,
            name: 'tablet_portrait'
        },
        {
            maxWidth: 992,
            orientation: 'landscape',
            templateString: seasons,
            name: 'tablet_landscape'
        },
        {
            templateString: seasons,
            name: "desktop"
        }
    ]
};
