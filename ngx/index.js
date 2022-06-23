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
    AndroidPackageManager.pluginRef = "cordova.plugins.morethani.packagemanager";
    AndroidPackageManager.repo = "";
    AndroidPackageManager.install = "";
    AndroidPackageManager.installVariables = [];
    AndroidPackageManager.platforms = ["Android"];
    return AndroidPackageManager;
}(IonicNativePlugin));
export { AndroidPackageManager };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1wYWNrYWdlbWFuYWdlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQXNELGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBYWpGLHlDQUFpQjs7OztJQUsxRCxvREFBb0I7SUFPcEIsd0RBQXdCO0lBT3hCLDhDQUFjLGFBQUMsSUFBWTtJQU8zQixtREFBbUI7Ozs7Ozs7O2dDQW5EckI7RUF5QjJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1hbmRyb2lkLXBhY2thZ2VtYW5hZ2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wYWNrYWdlbWFuYWdlcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tb3JldGhhbmkucGFja2FnZW1hbmFnZXInLFxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkUGFja2FnZU1hbmFnZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiDshKTsuZjrkJwg7Yyo7YKk7KeA66qFIOuqqeuhneydhCDqsIDsoLjsmKjri6QuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEluc3RhbGxlZFBhY2thZ2VzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuICAvKipcbiAgICog7ISk7LmY65CcIOyWtO2UjOumrOy8gOydtOyFmCDrqqnroZ3snYQg6rCA7KC47Jio64ukLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRJbnN0YWxsZWRBcHBsaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG4gIC8qKlxuICAgKiDtjKjtgqTsp4Ag7KCV67O066W8IOqwgOyguOyYqOuLpC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGFja2FnZUluZm8oZmxhZzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG4gIC8qKlxuICAgKiDtg5zsiqTtgazrpbwg7KKF66OM7ZWc64ukLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBmaW5pc2hBbmRSZW1vdmVUYXNrKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG59XG4iXX0=