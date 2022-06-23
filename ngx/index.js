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
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
var AndroidPackageManager = /** @class */ (function (_super) {
    __extends(AndroidPackageManager, _super);
    function AndroidPackageManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidPackageManager.prototype.getInstalledPackages = function () { return cordova(this, "getInstalledPackages", {}, arguments); };
    AndroidPackageManager.prototype.getInstalledApplications = function () { return cordova(this, "getInstalledApplications", {}, arguments); };
    AndroidPackageManager.prototype.getPackageInfo = function (flag) { return cordova(this, "getPackageInfo", {}, arguments); };
    AndroidPackageManager.prototype.finishAndRemoveTask = function () { return cordova(this, "finishAndRemoveTask", {}, arguments); };
    AndroidPackageManager.pluginName = "cordova-plugin-android-packagemanager";
    AndroidPackageManager.plugin = "cordova-plugin-android-packagemanager";
    AndroidPackageManager.pluginRef = "cordova.plugins.android.packagemanager";
    AndroidPackageManager.repo = "";
    AndroidPackageManager.install = "";
    AndroidPackageManager.installVariables = [];
    AndroidPackageManager.platforms = ["Android"];
    return AndroidPackageManager;
}(IonicNativePlugin));
export { AndroidPackageManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1wYWNrYWdlbWFuYWdlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQXNELGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBYWpGLHlDQUFpQjs7OztJQUsxRCxvREFBb0I7SUFPcEIsd0RBQXdCO0lBT3hCLDhDQUFjLGFBQUMsSUFBWTtJQU8zQixtREFBbUI7Ozs7Ozs7O2dDQW5EckI7RUF5QjJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBhY2thZ2VtYW5hZ2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wYWNrYWdlbWFuYWdlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5hbmRyb2lkLnBhY2thZ2VtYW5hZ2VyJyxcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5kcm9pZFBhY2thZ2VNYW5hZ2VyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICog7ISk7LmY65CcIO2MqO2CpOyngOuqhSDrqqnroZ3snYQg6rCA7KC47Jio64ukLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnN0YWxsZWRQYWNrYWdlcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbiAgLyoqXG4gICAqIOyEpOy5mOuQnCDslrTtlIzrpqzsvIDsnbTshZgg66qp66Gd7J2EIOqwgOyguOyYqOuLpC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SW5zdGFsbGVkQXBwbGljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuICAvKipcbiAgICog7Yyo7YKk7KeAIOygleuztOulvCDqsIDsoLjsmKjri6QuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFBhY2thZ2VJbmZvKGZsYWc6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuICAvKipcbiAgICog7YOc7Iqk7YGs66W8IOyiheujjO2VnOuLpC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZmluaXNoQW5kUmVtb3ZlVGFzaygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxufVxuIl19