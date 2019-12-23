function createLink() {
    var link = new joint.dia.Link({
        attrs: {
            '.marker-target': {d: 'M 10 0 L 0 5 L 10 10 z', fill: '#ccc', stroke: '#ccc'},
            '.connection': {stroke: "#ccc", strokeWidth: 3},
            '.marker-source': {fill: 'black', stroke: 'black', d: 'M 0 0 L 0 0'},
        },
        labels: [{
            position: 0.5,
            attrs: {
                text: {
                    'font-size': 11,
                    fontWeight: 'bold',
                }
            }
        }]
    });
    return link;
}

var portsList = {
    'in': {
        position: {
            name: 'left',
            z: 2
        },
        attrs: {
            rect: {
                width: '10',
                height: '10',
                stroke: 'black',
                fill: 'blue',
                magnet: 'passive'
            }
        },
        label: {
            position: {
                name: 'left',
                args: {
                    y: 10
                }
            }
        }
    },
    'out': {
        z: 1,
        position: {
            name: 'right',
        },
        attrs: {
            '.port-label': {
                dx: 20
            },
            '.port-body': {
                d: "M2.204364238465236e-15,-36A36,36 0 1,1 2.204364238465236e-15,36L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: 10
                }
            }
        }
    },
    'On Success': {
        z: 1,
        position: {
            name: 'right'
        },
        attrs: {
            '.port-label': {
                'text': 'On Success',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235
            },
            '.port-body': {
                d: "M2.204364238465236e-15,-36A36,36 0 0,1 36,0L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true
            },
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: -20
                }
            }
        },
    },
    'On Failure': {
        z: 1,
        position: {
            name: 'right',
        },
        attrs: {
            '.port-label': {
                'text': 'On Failure',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235,
            },
            '.port-body': {
                d: "M36,0A36,36 0 0,1 2.204364238465236e-15,36L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: 20
                }
            }
        }
    },
    'On Send': {
        z: 1,
        position: {
            name: 'right'
        },
        attrs: {
            '.port-label': {
                'text': 'On Send',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235,
            },
            '.port-body': {
                d: "M2.204364238465236e-15,-36A36,36 0 0,1 21.160269082529034,-29.12461179749811L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true,
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: -30
                }
            }
        },

    },
    'On Open': {
        z: 1,
        position: {
            name: 'right',
        },
        attrs: {
            '.port-label': {
                'text': 'On Open',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235,
            },
            '.port-body': {
                d: "M21.160269082529034,-29.12461179749811A36,36 0 0,1 34.238034586625524,-11.124611797498106L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true,
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: -15
                }
            }
        }
    },
    'On Click': {
        z: 1,
        position: {
            name: 'right'
        },
        attrs: {
            '.port-label': {
                'text': 'On Click',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235,
            },
            '.port-body': {
                d: "M34.238034586625524,-11.124611797498106A36,36 0 0,1 34.238034586625524,11.124611797498106L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: 0
                }
            }
        }
    },
    'On Unsubscribe': {
        z: 1,
        position: {
            name: 'right'
        },
        attrs: {
            '.port-label': {
                'text': 'On Unsubscribe',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235,
            },
            '.port-body': {
                d: "M34.238034586625524,11.124611797498106A36,36 0 0,1 21.160269082529034,29.12461179749811L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: 15
                }
            }
        }
    },
    'On Bounce': {
        z: 1,
        position: {
            name: 'right',

        },
        attrs: {
            '.port-label': {
                'text': 'OnBounce',
                'font-size': 9,
                'font-weight': 'bold',
                'fill': '#ccc',
                dx: 235,
            },
            '.port-body': {
                d: "M21.160269082529034,29.12461179749811A36,36 0 0,1 2.204364238465236e-15,36L0,0Z",
                transform: "translate(210,-2) scale(.85,.85)",
                stroke: 'white',
                fill: '#ccc',
                strokeWidth: 1,
                magnet: true
            }
        },
        label: {
            position: {
                name: 'right',
                args: {
                    y: 30
                }
            }
        }
    }
};

var config = {
    paperWidth: 1200,
    paperHeight: 1200
};

// Canvas where shape are dropped
var graph = new joint.dia.Graph,
    gridSize = 20,
    paper = new joint.dia.Paper({
        el: document.getElementById('paper'),
        width: config.paperWidth,
        height: config.paperHeight,
        gridSize: gridSize,
        drawGrid: true,
        model: graph,
        async: true,
        // restrictTranslate: false,
        validateMagnet: function (cellView, magnet) {
            return magnet.getAttribute('magnet') !== 'passive';
        },
        validateConnection: function (cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
            // Prevent linking from output ports to input ports within one element.
            if (cellViewS === cellViewT) return false;
            // Prevent linking to input ports.
            return magnetT;
        },

        defaultLink: function (cellView, magnet, link) {
            var link = createLink();
            link.prop(['labels', 0, 'attrs', 'text', 'text'], magnet.getAttribute('port-group'));
            return link;
        },
        markAvailable: true,
        snapLinks: {radius: 75},
    });


var filterId = paper.defineFilter({
    name: 'dropShadow',
    args: {
        dx: 0,
        dy: 3,
        color: '#ccc',
        blur: 1
    }
});

// Canvas from which you take Flow shapes
var flowControlGraph = new joint.dia.Graph,
    flowControlPaper = new joint.dia.Paper({
        el: document.getElementById('flowControl'),
        width: '235',
        height: '200',
        model: flowControlGraph,
        interactive: false
    });

joint.shapes.devs.TimerModel = joint.shapes.basic.Circle.extend({
    markup: '<g class="paper"><rect class="body-paper"/><text class="body-text"/><text class="del-icon"/><rect class="ports-hover-area"/></g><g class="container-ports"><circle class="ports-on-hover"/><text class="ports-icon"/></g><g class="stencil"><g class="scalable"><circle class="body"/></g><image class="stencil-icon"/><text class="label"/></g>',
    portMarkup: '<path class="port-body"/>',
    portLabelMarkup: '<text class="port-label"/>',
    defaults: _.defaultsDeep({
        size: {width: 40, height: 40},
        type: 'devs.TimerModel',
        ports: {
            groups: portsList
        },
        attrs: {
            '.': {magnet: false},
            '.paper': {
                magnet: "passive"
            },
            /*'.body-paper': {
                magnet: 'active'
            },*/
            '.ports-hover-area': {
                width: 100,
                height: 75,
                transform: "translate(230, -20)",
                fill: 'transparent',
                display: 'none'
            },
            '.body': {cx: 40, cy: 40, r: 40, stroke: 'none', fill: '#FF343B'},
            '.label': {
                fill: 'white',
                'font-size': 11,
                lineHeight: '16',
                'ref-y': '45px',
            },
            '.body-text': {
                display: 'none',
                cursor: 'pointer',
            },
            '.stencil-icon': {
                'width': 25,
                'height': 25,
                'ref-y': '7',
                'ref-x': '7',
            },
            '.ports-on-hover': {fill: '#FF343B'}

        },
    }, joint.shapes.devs.Model.prototype.defaults),

});
var Time = new joint.shapes.devs.TimerModel({
    position: {
        x: 15,
        y: 20
    },

    attrs: {
        '.label': {
            'text': 'Wait for \n some time',
        },
        '.body-text': {
            'text': 'Wait for some time',
        },
        '.stencil-icon': {
            'xlink:href': "images/time.png",
        },
    },
    ports: {
        items: [
            {group: 'in'},
            /*{group: 'On Success'},
            {group: 'On Failure'},*/
            {group: 'On Send'},
            {group: 'On Open'},
            {group: 'On Click'},
            {group: 'On Unsubscribe'},
            {group: 'On Bounce'}
        ]

    },
    cellsDetail: {
        type: 'Time',
    }
});

var TimeSlots = new joint.shapes.devs.TimerModel({
    position: {
        x: 95,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'Wait till \n some time slots',
        },
        '.body-text': {
            'text': 'Wait till some time slots',
        },
        '.stencil-icon': {
            'xlink:href': "images/timeSlot.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'On Success'},
            {group: 'On Failure'}
        ]
    },
    cellsDetail: {
        type: 'TimeSlots',
    }
});

var WaitEvent = new joint.shapes.devs.TimerModel({
    position: {
        x: 175,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'Wait for \n an Event',
        },
        '.body-text': {
            'text': 'Wait for an Event',
        },
        '.stencil-icon': {
            'xlink:href': "images/star.png",
        }
    },
    ports: {
        items: [

            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'WaitEvent',
    }
});

var WaitDate = new joint.shapes.devs.TimerModel({
    position: {
        x: 15,
        y: 115
    },
    attrs: {
        '.label': {
            'text': 'Wait for \n a Date',
        },
        '.body-text': {
            'text': 'Wait for a Date',
        },
        '.stencil-icon': {
            'xlink:href': "images/date.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'WaitDate',
    }
});

var EndJourney = new joint.shapes.devs.TimerModel({
    position: {
        x: 90,
        y: 115
    },
    attrs: {
        '.label': {
            'text': 'End Journey',
        },
        '.body-text': {
            'text': 'End Journey',
        },
        '.stencil-icon': {
            'xlink:href': "images/off.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]
    },
    cellsDetail: {
        type: 'EndJourney',
    }
});

flowControlGraph.addCells([Time, TimeSlots, WaitEvent, WaitDate, EndJourney]);


// Canvas from which you take Condition shapes

var conditionControlGraph = new joint.dia.Graph,
    conditionControlPaper = new joint.dia.Paper({
        el: document.getElementById('conditionControl'),
        width: '235',
        height: '200',
        model: conditionControlGraph,
        interactive: false
    });

joint.shapes.devs.PathModel = joint.shapes.basic.Path.extend({
    markup: '<g class="paper"><rect class="body-paper"/><text class="body-text"/><text class="del-icon"/><rect class="ports-hover-area"/></g><g class="container-ports"><circle class="ports-on-hover"/><text class="ports-icon"/></g><g class="stencil"><g class="scalable"><path class="body"/></g><image class="stencil-icon"/><text class="label"/></g>',
    portMarkup: '<path class="port-body"/>',
    portLabelMarkup: '<text class="port-label"/>',
    defaults: _.defaultsDeep({
        size: {width: 40, height: 40},
        type: 'devs.PathModel',
        ports: {
            groups: portsList
        },
        attrs: {
            '.': {magnet: false},
            '.paper': {
                magnet: "passive"
            },
            /*'.body-paper': {
                magnet: 'active'
            },*/
            '.ports-hover-area': {
                width: 100,
                height: 75,
                transform: "translate(230, -20)",
                fill: 'transparent',
                display: 'none'
            },
            '.body': {
                d: 'M 40 0 L 80 0 L 120 40 L 120 80 L 80 120 L 40 120 L 0 80 L 0 40',
                stroke: 'none',
                fill: '#FF9800'
            },
            '.label': {
                fill: 'white',
                'font-size': 11,
                lineHeight: '16',
                'ref-y': '45px'
            },
            '.body-text': {
                display: 'none',
            },
            '.stencil-icon': {
                'width': 25,
                'height': 25,
                'ref-y': '7',
                'ref-x': '7',
            },
            '.ports-on-hover': {fill: '#FF9800'}
        }
    }, joint.shapes.devs.Model.prototype.defaults)
});
var Segment = new joint.shapes.devs.PathModel({
    position: {
        x: 15,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'In segment',
        },
        '.body-text': {
            'text': 'When user enters / exits / is in a segment'
        },

        '.stencil-icon': {
            'xlink:href': "images/segment.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]
    },
    cellsDetail: {
        type: 'Segment',
    }
});

var DoneEvent = new joint.shapes.devs.PathModel({
    position: {
        x: 90,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'has Done' + "\n" + 'Event',
        },
        '.body-text': {
            'text': 'Check if User has done Event'
        },
        '.stencil-icon': {
            'xlink:href': "images/star.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'},
        ]
    },
    cellsDetail: {
        type: 'DoneEvent',
    }
});

var CheckUserAttribute = new joint.shapes.devs.PathModel({
    position: {
        x: 175,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'Check User \n Attribute',
        },
        '.body-text': {
            'text': 'Check User Attribute'
        },
        '.stencil-icon': {
            'xlink:href': "images/user.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'},
        ]
    },
    cellsDetail: {
        type: 'CheckUserAttribute',
    }
});

var CheckUserReachability = new joint.shapes.devs.PathModel({
    position: {
        x: 15,
        y: 115
    },
    attrs: {
        '.label': {
            'text': 'Check User \n Reachability',
        },
        '.body-text': {
            'text': 'Check User Reachability'
        },
        '.stencil-icon': {
            'xlink:href': "images/check.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]
    },
    cellsDetail: {
        type: 'CheckUserReachability',
    }
});

conditionControlGraph.addCells([Segment, DoneEvent, CheckUserAttribute, CheckUserReachability]);


// Canvas from which you take Condition shapes

var actionControlGraph = new joint.dia.Graph,
    actionControlPaper = new joint.dia.Paper({
        el: document.getElementById('actionControl'),
        width: '235',
        height: '200',
        model: actionControlGraph,
        interactive: false
    });

joint.shapes.devs.ActionModel = joint.shapes.basic.Path.extend({
    markup: '<g class="paper"><rect class="body-paper"/><text class="body-text"/><text class="del-icon"/><rect class="ports-hover-area"/></g><g class="container-ports"><circle class="ports-on-hover"/><text class="ports-icon"/></g><g class="stencil"><g class="scalable"><rect class="body"/></g><image class="stencil-icon"/><text class="label"/></g>',
    portMarkup: '<path class="port-body"/>',
    portLabelMarkup: '<text class="port-label"/>',
    defaults: _.defaultsDeep({
        size: {width: 40, height: 40},
        type: 'devs.ActionModel',
        ports: {
            groups: portsList
        },
        attrs: {
            '.': {magnet: false},
            '.paper': {
                magnet: "passive"
            },
            '.ports-hover-area': {
                width: 100,
                height: 75,
                transform: "translate(230, -20)",
                fill: 'transparent',
                display: 'none'
            },
            '.body': {rx: 5, ry: 5, stroke: 'none', fill: '#2EB554'},
            '.label': {
                fill: 'white',
                'font-size': 11,
                lineHeight: '16',
                'ref-y': '45px'
            },
            '.body-text': {
                display: 'none',
            },
            '.stencil-icon': {
                'width': 25,
                'height': 25,
                'ref-y': '7',
                'ref-x': '7',
            },
            '.ports-on-hover': {fill: '#2EB554'}
        },
    }, joint.shapes.devs.Model.prototype.defaults)
});

var AppMessage = new joint.shapes.devs.ActionModel({
    position: {
        x: 15,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'Show In-App' + "\n" + 'Message'
        },
        '.body-text': {
            'text': 'Show In-App Message'
        },
        '.stencil-icon': {
            'xlink:href': "images/check.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'AppMessage',
    }
});

var WebMessage = new joint.shapes.devs.ActionModel({
    position: {
        x: 95,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'Show Web' + "\n" + 'Message',
        },
        '.body-text': {
            'text': 'Show Web Message'
        },
        '.stencil-icon': {
            'xlink:href': "images/web.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'WebMessage',
    }
});

var WebPush = new joint.shapes.devs.ActionModel({
    position: {
        x: 175,
        y: 20
    },
    attrs: {
        '.label': {
            'text': 'Sen Web \n Push',

        },
        '.body-text': {
            'text': 'Show Web Push'
        },
        '.stencil-icon': {
            'xlink:href': "images/web-push.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'WebPush',
    }
});

var CallApi = new joint.shapes.devs.ActionModel({
    position: {
        x: 15,
        y: 120
    },
    attrs: {
        '.label': {
            'text': 'Call an API',
        },
        '.body-text': {
            'text': 'Call an API'
        },
        '.stencil-icon': {
            'xlink:href': "images/call.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'CallApi',
    }
});

var SetUser = new joint.shapes.devs.ActionModel({
    position: {
        x: 90,
        y: 120
    },
    attrs: {
        '.label': {
            'text': 'has Done \n Event',
        },
        '.body-text': {
            'text': 'Has Done Event'
        },
        '.stencil-icon': {
            'xlink:href': "images/user.png",
        }
    },
    ports: {
        items: [
            {group: 'in'},
            {group: 'out'}
        ]

    },
    cellsDetail: {
        type: 'SetUser',
    }
});
actionControlGraph.addCells([AppMessage, WebMessage, WebPush, CallApi, SetUser]);

/* =======================================
 * DRAG AND DROP CONTROLS
 * =======================================
 */

conditionControlPaper.on('cell:pointerdown', function (cellView, e, x, y) {
    var divFlyFlow = document.createElement("div");
    divFlyFlow.setAttribute('id', 'flyFlowPaper');
    divFlyFlow.setAttribute('style', "position:fixed;z-index:100;opacity:0;pointer-event:none;");
    document.body.appendChild(divFlyFlow);
    var flyFlowGraph = new joint.dia.Graph,
        flyFlowPaper = new joint.dia.Paper({
            el: $('#flyFlowPaper'),
            model: flyFlowGraph,
            interactive: false
        }),
        flyShape = cellView.model.clone(),
        pos = cellView.model.position(),
        offset = {
            x: x - pos.x,
            y: y - pos.y
        };

    // flyShape.position(0, 0);
    flyFlowGraph.addCell(flyShape);
    $("#flyFlowPaper").offset({
        left: e.pageX - offset.x,
        top: e.pageY - offset.y
    });
    $('body').on('mousemove.fly', function (e) {
        $("#flyFlowPaper").offset({
            left: e.pageX - offset.x,
            top: e.pageY - offset.y
        });
    });
    $('body').on('mouseup.fly', function (e) {
        var x = e.pageX,
            y = e.pageY,
            target = paper.$el.offset();

        // Dropped over paper ?
        if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
            var s = flyShape.clone();
            s.position(x - target.left - offset.x, y - target.top - offset.y);
            var sizeBodyPaper = {width: 140, height: 70, fill: 'black'};
            var textBodyPaper = joint.util.breakText(s.attr('.body-text').text, sizeBodyPaper);
            s.attr({
                '.body-paper': {
                    width: "230",
                    height: "72",
                    transform: "translate(20, -20)",
                    filter: "url(#" + filterId + ")",
                    rx: "8",
                    ry: "8",
                    fill: '#FFDBA2',

                },
                '.body-text': {
                    fill: 'black',
                    'font-size': 13,
                    'font-weight': 'bold',
                    'ref-x': 45,
                    lineHeight: '16',
                    display: 'block',
                    'text': textBodyPaper
                },
                '.label': {
                    display: 'none',
                }

            })
            graph.addCell(s);
        }
        $('body').off('mousemove.fly').off('mouseup.fly');
        flyShape.remove();
        $('#flyFlowPaper').remove();
    });

});
actionControlPaper.on('cell:pointerdown', function (cellView, e, x, y) {
    var divFlyFlow = document.createElement("div");
    divFlyFlow.setAttribute('id', 'flyFlowPaper');
    divFlyFlow.setAttribute('style', "position:fixed;z-index:100;opacity:0;pointer-event:none;");
    document.body.appendChild(divFlyFlow);
    var flyFlowGraph = new joint.dia.Graph,
        flyFlowPaper = new joint.dia.Paper({
            el: $('#flyFlowPaper'),
            model: flyFlowGraph,
            interactive: false
        }),
        flyShape = cellView.model.clone(),
        pos = cellView.model.position(),
        offset = {
            x: x - pos.x,
            y: y - pos.y
        };

    // flyShape.position(0, 0);
    flyFlowGraph.addCell(flyShape);
    $("#flyFlowPaper").offset({
        left: e.pageX - offset.x,
        top: e.pageY - offset.y
    });
    $('body').on('mousemove.fly', function (e) {
        $("#flyFlowPaper").offset({
            left: e.pageX - offset.x,
            top: e.pageY - offset.y
        });
    });
    $('body').on('mouseup.fly', function (e) {
        var x = e.pageX,
            y = e.pageY,
            target = paper.$el.offset();

        // Dropped over paper ?
        if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
            var s = flyShape.clone();
            s.position(x - target.left - offset.x, y - target.top - offset.y);
            var sizeBodyPaper = {width: 140, height: 70, fill: 'black'}
            var textBodyPaper = joint.util.breakText(s.attr('.body-text').text, sizeBodyPaper);
            s.attr({
                '.body-paper': {
                    width: "230",
                    height: "72",
                    transform: "translate(20, -20)",
                    filter: "url(#" + filterId + ")",
                    rx: "8",
                    ry: "8",
                    fill: '#D4FFDB',
                    stroke: 'none'
                },
                '.body-text': {
                    fill: 'black',
                    'font-size': 13,
                    'font-weight': 'bold',
                    'ref-x': 45,
                    lineHeight: '16',
                    display: 'block',
                    'text': textBodyPaper
                },
                '.label': {
                    display: 'none',
                }

            })
            graph.addCell(s);
        }
        $('body').off('mousemove.fly').off('mouseup.fly');
        flyShape.remove();
        $('#flyFlowPaper').remove();
    });

});
flowControlPaper.on('cell:pointerdown', function (cellView, e, x, y) {
    var divFlyFlow = document.createElement("div");
    divFlyFlow.setAttribute('id', 'flyFlowPaper');
    divFlyFlow.setAttribute('style', "position:fixed;z-index:100;opacity:0;pointer-event:none;");
    document.body.appendChild(divFlyFlow);
    var flyFlowGraph = new joint.dia.Graph,
        flyFlowPaper = new joint.dia.Paper({
            el: $('#flyFlowPaper'),
            model: flyFlowGraph,
            interactive: false
        }),
        flyShape = cellView.model.clone(),
        pos = cellView.model.position(),
        offset = {
            x: x - pos.x,
            y: y - pos.y
        };

    // flyShape.position(0, 0);
    flyFlowGraph.addCell(flyShape);
    $("#flyFlowPaper").offset({
        left: e.pageX - offset.x,
        top: e.pageY - offset.y
    });
    $('body').on('mousemove.fly', function (e) {
        $("#flyFlowPaper").offset({
            left: e.pageX - offset.x,
            top: e.pageY - offset.y
        });
    });
    $('body').on('mouseup.fly', function (e) {
        var x = e.pageX,
            y = e.pageY,
            target = paper.$el.offset();

        // Dropped over paper ?
        if (x > target.left && x < target.left + paper.$el.width() && y > target.top && y < target.top + paper.$el.height()) {
            var s = flyShape.clone();
            s.position(x - target.left - offset.x, y - target.top - offset.y);
            var sizeBodyPaper = {width: 140, height: 70, fill: 'black'}
            var textBodyPaper = joint.util.breakText(s.attr('.body-text').text, sizeBodyPaper);
            s.attr({
                '.body-paper': {
                    width: "230",
                    height: "72",
                    transform: "translate(20, -20)",
                    filter: "url(#" + filterId + ")",
                    rx: "8",
                    ry: "8",
                    fill: '#FFDBDB',
                },
                '.body-text': {
                    fill: 'black',
                    'font-size': 13,
                    'font-weight': 'bold',
                    'ref-x': 45,
                    lineHeight: '16',
                    display: 'block',
                    'text': textBodyPaper
                },
                '.label': {
                    display: 'none',
                }

            })

            graph.addCell(s);
        }
        $('body').off('mousemove.fly').off('mouseup.fly');
        flyShape.remove();
        $('#flyFlowPaper').remove();
    });

});

var oldBreakText = joint.util.breakText;
joint.util.breakText = function (text, size, styles, opt) {
    var height = size.height;

    // Call old break text, but without height
    var brokenText = oldBreakText(text, {width: size.width}, styles, opt);
    var lines = brokenText.split('\n');

    opt = opt || {};
    var svgDocument = opt.svgDocument || V('svg').node;
    var textElement = V('<text></text>').attr(styles || {}).node;
    textElement.style.display = 'block';
    svgDocument.appendChild(textElement);
    if (!opt.svgDocument) {
        document.body.appendChild(svgDocument);
    }

    for (var i = 0; i < lines.length; i++) {
        var textSpan = V('<tspan></tspan>').attr({x: 0, dy: '1em'}).node;
        var textNode = document.createTextNode('');
        textNode.data = lines[i];
        textSpan.appendChild(textNode);
        textSpan.style.display = 'block';
        textElement.appendChild(textSpan);
        if (textElement.getBBox().height > height) {
            // remove overflowing lines
            lines.splice(i);
            break;
        }
    }

    if (opt.svgDocument) {
        // svg document was provided, remove the text element only
        svgDocument.removeChild(textElement);
    } else {
        // clean svg document
        document.body.removeChild(svgDocument);
    }
    return lines.join('\n');
}

/* =======================================
 * ZOOM CANVAS
 * =======================================
 */
/*var minimapNavigatorPosition = {
    minX: 50,
    minY: 20,
    maxX: 70,
    maxY: 40,
};*/
var scale = 0.1;
var zoomCanvas = new joint.dia.Paper({
    el: document.getElementById('zoomCanvas'),
    width: 255,
    height: 125 ,
    model: graph,
    embeddingMode: false,
    linkPinning: false,
    interactive:false
});


zoomCanvas.scale(scale);

/*$('.zoomContainer').height(config.paperWidth * scale);
$('.zoomContainer').width(config.paperHeight * scale);*/

// Set minimap navigator width, height
var containerWidthHeight = $('.main-content').width(); // height, width both are set to same in css
$('.current-view').width(containerWidthHeight * scale - 20);
$('.current-view').height(containerWidthHeight * scale - 20);

// Bind container scrolling
/*$('.main-content').scroll(function (e) {
    $('.current-view').css('top', minimapNavigatorPosition.minY + e.target.scrollTop * scale);
    $('.current-view').css('left', minimapNavigatorPosition.minX + e.target.scrollLeft * scale);
});*/

// Bind minimap navigator drag
var dragFlag = false;
var x = 0;
var y = 0;
$('.current-view').mousedown(function (e) {
    dragFlag = true;
    x = $(this).offset().left - e.clientX;
    y = $(this).offset().top - e.clientY;
});
$('.current-view').mouseup(function () {
    dragFlag = false;
});
$('.zoomContainer').mouseleave(function () {
    dragFlag = false;
});
$('.current-view').mousemove(function (e) {

    if (dragFlag) {
        debugger
        var newY = e.clientY + y;
        var newX = e.clientX + x;
        /*if (minimapNavigatorPosition.minY > newY) {
            newY = minimapNavigatorPosition.minY;
        }
        if (minimapNavigatorPosition.minX > newX) {
            newX = minimapNavigatorPosition.minX;
        }
        if (minimapNavigatorPosition.maxY < newY) {
            newY = minimapNavigatorPosition.maxY;
        }
        if (minimapNavigatorPosition.maxX < newX) {
            newX = minimapNavigatorPosition.maxX;
        }*/
        $('.current-view').css('top', Math.abs(y));
        $('.current-view').css('left', Math.abs(x));

        debugger
        paper.translate(
            e.offsetX - newX ,
            e.offsetY - newY);
        /*$('.main-content').scrollLeft((newX - minimapNavigatorPosition.minX) / scale);
        $('.main-content').scrollTop((newY - minimapNavigatorPosition.minY) / scale);*/

    }
});

$('#zoomCanvas').on('mousewheel DOMMouseScroll', function (e) {
    e.preventDefault();
    e = e.originalEvent;

    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))) / 50;
    var offsetX = (e.offsetX || e.clientX - $(this).offset().left); // offsetX is not defined in FF
    var offsetY = (e.offsetY || e.clientY - $(this).offset().top); // offsetY is not defined in FF
    var p = offsetToLocalPoint(offsetX, offsetY);
    var newScale = V(paper.viewport).scale().sx + delta; // the current paper scale changed by delta

    if (newScale > 0.4 && newScale < 2) {
        paper.setOrigin(0, 0); // reset the previous viewport translation
        paper.scale(newScale, newScale, p.x, p.y);
    }
});

$('#zoom-out').on('click', function () {
    var ctm = paper.viewport.getCTM();
    paper.translate(0,0);
    paper.scale(Math.max(ctm.a - scale, scale), Math.max(ctm.d - scale, scale));
});

$('#zoom-in').on('click', function () {
    var ctm = paper.viewport.getCTM();
    paper.translate(0,0);
    paper.scale(Math.min(ctm.a + scale, 3), Math.min(ctm.d + scale, 3));
});

$('#zoom-reset').on('click', function () {
    paper.translate(0,0);
    paper.scale(1);
});

var dragStartPosition;
paper.on('blank:pointerdown', function (event, x, y) {
    var scale = V(paper.viewport).scale();
    dragStartPosition = {x: x * scale.sx, y: y * scale.sy};
    if(dragStartPosition)
        paper.translate(
            event.offsetX - dragStartPosition.x,
            event.offsetY - dragStartPosition.y);
});

paper.on('cell:pointerup blank:pointerup', function(cellView, x, y) {
    dragStartPosition=''
    delete dragStartPosition;
});

$("#paper").mousemove(function (event,x,y) {
    if(dragStartPosition)
        paper.translate(
            event.offsetX - dragStartPosition.x,
            event.offsetY - dragStartPosition.y);
});

paper.on('cell:pointerup', function (cellView, evt) {
    var elem = cellView.model;
    var sourceId = elem.prop('source/id');
    var targetId = elem.prop('target/id');
    if (elem instanceof joint.dia.Link && (!sourceId || !targetId)) {
        elem.remove()
    }
});

paper.on('element:del-icon:pointerdown', function (elementView, evt) {
    evt.stopPropagation();
    // var model = elementView.model;
    deleteCell(elementView)

});
var selected;
paper.on('cell:mouseover', function (cellView, evt) {
    selected = cellView.model;
    selected.prop('ports/groups', portsList);
    selected.attr({
        '.del-icon': {
            text: '\uf1f8',
            fill: 'red',
            fontFamily: 'FontAwesome',
            fontSize: 17,
            x: 210,
            y: -15,
            cursor: 'pointer',
            event: 'element:del-icon:pointerdown',
            display: 'block'
        },
        '.ports-on-hover': {
            r: 13,
            cx: 13,
            cy: 13,
            transform: "translate(240, 5)",
            display: 'block',
            stroke: '#fff',
            strokeWidth: 2,

        },
        '.ports-icon': {
            text: '\uf061',
            fill: 'white',
            fontFamily: 'FontAwesome',
            fontSize: 15,
            x: 247,
            y: 23,
            cursor: 'pointer',
            display: 'block'
        },
    });
});

paper.on('cell:mouseout', function (cellView, evt) {
    selected = cellView.model;
    selected.prop('ports/groups', '');
    selected.attr({
        '.del-icon': {
            display: 'none'
        },
        '.ports-on-hover': {
            display: 'none'
        },
        '.ports-icon': {
            display: 'none'
        }
    });

    if (selected.isLink()) {
        logSourceTargetPorts(selected);
    }
});

function logSourceTargetPorts(link) {
    var source = link.get('source');
    var target = link.get('target');
    selected.source({id: source.id, anchor: {name: 'center', args: {dy: -15}}})
}

function deleteCell(cellView) {
    $('body').append(
        `<div class="modal fade modal-danger" id="ModelDelete" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">حذف</h4>
                    </div>
                    <div class="modal-body">
                        <p class="text-right">آیا از حذف این  مدل مطمئن هستید؟</p> 
                    </div>
                    <div class="modal-footer">
                        <button id="deleteModel" type="button" class="btn btn-danger" >حذف</button>
                        <button id="closeModal" type="button" class="btn btn-default" >بستن</button>
                    </div>
                </div>
            </div>
        </div>`
    )
    $("#ModelDelete").modal('show');

    $("#ModelDelete #closeModal").on('click', function () {
        $("#ModelDelete").modal('hide');
    });

    $('#ModelDelete').on('hidden.bs.modal', function (e) {
        $("#ModelDelete").remove();
    })

    $("#ModelDelete #deleteModel").on('click', function () {
        let selected = cellView.model;
        selected.remove();
        $("#ModelDelete").modal('hide');
        $('.context-menu ').hide();
    });
}

function f() {
    console.log(graph.toJSON())
}

$(document).ready(function () {
    $('.buttonBar').click(function () {
        $(this).toggleClass("change");
        $('.sidebar').toggleClass('open-menu');
        $('.menubar:before').css('width', '0');
        $('.main').toggleClass('menu-compact');
    });

    //add active class on menu
    $('ul.list-sidebar li').click(function (e) {
        $(this).siblings().find('span.fa-chevron-down').removeClass('menu-expand');
    });

    $('ul.list-sidebar li.panel a').click(function (e) {
        e.preventDefault();
        $(this).find('span.fa-chevron-down').toggleClass('menu-expand');
    });

});


