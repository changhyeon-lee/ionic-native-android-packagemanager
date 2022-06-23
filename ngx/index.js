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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1wYWNrYWdlLW1hbmFnZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7O0lBa0NyRyx5Q0FBMEI7Ozs7SUFNakUsb0RBQW9CO0lBT3BCLHdEQUF3QjtJQU94Qiw4Q0FBYyxhQUFDLFdBQVcsRUFBRSxLQUFhO0lBT3pDLG1EQUFtQjs7Ozs7Ozs7Z0NBekV2QjtFQThDMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgQW5kcm9pZCBQYWNrYWdlIE1hbmFnZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFuZHJvaWRQYWNrYWdlTWFuYWdlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hbmRyb2lkLXBhY2thZ2UtbWFuYWdlcic7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5kcm9pZFBhY2thZ2VNYW5hZ2VyOiBBbmRyb2lkUGFja2FnZU1hbmFnZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmFuZHJvaWRQYWNrYWdlTWFuYWdlci5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWRQYWNrYWdlTWFuYWdlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtcGFja2FnZW1hbmFnZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1vcmV0aGFuaS5wYWNrYWdlbWFuYWdlcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5kcm9pZFBhY2thZ2VNYW5hZ2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG5cdC8qKlxuICAgICAqIOyEpOy5mOuQnCDtjKjtgqTsp4DrqoUg66qp66Gd7J2EIOqwgOyguOyYqOuLpC5cbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0SW5zdGFsbGVkUGFja2FnZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOyEpOy5mOuQnCDslrTtlIzrpqzsvIDsnbTshZgg66qp66Gd7J2EIOqwgOyguOyYqOuLpC5cbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0SW5zdGFsbGVkQXBwbGljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XG4gICAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDtjKjtgqTsp4Ag7KCV67O066W8IOqwgOyguOyYqOuLpC5cbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGFja2FnZUluZm8ocGFja2FnZU5hbWUsIGZsYWdzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgICB9XG4gICAgLyoqXG4gICAgICog7YOc7Iqk7YGs66W8IOyiheujjO2VnOuLpC5cbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZmluaXNoQW5kUmVtb3ZlVGFzaygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgICB9XG5cbn1cbiJdfQ==