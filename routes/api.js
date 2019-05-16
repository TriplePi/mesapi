var a =[];

var products = [
    {
        "Id":1,
        "Name":"Продукт #1",
        "Processes":[
            {
                "Id":1,
                "Name":"ТП #1",
                "Kit":null,
                "Operations":[
                    {
                        "Id":1,
                        "Order":0,
                        "OperationModes":[
                            {
                                "Id":1,
                                "Name":"TО #6-1 СПЕЦ. ШЛИФОВАЛЬHАЯ | 43",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:53:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id":2,
                        "Order":1,
                        "OperationModes":[
                            {
                                "Id":2,
                                "Name":"TО #6-2 СЛЕСАРHАЯ | 112",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:29:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":3,
                        "Order":2,
                        "OperationModes":[
                            {
                                "Id":3,
                                "Name":"TО #6-3 СЛЕСАРHАЯ | 452",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:45:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":4,
                        "Order":3,
                        "OperationModes":[
                            {
                                "Id":4,
                                "Name":"TО #6-4 ОТЖИГ | 116",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:15:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":5,
                        "Order":4,
                        "OperationModes":[
                            {
                                "Id":5,
                                "Name":"TО #6-5 ФРЕЗЕРHАЯ С ЧПУ | 656",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:17:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id":6,
                        "Order":5,
                        "OperationModes":[
                            {
                                "Id":6,
                                "Name":"TО #6-6 ФРЕЗЕРHАЯ С ЧПУ | 695",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:28:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id":7,
                        "Order":6,
                        "OperationModes":[
                            {
                                "Id":7,
                                "Name":"TО #6-7 СПЕЦ. ШЛИФОВАЛЬHАЯ | 886",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:20:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":8,
                        "Order":7,
                        "OperationModes":[
                            {
                                "Id":8,
                                "Name":"TО #6-8 ПЛОСКОШЛИФОВАЛЬHАЯ | 576",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:27:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":9,
                        "Order":8,
                        "OperationModes":[
                            {
                                "Id":9,
                                "Name":"TО #6-9 СПЕЦ. ШЛИФОВАЛЬHАЯ | 272",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:22:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":10,
                        "Order":9,
                        "OperationModes":[
                            {
                                "Id":10,
                                "Name":"TО #6-10 ФРЕЗЕРHАЯ С ЧПУ | 305",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:35:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    54,
                                    53
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "Id":2,
        "Name":"Продукт #2",
        "Processes":[
            {
                "Id":2,
                "Name":"ТП #2",
                "Kit":null,
                "Operations":[
                    {
                        "Id":11,
                        "Order":0,
                        "OperationModes":[
                            {
                                "Id":11,
                                "Name":"TО #6-1 КРУГЛОШЛИФОВАЛЬHАЯ | 608",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:22:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":12,
                        "Order":1,
                        "OperationModes":[
                            {
                                "Id":12,
                                "Name":"TО #6-2 ОТЖИГ | 118",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:46:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":13,
                        "Order":2,
                        "OperationModes":[
                            {
                                "Id":13,
                                "Name":"TО #6-3 КРУГЛОШЛИФОВАЛЬHАЯ | 702",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:53:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":14,
                        "Order":3,
                        "OperationModes":[
                            {
                                "Id":14,
                                "Name":"TО #6-4 ПЛОСКОШЛИФОВАЛЬHАЯ | 895",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:34:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id":15,
                        "Order":4,
                        "OperationModes":[
                            {
                                "Id":15,
                                "Name":"TО #6-5 ОТЖИГ | 129",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:48:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":16,
                        "Order":5,
                        "OperationModes":[
                            {
                                "Id":16,
                                "Name":"TО #6-6 СЛЕСАРHАЯ | 13",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:57:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":17,
                        "Order":6,
                        "OperationModes":[
                            {
                                "Id":17,
                                "Name":"TО #6-7 ПЛОСКОШЛИФОВАЛЬHАЯ | 270",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:17:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id":18,
                        "Order":7,
                        "OperationModes":[
                            {
                                "Id":18,
                                "Name":"TО #6-8 ФРЕЗЕРHАЯ С ЧПУ | 498",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:35:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    54,
                                    53
                                ]
                            }
                        ]
                    },
                    {
                        "Id":19,
                        "Order":8,
                        "OperationModes":[
                            {
                                "Id":19,
                                "Name":"TО #6-9 ПЛОСКОШЛИФОВАЛЬHАЯ | 900",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:44:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id":20,
                        "Order":9,
                        "OperationModes":[
                            {
                                "Id":20,
                                "Name":"TО #6-10 КРУГЛОШЛИФОВАЛЬHАЯ | 69",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:42:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":21,
                        "Order":10,
                        "OperationModes":[
                            {
                                "Id":21,
                                "Name":"TО #6-11 ФРЕЗЕРHАЯ С ЧПУ | 815",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:41:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    54,
                                    53
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "Id":3,
        "Name":"Продукт #3",
        "Processes":[
            {
                "Id":3,
                "Name":"ТП #3",
                "Kit":null,
                "Operations":[
                    {
                        "Id":22,
                        "Order":0,
                        "OperationModes":[
                            {
                                "Id":22,
                                "Name":"TО #6-1 ПЛОСКОШЛИФОВАЛЬHАЯ | 208",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:48:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id":23,
                        "Order":1,
                        "OperationModes":[
                            {
                                "Id":23,
                                "Name":"TО #6-2 ПЛОСКОШЛИФОВАЛЬHАЯ | 760",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:42:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":24,
                        "Order":2,
                        "OperationModes":[
                            {
                                "Id":24,
                                "Name":"TО #6-3 ФРЕЗЕРHАЯ С ЧПУ | 271",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:27:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id":25,
                        "Order":3,
                        "OperationModes":[
                            {
                                "Id":25,
                                "Name":"TО #6-4 СЛЕСАРHАЯ | 191",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:58:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":26,
                        "Order":4,
                        "OperationModes":[
                            {
                                "Id":26,
                                "Name":"TО #6-5 ОТЖИГ | 952",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:58:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":27,
                        "Order":5,
                        "OperationModes":[
                            {
                                "Id":27,
                                "Name":"TО #6-6 ПЛОСКОШЛИФОВАЛЬHАЯ | 847",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:24:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":28,
                        "Order":6,
                        "OperationModes":[
                            {
                                "Id":28,
                                "Name":"TО #6-7 СПЕЦ. ШЛИФОВАЛЬHАЯ | 413",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:54:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":29,
                        "Order":7,
                        "OperationModes":[
                            {
                                "Id":29,
                                "Name":"TО #6-8 КРУГЛОШЛИФОВАЛЬHАЯ | 735",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:33:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":30,
                        "Order":8,
                        "OperationModes":[
                            {
                                "Id":30,
                                "Name":"TО #6-9 СПЕЦ. ШЛИФОВАЛЬHАЯ | 617",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:41:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":31,
                        "Order":9,
                        "OperationModes":[
                            {
                                "Id":31,
                                "Name":"TО #6-10 СЛЕСАРHАЯ | 782",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:45:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":32,
                        "Order":10,
                        "OperationModes":[
                            {
                                "Id":32,
                                "Name":"TО #6-11 СПЕЦ. ШЛИФОВАЛЬHАЯ | 872",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:56:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":33,
                        "Order":11,
                        "OperationModes":[
                            {
                                "Id":33,
                                "Name":"TО #6-12 ПЛОСКОШЛИФОВАЛЬHАЯ | 46",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:48:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":34,
                        "Order":12,
                        "OperationModes":[
                            {
                                "Id":34,
                                "Name":"TО #6-13 ПЛОСКОШЛИФОВАЛЬHАЯ | 28",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:52:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":35,
                        "Order":13,
                        "OperationModes":[
                            {
                                "Id":35,
                                "Name":"TО #6-14 ОТЖИГ | 630",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:20:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":36,
                        "Order":14,
                        "OperationModes":[
                            {
                                "Id":36,
                                "Name":"TО #6-15 КРУГЛОШЛИФОВАЛЬHАЯ | 383",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:42:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "Id":4,
        "Name":"Продукт #4",
        "Processes":[
            {
                "Id":4,
                "Name":"ТП #4",
                "Kit":null,
                "Operations":[
                    {
                        "Id":37,
                        "Order":0,
                        "OperationModes":[
                            {
                                "Id":37,
                                "Name":"TО #6-1 СПЕЦ. ШЛИФОВАЛЬHАЯ | 100",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:45:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id":38,
                        "Order":1,
                        "OperationModes":[
                            {
                                "Id":38,
                                "Name":"TО #6-2 КРУГЛОШЛИФОВАЛЬHАЯ | 635",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:15:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":39,
                        "Order":2,
                        "OperationModes":[
                            {
                                "Id":39,
                                "Name":"TО #6-3 СПЕЦ. ШЛИФОВАЛЬHАЯ | 948",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:32:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id":40,
                        "Order":3,
                        "OperationModes":[
                            {
                                "Id":40,
                                "Name":"TО #6-4 СЛЕСАРHАЯ | 930",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:18:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":41,
                        "Order":4,
                        "OperationModes":[
                            {
                                "Id":41,
                                "Name":"TО #6-5 ПЛОСКОШЛИФОВАЛЬHАЯ | 591",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:42:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id":42,
                        "Order":5,
                        "OperationModes":[
                            {
                                "Id":42,
                                "Name":"TО #6-6 СПЕЦ. ШЛИФОВАЛЬHАЯ | 249",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:22:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id":43,
                        "Order":6,
                        "OperationModes":[
                            {
                                "Id":43,
                                "Name":"TО #6-7 КРУГЛОШЛИФОВАЛЬHАЯ | 789",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:17:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":44,
                        "Order":7,
                        "OperationModes":[
                            {
                                "Id":44,
                                "Name":"TО #6-8 СЛЕСАРHАЯ | 103",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:17:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id":45,
                        "Order":8,
                        "OperationModes":[
                            {
                                "Id":45,
                                "Name":"TО #6-9 ПЛОСКОШЛИФОВАЛЬHАЯ | 634",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:42:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id":46,
                        "Order":9,
                        "OperationModes":[
                            {
                                "Id":46,
                                "Name":"TО #6-10 КРУГЛОШЛИФОВАЛЬHАЯ | 723",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:36:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "Id":5,
        "Name":"Продукт #5",
        "Processes":[
            {
                "Id":5,
                "Name":"ТП #5",
                "Kit":null,
                "Operations":[
                    {
                        "Id":47,
                        "Order":0,
                        "OperationModes":[
                            {
                                "Id":47,
                                "Name":"TО #6-1 КРУГЛОШЛИФОВАЛЬHАЯ | 39",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:36:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":48,
                        "Order":1,
                        "OperationModes":[
                            {
                                "Id":48,
                                "Name":"TО #6-2 ФРЕЗЕРHАЯ С ЧПУ | 835",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:21:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id":49,
                        "Order":2,
                        "OperationModes":[
                            {
                                "Id":49,
                                "Name":"TО #6-3 ОТЖИГ | 718",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:28:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":50,
                        "Order":3,
                        "OperationModes":[
                            {
                                "Id":50,
                                "Name":"TО #6-4 КРУГЛОШЛИФОВАЛЬHАЯ | 690",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:15:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id":51,
                        "Order":4,
                        "OperationModes":[
                            {
                                "Id":51,
                                "Name":"TО #6-5 СПЕЦ. ШЛИФОВАЛЬHАЯ | 588",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:34:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":52,
                        "Order":5,
                        "OperationModes":[
                            {
                                "Id":52,
                                "Name":"TО #6-6 ОТЖИГ | 656",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:18:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id":53,
                        "Order":6,
                        "OperationModes":[
                            {
                                "Id":53,
                                "Name":"TО #6-7 ФРЕЗЕРHАЯ С ЧПУ | 578",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:30:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id":54,
                        "Order":7,
                        "OperationModes":[
                            {
                                "Id":54,
                                "Name":"TО #6-8 ПЛОСКОШЛИФОВАЛЬHАЯ | 863",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:22:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":55,
                        "Order":8,
                        "OperationModes":[
                            {
                                "Id":55,
                                "Name":"TО #6-9 ПЛОСКОШЛИФОВАЛЬHАЯ | 582",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:32:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id":56,
                        "Order":9,
                        "OperationModes":[
                            {
                                "Id":56,
                                "Name":"TО #6-10 СПЕЦ. ШЛИФОВАЛЬHАЯ | 938",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:30:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":57,
                        "Order":10,
                        "OperationModes":[
                            {
                                "Id":57,
                                "Name":"TО #6-11 СПЕЦ. ШЛИФОВАЛЬHАЯ | 491",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:38:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id":58,
                        "Order":11,
                        "OperationModes":[
                            {
                                "Id":58,
                                "Name":"TО #6-12 ФРЕЗЕРHАЯ С ЧПУ | 997",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:22:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id":59,
                        "Order":12,
                        "OperationModes":[
                            {
                                "Id":59,
                                "Name":"TО #6-13 СПЕЦ. ШЛИФОВАЛЬHАЯ | 426",
                                "PrepareOperationDuration":"00:00:00",
                                "OperationDuration":"00:46:00",
                                "CompletionOperationDuration":"00:00:00",
                                "CompletionWorkCentrDuration":"00:00:00",
                                "Multiplicity":1,
                                "WorkCenters":[
                                    49,
                                    44
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

/*
 * POST /api/adjustment
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiAdjustment = function (req, res) {
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * DELETE /api/adjustment
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.deleteApiAdjustment = function (req, res) {
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * DELETE /api/adjustment/{adjustmentId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * adjustmentId(type: integer) - path parameter -
 */
exports.deleteApiAdjustment2 = function (req, res) {
    req.check('adjustmentId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/adjustment/operations/{operationId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * operationId(type: integer) - path parameter -
 */
exports.postApiAdjustmentOperations = function (req, res) {
    req.check('operationId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/adjustment/operations/{operationId}/workcenters/{workCenterId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * operationId(type: integer) - path parameter -
 * workCenterId(type: integer) - path parameter -
 */
exports.postApiAdjustmentOperations2 = function (req, res) {
    req.check('operationId', 'Invalid parameter').notEmpty();
    req.check('workCenterId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/adjustment/workcenters/{workCenterId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * workCenterId(type: integer) - path parameter -
 */
exports.postApiAdjustmentWorkcenters = function (req, res) {
    req.check('workCenterId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/adjustment/workcenters/{workCenterId}/operations/{operationId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * workCenterId(type: integer) - path parameter -
 * operationId(type: integer) - path parameter -
 */
exports.postApiAdjustmentWorkcenters2 = function (req, res) {
    req.check('workCenterId', 'Invalid parameter').notEmpty();
    req.check('operationId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/order
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiOrder = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiOrder');
};

/*
 * GET /api/order/batches
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * processId(type: integer) - query parameter -
 * quantity(type: integer) - query parameter -
 */
exports.getApiOrderBatches = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiOrderBatches');
};

/*
 * GET /api/problem
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * minTs(type: integer) - query parameter -
 */
exports.getApiProblem = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiProblem');
};

/*
 * POST /api/problem
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiProblem = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiProblem');
};

/*
 * GET /api/problem/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: integer) - path parameter -
 */
exports.getApiProblem2 = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiProblem2');
};

/*
 * DELETE /api/problem/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: integer) - path parameter -
 */
exports.deleteApiProblem = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * GET /api/problem/{id}/solutions
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: integer) - path parameter -
 */
exports.getApiProblemSolutions = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiProblemSolutions');
};

/*
 * POST /api/problem/{id}/solutions
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * id(type: integer) - path parameter -
 * if-match(type: string) - header parameter -
 * Solution(type: object) - query parameter -
 * IsFinal(type: boolean) - formData parameter -
 */
exports.postApiProblemSolutions = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    req.checkQuery('Solution', 'Invalid query parameter').notEmpty();
    req.check('IsFinal', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/problem/{id}/solutions/{solutionId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * id(type: integer) - path parameter -
 * solutionId(type: integer) - path parameter -
 */
exports.postApiProblem2 = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    req.check('solutionId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiProblem2');
};

/*
 * POST /api/product
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiProduct = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiProduct');
};

/*
 * GET /api/product/{productId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * productId(type: integer) - path parameter -
 */
exports.getApiProduct = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);
    // set response body and send
    res.type('json');
    // res.json({"id":req.params.productId});
    res.json(_.filter(products,{'Id':Number(req.params.productId)}));
};

/*
 * DELETE /api/product/{productId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * productId(type: integer) - path parameter -
 */
exports.deleteApiProduct = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/product/{productId}/processes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * productId(type: integer) - path parameter -
 */
exports.postApiProductProcesses = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiProductProcesses');
};

/*
 * GET /api/product/{productId}/processes/{processId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * productId(type: integer) - path parameter -
 * processId(type: integer) - path parameter -
 */
exports.getApiProduct2 = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    req.check('processId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiProduct2');
};

/*
 * POST /api/product/{productId}/processes/{processId}/operations
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * productId(type: integer) - path parameter -
 * processId(type: integer) - path parameter -
 */
exports.postApiProductOperations = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    req.check('processId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiProductOperations');
};

/*
 * POST /api/product/{productId}/processes/{processId}/operations/{operationId}/modes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * productId(type: integer) - path parameter -
 * processId(type: integer) - path parameter -
 * operationId(type: integer) - path parameter -
 */
exports.postApiProductModes = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    req.check('processId', 'Invalid parameter').notEmpty();
    req.check('operationId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiProductModes');
};

/*
 * DELETE /api/product/{productId}/processes/{processId}/operations/{operationId}/modes/{operationModeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * productId(type: integer) - path parameter -
 * processId(type: integer) - path parameter -
 * operationId(type: integer) - path parameter -
 * operationModeId(type: integer) - path parameter -
 */
exports.deleteApiProduct2 = function (req, res) {
    req.check('productId', 'Invalid parameter').notEmpty();
    req.check('processId', 'Invalid parameter').notEmpty();
    req.check('operationId', 'Invalid parameter').notEmpty();
    req.check('operationModeId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * GET /api/report/batchesForecast
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiReportBatchesforecast = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiReportBatchesforecast');
};

/*
 * GET /api/report/dailyReport
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * date(type: string) - query parameter -
 */
exports.getApiReportDailyreport = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiReportDailyreport');
};

/*
 * GET /api/report/scheduleDetailed
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiReportScheduledetailed = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiReportScheduledetailed');
};

/*
 * GET /api/schedule
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * minTs(type: integer) - query parameter -
 * begin(type: string) - query parameter -
 * end(type: string) - query parameter -
 */
exports.getApiSchedule = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiSchedule');
};

/*
 * POST /api/schedule
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiSchedule = function (req, res) {
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/schedule/{id}/actions
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * id(type: integer) - path parameter -
 */
exports.postApiScheduleActions = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * GET /api/schedule/{id}/history
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: integer) - path parameter -
 */
exports.getApiScheduleHistory = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/schedule/{id}/manageactions
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * id(type: integer) - path parameter -
 */
exports.postApiScheduleManageactions = function (req, res) {
    req.check('id', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * GET /api/schedule/deleted
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * minTs(type: integer) - query parameter -
 */
exports.getApiScheduleDeleted = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiScheduleDeleted');
};

/*
 * GET /api/timeline
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * begin(type: string) - query parameter -
 * end(type: string) - query parameter -
 */
exports.getApiTimeline = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiTimeline');
};

/*
 * GET /api/timeline/adjustments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiTimelineAdjustments = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiTimelineAdjustments');
};

/*
 * GET /api/timeline/workcenterinaccessibility
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * begin(type: string) - query parameter -
 * end(type: string) - query parameter -
 */
exports.getApiTimelineWorkcenterinaccessibility = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiTimelineWorkcenterinaccessibility');
};

/*
 * GET /api/timeline/workcenters
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiTimelineWorkcenters = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiTimelineWorkcenters');
};

/*
 * GET /api/timeline/workcenterservice
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * begin(type: string) - query parameter -
 * end(type: string) - query parameter -
 */
exports.getApiTimelineWorkcenterservice = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiTimelineWorkcenterservice');
};

/*
 * GET /api/workcenter
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiWorkcenter = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_getApiWorkcenter');
};

/*
 * POST /api/workcenter
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiWorkcenter = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.render('api_postApiWorkcenter');
};

/*
 * DELETE /api/workcenter/{workCenterId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * workCenterId(type: integer) - path parameter -
 */
exports.deleteApiWorkcenter = function (req, res) {
    req.check('workCenterId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/workcenter/{workCenterId}/service
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * workCenterId(type: integer) - path parameter -
 */
exports.postApiWorkcenterService = function (req, res) {
    req.check('workCenterId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

/*
 * POST /api/workcenter/{workCenterId}/workingtimes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * workCenterId(type: integer) - path parameter -
 */
exports.postApiWorkcenterWorkingtimes = function (req, res) {
    req.check('workCenterId', 'Invalid parameter').notEmpty();
    if (req.validationErrors()) {
        return res.json(400, req.validationErrorsJson());
    }
    res.status(200);

    // set response body and send
    res.send('');
};

exports.postSignIn = function (req, res) {
    // Check the request, make sure it is a compatible type
    if (req.body.password !== "poop") {
        return res.send(401, 'Invalid password');
    }

    // Set the type of response, sets the content type.
    res.type('application/json');

    // Set the status code of the response.
    res.status(200);

    return res.json({
        "token": "token"
    });
};