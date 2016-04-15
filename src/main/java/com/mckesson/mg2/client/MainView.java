/**
 * 
 */
package com.mckesson.mg2.client;


import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.patient.ToastedView;
 
/**
 * @author efdj6eb
 *
 */
public class MainView {
    private static MainView singleton;
    
    private RootPanel rootPanel;

    private Widget previousView;

    private Widget currentView;
    
//    private AnimatableDisplay display;
    /**
     * 
     */
    public MainView() {
        this.rootPanel = RootPanel.get();
        
//        display = GWT.create(AnimatableDisplay.class);
//        rootPanel.add(display);
        
//        Window.addWindowClosingHandler(new Window.ClosingHandler() {
//
//            @Override
//            public void onWindowClosing(final ClosingEvent event) {
//                event.setMessage("Do you want to end the prototype?");
//            }
//        });
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
     */
    public void gotoView(Widget panel) {
        if (currentView != null) {
            previousView = currentView;
//            rootPanel.remove(currentView);
//            currentView.removeFromParent();
//                rootPanel.clear();
            RootPanel.getBodyElement().removeChild(currentView.getElement());
        }        
        currentView = panel;
        rootPanel.add(currentView);
    }
    
    public void gotoBack() {
        if (previousView != null) {
            gotoView(previousView);
        }
    }
}
