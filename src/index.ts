/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

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
@Plugin({
  pluginName: 'AndroidPackageManager',
  plugin: 'cordova-plugin-android-packagemanager', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.morethani.packagemanager', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class AndroidPackageManager extends AwesomeCordovaNativePlugin {

	/**
     * 설치된 패키지명 목록을 가져온다.
     */
    @Cordova()
    getInstalledPackages(): Promise<any> {
      return; // We add return; here to avoid any IDE / Compiler errors
    }
    /**
     * 설치된 어플리케이션 목록을 가져온다.
     */
    @Cordova()
    getInstalledApplications(): Promise<any> {
      return; // We add return; here to avoid any IDE / Compiler errors
    }
    /**
     * 패키지 정보를 가져온다.
     */
    @Cordova()
    getPackageInfo(flag: string): Promise<any> {
      return; // We add return; here to avoid any IDE / Compiler errors
    }
    /**
     * 태스크를 종료한다.
     */
    @Cordova()
    finishAndRemoveTask(): Promise<any> {
      return; // We add return; here to avoid any IDE / Compiler errors
    }

}
