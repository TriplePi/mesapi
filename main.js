
/*
 * MES
 *
 * MES API Reference
 */


var api = require("./routes/api.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/api/adjustment", "POST", api.postApiAdjustment);
Sandbox.define("/api/adjustment", "DELETE", api.deleteApiAdjustment);
Sandbox.define("/api/adjustment/{adjustmentId}", "DELETE", api.deleteApiAdjustment2);
Sandbox.define("/api/adjustment/operations/{operationId}", "POST", api.postApiAdjustmentOperations);
Sandbox.define("/api/adjustment/operations/{operationId}/workcenters/{workCenterId}", "POST", api.postApiAdjustmentOperations2);
Sandbox.define("/api/adjustment/workcenters/{workCenterId}", "POST", api.postApiAdjustmentWorkcenters);
Sandbox.define("/api/adjustment/workcenters/{workCenterId}/operations/{operationId}", "POST", api.postApiAdjustmentWorkcenters2);
Sandbox.define("/api/order", "POST", api.postApiOrder);
Sandbox.define("/api/order/batches", "GET", api.getApiOrderBatches);
Sandbox.define("/api/problem", "GET", api.getApiProblem);
Sandbox.define("/api/problem", "POST", api.postApiProblem);
Sandbox.define("/api/problem/{id}", "GET", api.getApiProblem2);
Sandbox.define("/api/problem/{id}", "DELETE", api.deleteApiProblem);
Sandbox.define("/api/problem/{id}/solutions", "GET", api.getApiProblemSolutions);
Sandbox.define("/api/problem/{id}/solutions", "POST", api.postApiProblemSolutions);
Sandbox.define("/api/problem/{id}/solutions/{solutionId}", "POST", api.postApiProblem2);
Sandbox.define("/api/product", "POST", api.postApiProduct);
Sandbox.define("/api/product/{productId}", "GET", api.getApiProduct);
Sandbox.define("/api/product/{productId}", "DELETE", api.deleteApiProduct);
Sandbox.define("/api/product/{productId}/processes", "POST", api.postApiProductProcesses);
Sandbox.define("/api/product/{productId}/processes/{processId}", "GET", api.getApiProduct2);
Sandbox.define("/api/product/{productId}/processes/{processId}/operations", "POST", api.postApiProductOperations);
Sandbox.define("/api/product/{productId}/processes/{processId}/operations/{operationId}/modes", "POST", api.postApiProductModes);
Sandbox.define("/api/product/{productId}/processes/{processId}/operations/{operationId}/modes/{operationModeId}", "DELETE", api.deleteApiProduct2);
Sandbox.define("/api/report/batchesForecast", "GET", api.getApiReportBatchesforecast);
Sandbox.define("/api/report/dailyReport", "GET", api.getApiReportDailyreport);
Sandbox.define("/api/report/scheduleDetailed", "GET", api.getApiReportScheduledetailed);
Sandbox.define("/api/schedule", "GET", api.getApiSchedule);
Sandbox.define("/api/schedule", "POST", api.postApiSchedule);
Sandbox.define("/api/schedule/{id}/actions", "POST", api.postApiScheduleActions);
Sandbox.define("/api/schedule/{id}/history", "GET", api.getApiScheduleHistory);
Sandbox.define("/api/schedule/{id}/manageactions", "POST", api.postApiScheduleManageactions);
Sandbox.define("/api/schedule/deleted", "GET", api.getApiScheduleDeleted);
Sandbox.define("/api/timeline", "GET", api.getApiTimeline);
Sandbox.define("/api/timeline/adjustments", "GET", api.getApiTimelineAdjustments);
Sandbox.define("/api/timeline/workcenterinaccessibility", "GET", api.getApiTimelineWorkcenterinaccessibility);
Sandbox.define("/api/timeline/workcenters", "GET", api.getApiTimelineWorkcenters);
Sandbox.define("/api/timeline/workcenterservice", "GET", api.getApiTimelineWorkcenterservice);
Sandbox.define("/api/workcenter", "GET", api.getApiWorkcenter);
Sandbox.define("/api/workcenter", "POST", api.postApiWorkcenter);
Sandbox.define("/api/workcenter/{workCenterId}", "DELETE", api.deleteApiWorkcenter);
Sandbox.define("/api/workcenter/{workCenterId}/service", "POST", api.postApiWorkcenterService);
Sandbox.define("/api/workcenter/{workCenterId}/workingtimes", "POST", api.postApiWorkcenterWorkingtimes);
Sandbox.define('/api/signin','GET', api.postSignIn);