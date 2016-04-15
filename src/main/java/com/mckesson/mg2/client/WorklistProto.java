package com.mckesson.mg2.client;

import java.util.Arrays;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.event.shared.SimpleEventBus;
import com.googlecode.gwtphonegap.client.PhoneGap;
import com.googlecode.gwtphonegap.client.PhoneGapAvailableEvent;
import com.googlecode.gwtphonegap.client.PhoneGapAvailableHandler;
import com.googlecode.gwtphonegap.client.PhoneGapTimeoutEvent;
import com.googlecode.gwtphonegap.client.PhoneGapTimeoutHandler;
import com.googlecode.gwtphonegap.client.event.OffLineEvent;
import com.googlecode.gwtphonegap.client.event.OffLineHandler;
import com.googlecode.gwtphonegap.client.event.OnlineEvent;
import com.googlecode.gwtphonegap.client.event.OnlineHandler;
import com.googlecode.mgwt.ui.client.MGWT;
import com.googlecode.mgwt.ui.client.MGWTSettings;
import com.googlecode.mgwt.ui.client.widget.animation.Animation;
import com.googlecode.mgwt.ui.client.widget.animation.Animations;
import com.mckesson.mg2.client.main.LoginView;
import com.mckesson.mg2.client.utils.AppStatusEvent;
import com.mckesson.mg2.client.utils.AppStatusLevel;
import com.mckesson.mg2.client.utils.HtmlConstants;
import com.mckesson.mg2.client.utils.MG2Log;
import com.vaadin.polymer.Polymer;
import com.vaadin.polymer.elemental.Function;
import com.vaadin.polymer.iron.IronIconElement;
import com.vaadin.polymer.paper.PaperIconItemElement;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class WorklistProto implements EntryPoint {

    /**
     * logger 
     */
    private static final MG2Log log = new MG2Log(WorklistProto.class);
    
    PhoneGap phoneGap;
    EventBus eventBus;

    private MainView mainView;
    
    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {      
        log.info("WorklistProto.onModuleLoad()");
        // set viewport and other settings for mobile
        MGWT.applySettings(MGWTSettings.getAppSetting());
        
        goFullScreen();
        startPolymer();

    }

    /**
     * 
     */
    void startPhoneGap() {
        // load dependency injection
        eventBus = GWT.create(SimpleEventBus.class);
        phoneGap = GWT.create(PhoneGap.class);
        mainView = MainView.get();
        
        // when phonegap is ready, start polymer
        phoneGap.addHandler(new PhoneGapAvailableHandler() {

            public void onPhoneGapAvailable(PhoneGapAvailableEvent event) {
                log.info("PhoneGap.onPhoneGapAvailable()");
                startApplication();
            }

        });

        phoneGap.addHandler(new PhoneGapTimeoutHandler() {
            public void onPhoneGapTimeout(final PhoneGapTimeoutEvent event) {
                log.info("PhoneGap.onPhoneGapTimeout()");
                
            }
        });

        phoneGap.getEvent().getOffLineHandler()
                .addOfflineHandler(new OffLineHandler() {
                    public void onOffLine(final OffLineEvent event) {
                        log.info("PhoneGap.onOffLine()");
                        eventBus.fireEvent(new AppStatusEvent(AppStatusLevel.ERROR,
                                HtmlConstants.NO_INTERNET_ERRMSG));
                    }
                });

        phoneGap.getEvent().getOnlineHandler()
                .addOnlineHandler(new OnlineHandler() {
                    public void onOnlineEvent(final OnlineEvent event) {
                        log.info("PhoneGap.onOnlineEvent()");
                        eventBus.fireEvent(new AppStatusEvent(AppStatusLevel.INFO,
                                HtmlConstants.RESTORED_INTERNET_MSG));
                    }
                });

        phoneGap.initializePhoneGap();
    }

    /**
     * start polymer bindings
     */
    @SuppressWarnings("rawtypes")
    protected void startPolymer() {
        log.info("WorklistProto.startPolymer()");
        // We have to load icon sets before run application
        Polymer.importHref(Arrays.asList(
              "iron-icons/iron-icons.html",
               PaperIconItemElement.SRC,
               IronIconElement.SRC), new Function() {
          public Object call(Object arg) {
            // The app is executed when all imports succeed.
            log.info("iron-icons loaded.");
            return null;
          }
        });
        Polymer.whenReady(new Function() {
            public Object call(Object arg) {
                startPhoneGap();
                return null;
            }
        });
    }

    /**
     * force fullscreen??
     * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
     */
    public static native void goFullScreen() /*-{
        var elem = $doc.body;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }    
    }-*/;
    
    /**
     * 
     */
    protected void startApplication() {
        mainView.gotoView((LoginView) GWT.create(LoginView.class), Animations.POP);        
    }
}
