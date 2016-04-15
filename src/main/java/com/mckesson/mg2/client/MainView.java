/**
 * 
 */
package com.mckesson.mg2.client;


import java.util.Stack;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.Window.ClosingEvent;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.googlecode.mgwt.ui.client.animation.AnimationHelper;
import com.googlecode.mgwt.ui.client.widget.animation.Animation;
import com.googlecode.mgwt.ui.client.widget.animation.Animations;
import com.mckesson.mg2.client.patient.ToastedView;

/**
 * @author efdj6eb
 *
 */
public class MainView {
    private static MainView singleton;

    private RootPanel rootPanel;

    private AnimationHelper display;

    private Stack<Widget> pageStack;
    /**
     * 
     */
    public MainView() {
        this.pageStack = new Stack<Widget>();
        this.rootPanel = RootPanel.get();

        display = GWT.create(AnimationHelper.class);
        rootPanel.add(display);

        Window.addWindowClosingHandler(new Window.ClosingHandler() {

            @Override
            public void onWindowClosing(final ClosingEvent event) {
                event.setMessage("Do you want to end the prototype?");
            }
        });
    }

    public static MainView get() {
        if (singleton == null) {
            singleton = new MainView();
        }
        return singleton;
    }

    public void gotoView( ToastedView panel, String toastMsg ) {
        // trigger toast message
        panel.triggerToast(toastMsg);
        gotoView(panel);
    }
    /**
     * @param panel
     * Default animation SLIDE
     */
    public void gotoView(Widget panel) {
        gotoView(panel, Animations.SLIDE );
    }
    /**
     * @param panel
     * @param animation    
     */
    public void gotoView(Widget panel, Animation animation) {
        
        pageStack.push(panel);
        display.goTo(panel, animation);
    }

    public void gotoBack() {
        pageStack.pop(); // pop current
        final Widget view = pageStack.pop(); // pop previous
        if (view != null) {
            gotoView(view, Animations.SLIDE_REVERSE);
        }
    }
}
