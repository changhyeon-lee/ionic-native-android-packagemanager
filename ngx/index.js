var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AndroidPackageManager = /** @class */ (function (_super) {
    __extends(AndroidPackageManager, _super);
    function AndroidPackageManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidPackageManager.prototype.getInstalledPackages = function () { return cordova(this, "getInstalledPackages", {}, arguments); };
    AndroidPackageManager.prototype.getInstalledApplications = function () { return cordova(this, "getInstalledApplications", {}, arguments); };
    AndroidPackageManager.prototype.getPackageInfo = function (packageName, flags) { return cordova(this, "getPackageInfo", {}, arguments); };
    AndroidPackageManager.prototype.queryIntentActivities = function () { return cordova(this, "queryIntentActivities", {}, arguments); };
    AndroidPackageManager.prototype.finishAndRemoveTask = function () { return cordova(this, "finishAndRemoveTask", {}, arguments); };
    AndroidPackageManager.pluginName = "AndroidPackageManager";
    AndroidPackageManager.plugin = "cordova-plugin-android-packagemanager";
    AndroidPackageManager.pluginRef = "cordova.plugins.morethani.packagemanager";
    AndroidPackageManager.repo = "";
    AndroidPackageManager.install = "";
    AndroidPackageManager.installVariables = [];
    AndroidPackageManager.platforms = ["Android"];
    return AndroidPackageManager;
}(AwesomeCordovaNativePlugin));
export { AndroidPackageManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1wYWNrYWdlLW1hbmFnZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7O0lBa0NyRyx5Q0FBMEI7Ozs7SUFNakUsb0RBQW9CO0lBT3BCLHdEQUF3QjtJQU94Qiw4Q0FBYyxhQUFDLFdBQVcsRUFBRSxLQUFhO0lBT3pDLHFEQUFxQjtJQU9yQixtREFBbUI7Ozs7Ozs7O2dDQWhGdkI7RUE4QzJDLDBCQUEwQjtTQUF4RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIEFuZHJvaWQgUGFja2FnZSBNYW5hZ2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBbmRyb2lkUGFja2FnZU1hbmFnZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW5kcm9pZC1wYWNrYWdlLW1hbmFnZXInO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRQYWNrYWdlTWFuYWdlcjogQW5kcm9pZFBhY2thZ2VNYW5hZ2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hbmRyb2lkUGFja2FnZU1hbmFnZXIuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBbmRyb2lkUGFja2FnZU1hbmFnZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBhY2thZ2VtYW5hZ2VyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tb3JldGhhbmkucGFja2FnZW1hbmFnZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFuZHJvaWRQYWNrYWdlTWFuYWdlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuXHQvKipcbiAgICAgKiDshKTsuZjrkJwg7Yyo7YKk7KeA66qFIOuqqeuhneydhCDqsIDsoLjsmKjri6QuXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEluc3RhbGxlZFBhY2thZ2VzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDshKTsuZjrkJwg7Ja07ZSM66as7LyA7J207IWYIOuqqeuhneydhCDqsIDsoLjsmKjri6QuXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEluc3RhbGxlZEFwcGxpY2F0aW9ucygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgICB9XG4gICAgLyoqXG4gICAgICog7Yyo7YKk7KeAIOygleuztOulvCDqsIDsoLjsmKjri6QuXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBhY2thZ2VJbmZvKHBhY2thZ2VOYW1lLCBmbGFnczogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICAgfVxuXHQvKipcbiAgICAgKiDsnbjthZDtirgg7JWh7Yuw67mE7Yuw65Ok7J2EIOqwgOyguOyYqOuLpC5cbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcXVlcnlJbnRlbnRBY3Rpdml0aWVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDtg5zsiqTtgazrpbwg7KKF66OM7ZWc64ukLlxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBmaW5pc2hBbmRSZW1vdmVUYXNrKCk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICAgIH1cblxufVxuIl19