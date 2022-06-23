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
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'cordova-plugin-android-packagemanager',
  plugin: 'cordova-plugin-android-packagemanager',
  pluginRef: 'cordova.plugins.morethani.packagemanager',
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'],
})
@Injectable()
export class AndroidPackageManager extends IonicNativePlugin {
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
