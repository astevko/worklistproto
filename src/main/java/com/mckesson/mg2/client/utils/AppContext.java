// Copyright 2014 McKesson Corporation and/or one of its subsidiaries.
package com.mckesson.mg2.client.utils;

import javax.inject.Inject;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.googlecode.gwtphonegap.client.PhoneGap;


/**
 * This is the intersection of Phonegap and our application settings.
 * 
 * This is mostly here to answer UI issues like "how should I lay out my panel?" "do I have to leave
 * space for the IOS status bar?" etc.
 * 
 * @author errvqmg
 *
 */
public class AppContext {
	protected static final MG2Log log = new MG2Log(AppContext.class);
	
	private final PhoneGap phoneGap;

	/**
	 * @return the phoneGap
	 */
	public PhoneGap getPhoneGap() {
		return phoneGap;
	}

	@Inject
	public AppContext(final PhoneGap phoneGap) {
		this.phoneGap = phoneGap;
	}

	public boolean isIosDevice() {
		// MGWT.getOsDetection() relies on what is defined in the module config.  
		// use phonegap getPlatform() instead for more accurate detection 		
		String platform = phoneGap.getDevice().getPlatform();
		log.info("PLATFORM: " + platform );
		//platform = "iPhone";
		return ( platform.equals("iPhone") || platform.equals("iOS") );
		// docs say it returns iPhone, but reality says iOS...

	}

	/**
	 * Window.isCordovaApp is set within index.html via 
	 * <script type="text/javascript" language="javascript" src="cordova-2.6.0.js" onload="javascript:window.isCordovaApp = true;"></script>
	 * @return isCordovaApp true?
	 */
	public static native boolean isDesktopBrowser() /*-{
		// undefined means this is not a device but a browser
		return (window.isCordovaApp === undefined);
	}-*/;
	/**
	 * @param scrollPanel
	 * @param dependencies array of UIObjects
	 * 
	 * NOTE: I ran into a problem with the View not calculating correctly due to some of the dependencies 
	 * not being attached to the DOM possibly because of this  
	 * https://groups.google.com/forum/#!topic/google-web-toolkit/hMGv8Kcr-mA
	 */
	public String calcScrollPanelHeight(boolean includeMainMenu, Widget... dependencies ) {
		// client height is the start
		int availableHeight = Window.getClientHeight();
		StringBuilder logmsg = new StringBuilder().append(availableHeight);
		for (Widget dependency : dependencies) {
			if (dependency.isAttached()) {
				log.error("widget is not attached", null);
			}
			logmsg.append(" - ").append(dependency.getOffsetHeight());
			availableHeight -= dependency.getOffsetHeight();
		}
		if (includeMainMenu) {
			// main menu
			logmsg.append(" - 50 menu");
			availableHeight -= 50;
		}

		// is apple
		if (isIosDevice()) {
			// main menu
			logmsg.append(" - 20 ios");
			availableHeight -= 20;
		}
		// .box margin
/*		logmsg.append(" - 2 border");
		availableHeight -= 2;
*/		
		logmsg.append(" = ").append(availableHeight).append("px");
		
		// resize the scroll panel to this 
		log.info("resizeScrollPanel: " + logmsg.toString());
		return availableHeight+"px";
	}
}
