import { IonicNativePlugin } from '@ionic-native/core';
export declare class AndroidPackageManager extends IonicNativePlugin {
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
    getPackageInfo(flag: string): Promise<any>;
    /**
     * 태스크를 종료한다.
     */
    finishAndRemoveTask(): Promise<any>;
}
