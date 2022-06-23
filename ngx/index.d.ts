import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Android Package Manager
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { AndroidPackageManager } from '@awesome-cordova-plugins/android-package-manager';
 *
 *
 * constructor(private androidPackageManager: AndroidPackageManager) { }
 *
 * ...
 *
 *
 * this.androidPackageManager.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AndroidPackageManager extends AwesomeCordovaNativePlugin {
    /**
     * 설치된 패키지명 목록을 가져온다.
     */
    getInstalledPackages(): Promise<any>;
    /**
     * 설치된 어플리케이션 목록을 가져온다.
     */
    getInstalledApplications(): Promise<any>;
    /**
     * 패키지 정보를 가져온다.
     */
    getPackageInfo(packageName: any, flags: string): Promise<any>;
    /**
     * 인텐트 액티비티들을 가져온다.
     */
    queryIntentActivities(): Promise<any>;
    /**
     * 태스크를 종료한다.
     */
    finishAndRemoveTask(): Promise<any>;
}
