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
    AndroidPackageManager.prototype.getPackageInfo = function (flag) { return cordova(this, "getPackageInfo", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1wYWNrYWdlLW1hbmFnZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sdUNBQW1HLE1BQU0sK0JBQStCLENBQUM7O0lBa0NyRyx5Q0FBMEI7Ozs7SUFNakUsb0RBQW9CO0lBT3BCLHdEQUF3QjtJQU94Qiw4Q0FBYyxhQUFDLElBQVk7SUFPM0IsbURBQW1COzs7Ozs7OztnQ0F6RXZCO0VBOEMyQywwQkFBMEI7U0FBeEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBBbmRyb2lkIFBhY2thZ2UgTWFuYWdlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQW5kcm9pZFBhY2thZ2VNYW5hZ2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FuZHJvaWQtcGFja2FnZS1tYW5hZ2VyJztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhbmRyb2lkUGFja2FnZU1hbmFnZXI6IEFuZHJvaWRQYWNrYWdlTWFuYWdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYW5kcm9pZFBhY2thZ2VNYW5hZ2VyLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5kcm9pZFBhY2thZ2VNYW5hZ2VyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYW5kcm9pZC1wYWNrYWdlbWFuYWdlcicsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubW9yZXRoYW5pLnBhY2thZ2VtYW5hZ2VyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkUGFja2FnZU1hbmFnZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cblx0LyoqXG4gICAgICog7ISk7LmY65CcIO2MqO2CpOyngOuqhSDrqqnroZ3snYQg6rCA7KC47Jio64ukLlxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRJbnN0YWxsZWRQYWNrYWdlcygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgICB9XG4gICAgLyoqXG4gICAgICog7ISk7LmY65CcIOyWtO2UjOumrOy8gOydtOyFmCDrqqnroZ3snYQg6rCA7KC47Jio64ukLlxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRJbnN0YWxsZWRBcHBsaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gICAgfVxuICAgIC8qKlxuICAgICAqIO2MqO2CpOyngCDsoJXrs7Trpbwg6rCA7KC47Jio64ukLlxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQYWNrYWdlSW5mbyhmbGFnOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgICB9XG4gICAgLyoqXG4gICAgICog7YOc7Iqk7YGs66W8IOyiheujjO2VnOuLpC5cbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZmluaXNoQW5kUmVtb3ZlVGFzaygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgICB9XG5cbn1cbiJdfQ==