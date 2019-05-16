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
    res.json(_.find(products, {'Id': Number(req.params.productId)}));
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
    res.send(workcenters);
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


/*
 * GET /api/workcenter/{workCenterId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiWorkcenterById = function (req, res) {
    res.status(200);

    // set response body and send
    res.type('json');
    res.json(_.find(workcenters, {'Id': Number(req.params.productId)}));
};




var orders = [
    {
        "Id": 1,
        "Number": "000001",
        "Quantity": 10,
        "Start": "2018-09-21T08:03:00Z",
        "Deadline": "2018-10-02T08:03:00Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 176,
                "Number": 1,
                "Quantity": 10,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 2,
        "Number": "000002",
        "Quantity": 7,
        "Start": "2018-09-21T08:03:00Z",
        "Deadline": "2018-10-22T08:03:00Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 175,
                "Number": 1,
                "Quantity": 7,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 3,
        "Number": "000003",
        "Quantity": 10,
        "Start": "2018-09-21T08:03:00Z",
        "Deadline": "2018-10-22T08:03:00Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 177,
                "Number": 1,
                "Quantity": 10,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 4,
        "Number": "000004",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502862Z",
        "Deadline": "2018-10-22T08:03:09.502862Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 178,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 5,
        "Number": "000005",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502863Z",
        "Deadline": "2018-10-22T08:03:09.502863Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 179,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 6,
        "Number": "000006",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502864Z",
        "Deadline": "2018-10-22T08:03:09.502864Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 180,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 7,
        "Number": "000007",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502873Z",
        "Deadline": "2018-10-22T08:03:09.502874Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 181,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 8,
        "Number": "000008",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502874Z",
        "Deadline": "2018-10-22T08:03:09.502874Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 182,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 9,
        "Number": "000009",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502875Z",
        "Deadline": "2018-10-22T08:03:09.502875Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 183,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 10,
        "Number": "000010",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502876Z",
        "Deadline": "2018-10-22T08:03:09.502876Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 184,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 11,
        "Number": "000011",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502876Z",
        "Deadline": "2018-10-22T08:03:09.502876Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 185,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 12,
        "Number": "000012",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502877Z",
        "Deadline": "2018-10-22T08:03:09.502877Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 186,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 13,
        "Number": "000013",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502878Z",
        "Deadline": "2018-10-22T08:03:09.502878Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 188,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 14,
        "Number": "000014",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502878Z",
        "Deadline": "2018-10-22T08:03:09.502878Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 187,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 15,
        "Number": "000015",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502879Z",
        "Deadline": "2018-10-22T08:03:09.502879Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 189,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 16,
        "Number": "000016",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502879Z",
        "Deadline": "2018-10-22T08:03:09.502879Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 190,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 17,
        "Number": "000017",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.50288Z",
        "Deadline": "2018-10-22T08:03:09.50288Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 191,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 18,
        "Number": "000018",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502881Z",
        "Deadline": "2018-10-22T08:03:09.502881Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 193,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 19,
        "Number": "000019",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502881Z",
        "Deadline": "2018-10-22T08:03:09.502881Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 192,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 20,
        "Number": "000020",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502882Z",
        "Deadline": "2018-10-22T08:03:09.502882Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 194,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 21,
        "Number": "000021",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502883Z",
        "Deadline": "2018-10-22T08:03:09.502883Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 195,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 22,
        "Number": "000022",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502883Z",
        "Deadline": "2018-10-22T08:03:09.502883Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 196,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 23,
        "Number": "000023",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502884Z",
        "Deadline": "2018-10-22T08:03:09.502884Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 197,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 24,
        "Number": "000024",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502884Z",
        "Deadline": "2018-10-22T08:03:09.502885Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 198,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 25,
        "Number": "000025",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502885Z",
        "Deadline": "2018-10-22T08:03:09.502885Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 199,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 26,
        "Number": "000026",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502886Z",
        "Deadline": "2018-10-22T08:03:09.502886Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 200,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 27,
        "Number": "000027",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502886Z",
        "Deadline": "2018-10-22T08:03:09.502886Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 201,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 28,
        "Number": "000028",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502891Z",
        "Deadline": "2018-10-22T08:03:09.502891Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 202,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 29,
        "Number": "000029",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502892Z",
        "Deadline": "2018-10-22T08:03:09.502892Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 203,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 30,
        "Number": "000030",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502892Z",
        "Deadline": "2018-10-22T08:03:09.502892Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 204,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 31,
        "Number": "000031",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502893Z",
        "Deadline": "2018-10-22T08:03:09.502893Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 205,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 32,
        "Number": "000032",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502894Z",
        "Deadline": "2018-10-22T08:03:09.502894Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 206,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 33,
        "Number": "000033",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502894Z",
        "Deadline": "2018-10-22T08:03:09.502894Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 207,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 34,
        "Number": "000034",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502895Z",
        "Deadline": "2018-10-22T08:03:09.502895Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 208,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 35,
        "Number": "000035",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502896Z",
        "Deadline": "2018-10-22T08:03:09.502896Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 209,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 36,
        "Number": "000036",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502896Z",
        "Deadline": "2018-10-22T08:03:09.502896Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 210,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 37,
        "Number": "000037",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502897Z",
        "Deadline": "2018-10-22T08:03:09.502897Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 212,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 38,
        "Number": "000038",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502897Z",
        "Deadline": "2018-10-22T08:03:09.502898Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 211,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 39,
        "Number": "000039",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502898Z",
        "Deadline": "2018-10-22T08:03:09.502898Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 213,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 40,
        "Number": "000040",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502899Z",
        "Deadline": "2018-10-22T08:03:09.502899Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 214,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 41,
        "Number": "000041",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502899Z",
        "Deadline": "2018-10-22T08:03:09.502899Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 215,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 42,
        "Number": "000042",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.5029Z",
        "Deadline": "2018-10-22T08:03:09.5029Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 217,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 43,
        "Number": "000043",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.5029Z",
        "Deadline": "2018-10-22T08:03:09.502901Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 216,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 44,
        "Number": "000044",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502901Z",
        "Deadline": "2018-10-22T08:03:09.502901Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 218,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 45,
        "Number": "000045",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502902Z",
        "Deadline": "2018-10-22T08:03:09.502902Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 219,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 46,
        "Number": "000046",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502902Z",
        "Deadline": "2018-10-22T08:03:09.502902Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 220,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 47,
        "Number": "000047",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502903Z",
        "Deadline": "2018-10-22T08:03:09.502903Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 222,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 48,
        "Number": "000048",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502903Z",
        "Deadline": "2018-10-22T08:03:09.502904Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 221,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 49,
        "Number": "000049",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502908Z",
        "Deadline": "2018-10-22T08:03:09.502908Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 223,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 50,
        "Number": "000050",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502909Z",
        "Deadline": "2018-10-22T08:03:09.502909Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 225,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 51,
        "Number": "000051",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502909Z",
        "Deadline": "2018-10-22T08:03:09.502909Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 224,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 52,
        "Number": "000052",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.50291Z",
        "Deadline": "2018-10-22T08:03:09.50291Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 226,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 53,
        "Number": "000053",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.50291Z",
        "Deadline": "2018-10-22T08:03:09.502911Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 227,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 54,
        "Number": "000054",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502911Z",
        "Deadline": "2018-10-22T08:03:09.502911Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 228,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 55,
        "Number": "000055",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502912Z",
        "Deadline": "2018-10-22T08:03:09.502912Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 229,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 56,
        "Number": "000056",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502912Z",
        "Deadline": "2018-10-22T08:03:09.502912Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 230,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 57,
        "Number": "000057",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502913Z",
        "Deadline": "2018-10-22T08:03:09.502913Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 231,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 58,
        "Number": "000058",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502914Z",
        "Deadline": "2018-10-22T08:03:09.502914Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 232,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 59,
        "Number": "000059",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502915Z",
        "Deadline": "2018-10-22T08:03:09.502915Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 233,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 60,
        "Number": "000060",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502918Z",
        "Deadline": "2018-10-22T08:03:09.502918Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 234,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 61,
        "Number": "000061",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502919Z",
        "Deadline": "2018-10-22T08:03:09.502919Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 235,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 62,
        "Number": "000062",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.50292Z",
        "Deadline": "2018-10-22T08:03:09.50292Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 237,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 63,
        "Number": "000063",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.50292Z",
        "Deadline": "2018-10-22T08:03:09.50292Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 236,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 64,
        "Number": "000064",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502921Z",
        "Deadline": "2018-10-22T08:03:09.502921Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 239,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 65,
        "Number": "000065",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502921Z",
        "Deadline": "2018-10-22T08:03:09.502921Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 238,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 66,
        "Number": "000066",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502922Z",
        "Deadline": "2018-10-22T08:03:09.502922Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 240,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 67,
        "Number": "000067",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502923Z",
        "Deadline": "2018-10-22T08:03:09.502923Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 241,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 68,
        "Number": "000068",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502931Z",
        "Deadline": "2018-10-22T08:03:09.502931Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 242,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 69,
        "Number": "000069",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502932Z",
        "Deadline": "2018-10-22T08:03:09.502932Z",
        "Priority": 0,
        "ProcessId": 2,
        "Batches": [
            {
                "Id": 243,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 70,
        "Number": "000070",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502933Z",
        "Deadline": "2018-10-22T08:03:09.502933Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 244,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 71,
        "Number": "000071",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502933Z",
        "Deadline": "2018-10-22T08:03:09.502933Z",
        "Priority": 0,
        "ProcessId": 4,
        "Batches": [
            {
                "Id": 245,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 72,
        "Number": "000072",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502934Z",
        "Deadline": "2018-10-22T08:03:09.502934Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 246,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 73,
        "Number": "000073",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502934Z",
        "Deadline": "2018-10-22T08:03:09.502935Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 247,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 74,
        "Number": "000074",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502935Z",
        "Deadline": "2018-10-22T08:03:09.502935Z",
        "Priority": 0,
        "ProcessId": 3,
        "Batches": [
            {
                "Id": 248,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 75,
        "Number": "000075",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502936Z",
        "Deadline": "2018-10-22T08:03:09.502936Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 249,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 76,
        "Number": "000076",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502936Z",
        "Deadline": "2018-10-22T08:03:09.502936Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 250,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 77,
        "Number": "000077",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502937Z",
        "Deadline": "2018-10-22T08:03:09.502937Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 251,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 78,
        "Number": "000078",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502937Z",
        "Deadline": "2018-10-22T08:03:09.502938Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 252,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 79,
        "Number": "000079",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502938Z",
        "Deadline": "2018-10-22T08:03:09.502938Z",
        "Priority": 0,
        "ProcessId": 1,
        "Batches": [
            {
                "Id": 253,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    },
    {
        "Id": 80,
        "Number": "000080",
        "Quantity": 1,
        "Start": "2018-09-21T08:03:09.502939Z",
        "Deadline": "2018-10-22T08:03:09.502939Z",
        "Priority": 0,
        "ProcessId": 5,
        "Batches": [
            {
                "Id": 254,
                "Number": 1,
                "Quantity": 1,
                "StartOperationId": null
            }
        ]
    }
];

var products = [
    {
        "Id": 1,
        "Name": "Продукт #1",
        "Processes": [
            {
                "Id": 1,
                "Name": "ТП #1",
                "Kit": null,
                "Operations": [
                    {
                        "Id": 1,
                        "Order": 0,
                        "OperationModes": [
                            {
                                "Id": 1,
                                "Name": "TО #6-1 СПЕЦ. ШЛИФОВАЛЬHАЯ | 43",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:53:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 2,
                        "Order": 1,
                        "OperationModes": [
                            {
                                "Id": 2,
                                "Name": "TО #6-2 СЛЕСАРHАЯ | 112",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:29:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 3,
                        "Order": 2,
                        "OperationModes": [
                            {
                                "Id": 3,
                                "Name": "TО #6-3 СЛЕСАРHАЯ | 452",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:45:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 4,
                        "Order": 3,
                        "OperationModes": [
                            {
                                "Id": 4,
                                "Name": "TО #6-4 ОТЖИГ | 116",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:15:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 5,
                        "Order": 4,
                        "OperationModes": [
                            {
                                "Id": 5,
                                "Name": "TО #6-5 ФРЕЗЕРHАЯ С ЧПУ | 656",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:17:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 6,
                        "Order": 5,
                        "OperationModes": [
                            {
                                "Id": 6,
                                "Name": "TО #6-6 ФРЕЗЕРHАЯ С ЧПУ | 695",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:28:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 7,
                        "Order": 6,
                        "OperationModes": [
                            {
                                "Id": 7,
                                "Name": "TО #6-7 СПЕЦ. ШЛИФОВАЛЬHАЯ | 886",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:20:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 8,
                        "Order": 7,
                        "OperationModes": [
                            {
                                "Id": 8,
                                "Name": "TО #6-8 ПЛОСКОШЛИФОВАЛЬHАЯ | 576",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:27:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 9,
                        "Order": 8,
                        "OperationModes": [
                            {
                                "Id": 9,
                                "Name": "TО #6-9 СПЕЦ. ШЛИФОВАЛЬHАЯ | 272",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:22:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 10,
                        "Order": 9,
                        "OperationModes": [
                            {
                                "Id": 10,
                                "Name": "TО #6-10 ФРЕЗЕРHАЯ С ЧПУ | 305",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:35:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
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
        "Id": 2,
        "Name": "Продукт #2",
        "Processes": [
            {
                "Id": 2,
                "Name": "ТП #2",
                "Kit": null,
                "Operations": [
                    {
                        "Id": 11,
                        "Order": 0,
                        "OperationModes": [
                            {
                                "Id": 11,
                                "Name": "TО #6-1 КРУГЛОШЛИФОВАЛЬHАЯ | 608",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:22:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 12,
                        "Order": 1,
                        "OperationModes": [
                            {
                                "Id": 12,
                                "Name": "TО #6-2 ОТЖИГ | 118",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:46:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 13,
                        "Order": 2,
                        "OperationModes": [
                            {
                                "Id": 13,
                                "Name": "TО #6-3 КРУГЛОШЛИФОВАЛЬHАЯ | 702",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:53:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 14,
                        "Order": 3,
                        "OperationModes": [
                            {
                                "Id": 14,
                                "Name": "TО #6-4 ПЛОСКОШЛИФОВАЛЬHАЯ | 895",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:34:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 15,
                        "Order": 4,
                        "OperationModes": [
                            {
                                "Id": 15,
                                "Name": "TО #6-5 ОТЖИГ | 129",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:48:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 16,
                        "Order": 5,
                        "OperationModes": [
                            {
                                "Id": 16,
                                "Name": "TО #6-6 СЛЕСАРHАЯ | 13",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:57:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 17,
                        "Order": 6,
                        "OperationModes": [
                            {
                                "Id": 17,
                                "Name": "TО #6-7 ПЛОСКОШЛИФОВАЛЬHАЯ | 270",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:17:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 18,
                        "Order": 7,
                        "OperationModes": [
                            {
                                "Id": 18,
                                "Name": "TО #6-8 ФРЕЗЕРHАЯ С ЧПУ | 498",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:35:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    54,
                                    53
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 19,
                        "Order": 8,
                        "OperationModes": [
                            {
                                "Id": 19,
                                "Name": "TО #6-9 ПЛОСКОШЛИФОВАЛЬHАЯ | 900",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:44:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 20,
                        "Order": 9,
                        "OperationModes": [
                            {
                                "Id": 20,
                                "Name": "TО #6-10 КРУГЛОШЛИФОВАЛЬHАЯ | 69",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:42:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 21,
                        "Order": 10,
                        "OperationModes": [
                            {
                                "Id": 21,
                                "Name": "TО #6-11 ФРЕЗЕРHАЯ С ЧПУ | 815",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:41:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
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
        "Id": 3,
        "Name": "Продукт #3",
        "Processes": [
            {
                "Id": 3,
                "Name": "ТП #3",
                "Kit": null,
                "Operations": [
                    {
                        "Id": 22,
                        "Order": 0,
                        "OperationModes": [
                            {
                                "Id": 22,
                                "Name": "TО #6-1 ПЛОСКОШЛИФОВАЛЬHАЯ | 208",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:48:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 23,
                        "Order": 1,
                        "OperationModes": [
                            {
                                "Id": 23,
                                "Name": "TО #6-2 ПЛОСКОШЛИФОВАЛЬHАЯ | 760",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:42:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 24,
                        "Order": 2,
                        "OperationModes": [
                            {
                                "Id": 24,
                                "Name": "TО #6-3 ФРЕЗЕРHАЯ С ЧПУ | 271",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:27:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 25,
                        "Order": 3,
                        "OperationModes": [
                            {
                                "Id": 25,
                                "Name": "TО #6-4 СЛЕСАРHАЯ | 191",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:58:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 26,
                        "Order": 4,
                        "OperationModes": [
                            {
                                "Id": 26,
                                "Name": "TО #6-5 ОТЖИГ | 952",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:58:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 27,
                        "Order": 5,
                        "OperationModes": [
                            {
                                "Id": 27,
                                "Name": "TО #6-6 ПЛОСКОШЛИФОВАЛЬHАЯ | 847",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:24:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 28,
                        "Order": 6,
                        "OperationModes": [
                            {
                                "Id": 28,
                                "Name": "TО #6-7 СПЕЦ. ШЛИФОВАЛЬHАЯ | 413",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:54:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 29,
                        "Order": 7,
                        "OperationModes": [
                            {
                                "Id": 29,
                                "Name": "TО #6-8 КРУГЛОШЛИФОВАЛЬHАЯ | 735",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:33:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 30,
                        "Order": 8,
                        "OperationModes": [
                            {
                                "Id": 30,
                                "Name": "TО #6-9 СПЕЦ. ШЛИФОВАЛЬHАЯ | 617",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:41:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 31,
                        "Order": 9,
                        "OperationModes": [
                            {
                                "Id": 31,
                                "Name": "TО #6-10 СЛЕСАРHАЯ | 782",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:45:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 32,
                        "Order": 10,
                        "OperationModes": [
                            {
                                "Id": 32,
                                "Name": "TО #6-11 СПЕЦ. ШЛИФОВАЛЬHАЯ | 872",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:56:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 33,
                        "Order": 11,
                        "OperationModes": [
                            {
                                "Id": 33,
                                "Name": "TО #6-12 ПЛОСКОШЛИФОВАЛЬHАЯ | 46",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:48:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 34,
                        "Order": 12,
                        "OperationModes": [
                            {
                                "Id": 34,
                                "Name": "TО #6-13 ПЛОСКОШЛИФОВАЛЬHАЯ | 28",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:52:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 35,
                        "Order": 13,
                        "OperationModes": [
                            {
                                "Id": 35,
                                "Name": "TО #6-14 ОТЖИГ | 630",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:20:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 36,
                        "Order": 14,
                        "OperationModes": [
                            {
                                "Id": 36,
                                "Name": "TО #6-15 КРУГЛОШЛИФОВАЛЬHАЯ | 383",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:42:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
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
        "Id": 4,
        "Name": "Продукт #4",
        "Processes": [
            {
                "Id": 4,
                "Name": "ТП #4",
                "Kit": null,
                "Operations": [
                    {
                        "Id": 37,
                        "Order": 0,
                        "OperationModes": [
                            {
                                "Id": 37,
                                "Name": "TО #6-1 СПЕЦ. ШЛИФОВАЛЬHАЯ | 100",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:45:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 38,
                        "Order": 1,
                        "OperationModes": [
                            {
                                "Id": 38,
                                "Name": "TО #6-2 КРУГЛОШЛИФОВАЛЬHАЯ | 635",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:15:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 39,
                        "Order": 2,
                        "OperationModes": [
                            {
                                "Id": 39,
                                "Name": "TО #6-3 СПЕЦ. ШЛИФОВАЛЬHАЯ | 948",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:32:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 40,
                        "Order": 3,
                        "OperationModes": [
                            {
                                "Id": 40,
                                "Name": "TО #6-4 СЛЕСАРHАЯ | 930",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:18:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 41,
                        "Order": 4,
                        "OperationModes": [
                            {
                                "Id": 41,
                                "Name": "TО #6-5 ПЛОСКОШЛИФОВАЛЬHАЯ | 591",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:42:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 42,
                        "Order": 5,
                        "OperationModes": [
                            {
                                "Id": 42,
                                "Name": "TО #6-6 СПЕЦ. ШЛИФОВАЛЬHАЯ | 249",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:22:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    49,
                                    44
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 43,
                        "Order": 6,
                        "OperationModes": [
                            {
                                "Id": 43,
                                "Name": "TО #6-7 КРУГЛОШЛИФОВАЛЬHАЯ | 789",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:17:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 44,
                        "Order": 7,
                        "OperationModes": [
                            {
                                "Id": 44,
                                "Name": "TО #6-8 СЛЕСАРHАЯ | 103",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:17:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    52
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 45,
                        "Order": 8,
                        "OperationModes": [
                            {
                                "Id": 45,
                                "Name": "TО #6-9 ПЛОСКОШЛИФОВАЛЬHАЯ | 634",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:42:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    51,
                                    45
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 46,
                        "Order": 9,
                        "OperationModes": [
                            {
                                "Id": 46,
                                "Name": "TО #6-10 КРУГЛОШЛИФОВАЛЬHАЯ | 723",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:36:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
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
        "Id": 5,
        "Name": "Продукт #5",
        "Processes": [
            {
                "Id": 5,
                "Name": "ТП #5",
                "Kit": null,
                "Operations": [
                    {
                        "Id": 47,
                        "Order": 0,
                        "OperationModes": [
                            {
                                "Id": 47,
                                "Name": "TО #6-1 КРУГЛОШЛИФОВАЛЬHАЯ | 39",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:36:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 48,
                        "Order": 1,
                        "OperationModes": [
                            {
                                "Id": 48,
                                "Name": "TО #6-2 ФРЕЗЕРHАЯ С ЧПУ | 835",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:21:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 49,
                        "Order": 2,
                        "OperationModes": [
                            {
                                "Id": 49,
                                "Name": "TО #6-3 ОТЖИГ | 718",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:28:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 50,
                        "Order": 3,
                        "OperationModes": [
                            {
                                "Id": 50,
                                "Name": "TО #6-4 КРУГЛОШЛИФОВАЛЬHАЯ | 690",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:15:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    56
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 51,
                        "Order": 4,
                        "OperationModes": [
                            {
                                "Id": 51,
                                "Name": "TО #6-5 СПЕЦ. ШЛИФОВАЛЬHАЯ | 588",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:34:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 52,
                        "Order": 5,
                        "OperationModes": [
                            {
                                "Id": 52,
                                "Name": "TО #6-6 ОТЖИГ | 656",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:18:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    50
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 53,
                        "Order": 6,
                        "OperationModes": [
                            {
                                "Id": 53,
                                "Name": "TО #6-7 ФРЕЗЕРHАЯ С ЧПУ | 578",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:30:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 54,
                        "Order": 7,
                        "OperationModes": [
                            {
                                "Id": 54,
                                "Name": "TО #6-8 ПЛОСКОШЛИФОВАЛЬHАЯ | 863",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:22:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 55,
                        "Order": 8,
                        "OperationModes": [
                            {
                                "Id": 55,
                                "Name": "TО #6-9 ПЛОСКОШЛИФОВАЛЬHАЯ | 582",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:32:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    45,
                                    51
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 56,
                        "Order": 9,
                        "OperationModes": [
                            {
                                "Id": 56,
                                "Name": "TО #6-10 СПЕЦ. ШЛИФОВАЛЬHАЯ | 938",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:30:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 57,
                        "Order": 10,
                        "OperationModes": [
                            {
                                "Id": 57,
                                "Name": "TО #6-11 СПЕЦ. ШЛИФОВАЛЬHАЯ | 491",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:38:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    44,
                                    49
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 58,
                        "Order": 11,
                        "OperationModes": [
                            {
                                "Id": 58,
                                "Name": "TО #6-12 ФРЕЗЕРHАЯ С ЧПУ | 997",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:22:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
                                    53,
                                    54
                                ]
                            }
                        ]
                    },
                    {
                        "Id": 59,
                        "Order": 12,
                        "OperationModes": [
                            {
                                "Id": 59,
                                "Name": "TО #6-13 СПЕЦ. ШЛИФОВАЛЬHАЯ | 426",
                                "PrepareOperationDuration": "00:00:00",
                                "OperationDuration": "00:46:00",
                                "CompletionOperationDuration": "00:00:00",
                                "CompletionWorkCentrDuration": "00:00:00",
                                "Multiplicity": 1,
                                "WorkCenters": [
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

var workcenters = [
    {
        "Id": 44,
        "Name": "ин.389 Vсenter",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 45,
        "Name": "ин.439 CHEVALIER",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 49,
        "Name": "ин.454 Vсenter",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 50,
        "Name": "ин.22 CHEVALIER",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 51,
        "Name": "ин.399 CHEVALIER",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 52,
        "Name": "ин.161 HARDINGE",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 53,
        "Name": "ин.472 CHEVALIER",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 54,
        "Name": "ин.471 CHEVALIER",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 55,
        "Name": "ин.496 AVRORA",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    },
    {
        "Id": 56,
        "Name": "ин.450 Vсenter",
        "IdleCost": 200,
        "AdjustmentCost": 400,
        "ExecutionCost": 600
    }
];

var repairs = [
    {
        "WorkCenterId": 44,
        "Start": "2018-01-01T00:00:00Z",
        "Finish": "2018-10-10T00:00:00Z",
        "Service": [
            {
                "Start": "2018-10-01T00:00:00Z",
                "Finish": "2018-10-02T00:00:00Z"
            },
            {
                "Start": "2018-10-03T00:00:00Z",
                "Finish": "2018-10-05T00:00:00Z"
            },
            {
                "Start": "2018-10-07T00:00:00Z",
                "Finish": "2018-10-10T00:00:00Z"
            }
        ]
    }
];

var adjustments = [
    {
        "WorkCenterId": 50,
        "OperationId": 4,
        "PrevOperationId": null,
        "Duration": "00:15:00"
    }
];